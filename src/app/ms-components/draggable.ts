declare namespace Draggable {
	interface Coord {x: number; y: number}
	interface Size {height: number, width: number}

	interface Attrs extends angular.IAttributes {
		spgDraggable: string;
		draggablePayload: string;
	}

	interface DropZoneAttrs extends angular.IAttributes {
		spgDraggableDropZone: string;
	}

	interface DragNotification<T> {
		draggableId: string;
		destination: string;
		payload: T;
		index: number;
		origin: string;
		element?: JQuery;
	}
}


/*@MODULE*/
const DraggableDirective: angular.IDirectiveFactory = ($document: angular.IDocumentService, rx: SpgRxService, draggableService: SpgDraggableService) => ({
	restrict: 'A',
	require: '^^spgDraggableContainer',
	link(scope: angular.IScope, element: JQuery, attrs: Draggable.Attrs, ctrl: DraggableContainerController) {
		const { left: initX, top: initY } = element.css(['left', 'top']);
		const [ elHeight, elWidth ] = [element.height(), element.width()];
		let domInputs;

		element.attr('draggable', 'false');
		scope.$on('$destroy', () => domInputs && domInputs.dispose());

		domInputs = rx.fromEvent(element, 'mousedown')
			.flatMapLatest(({ pageX: x, pageY: y }) => rx
				.fromEvent($document, 'mousemove')
				.map(({ pageX, pageY }) => ({x: pageX, y: pageY}))
				.filter(position => draggableService.getDistanceBetween(position, {x, y}) > 10)
				.sample(25)
				.merge(rx
					.timer(500)
					.map(() => ({x,y})))
				.takeUntil(rx.fromEvent($document, 'mouseup'))
				.take(1))
			.do(onDragStart)
			.flatMapLatest(() => rx
				.fromEvent($document, 'mousemove')
				.takeUntil(rx.fromEvent($document, 'mouseup'))
				.finally(onDragEnd))
			.map(({ pageX, pageY }) => ({x: pageX, y: pageY}))
			.throttle(40)
			.do(onDrag)
			.subscribe();

		function onDragStart({ x, y }:  Draggable.Coord) {
			element.addClass('drag-active');
			ctrl.onDragStart(element);
			onDrag({x,y});
		}

		function onDrag({ x, y }: Draggable.Coord) {
			let { x: left, y: top} = draggableService.getOffsetPosition({x,y}, {height: elHeight, width: elWidth});
			element.css({left, top});
			ctrl.onDrag({x,y});
		}

		function onDragEnd() {
			element.removeClass('drag-active').css({left: initX || 0, top: initY || 0});
			ctrl.onDragEnd(element, attrs.spgDraggable, scope.$eval(attrs.draggablePayload));
		}
	}
});

angular.module('munisSalesLink').directive('spgDraggable', ['$document', 'spgRx',  'spgDraggableService', DraggableDirective]);





/*@MODULE*/
interface SpgDraggableService {
	$PLACEHOLDER: JQuery,
	SELECTOR: string,
	getClosestPosition(targetPosition: Draggable.Coord, positions: Map<Draggable.Coord, any>): Draggable.Coord;
	getCenterPosition(position: Draggable.Coord, dimensions: Draggable.Size): Draggable.Coord;
	getOffsetPosition(position: Draggable.Coord, dimensions: Draggable.Size): Draggable.Coord;
	getDistanceBetween(pointA: Draggable.Coord, pointB: Draggable.Coord): Number;
}

const DraggableServiceFactory = () => Object.freeze({
	$PLACEHOLDER: angular.element('<div class="spg-draggable-placeholder"></div>'),
	SELECTOR: '[spg-draggable]',

	getClosestPosition(target: Draggable.Coord, positions: Map<Draggable.Coord, any>): Draggable.Coord {
		let hash = Object.create(null);
		positions.forEach((element, position) => {
			hash[this.getDistanceBetween(target, position)] = position;
		});

		return hash[Math.min(...Object.keys(hash).map(distance => +distance))];
	},

	getCenterPosition({ x, y }: Draggable.Coord, { height, width }: Draggable.Size): Draggable.Coord {
		return ({x: x + width/2, y: y + height/2});
	},

	getOffsetPosition({ x, y }: Draggable.Coord, { height, width }: Draggable.Size): Draggable.Coord {
		return ({x: x - width/2, y: y - height/2});
	},

	getDistanceBetween(pointA: Draggable.Coord, pointB: Draggable.Coord): Number {
		return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
	},
});

angular.module('munisSalesLink').factory('spgDraggableService', DraggableServiceFactory);




/*@MODULE*/
class DraggableContainerController implements angular.IController {
	static $inject = ['$scope', '$element', 'spgDraggableService', 'spgRx'];

	private dropZones: Set<DraggableDropZoneController>;
	private positions: Map<Draggable.Coord, DraggableDropZoneController>;
	private notifier: SpgRx.ISubject<Draggable.DragNotification<any>>;
	private dragData: {origin?: string, destination?: string, index?: number};

	constructor(
		private $scope: angular.IScope,
	 	private $element: angular.IRootElementService,
		private draggableService: SpgDraggableService,
		private rx: SpgRxService
	) {}

	$onInit() {
		this.dropZones = new Set<DraggableDropZoneController>();
		this.positions = new Map<Draggable.Coord, DraggableDropZoneController>();
		this.notifier = new this.rx.Subject<Draggable.DragNotification<any>>();
	}

	$onDestroy() {
		this.notifier.dispose();
	}

	addDropZone(dropZone: DraggableDropZoneController) {
		this.dropZones.add(dropZone);
	}

	deleteDropZone(dropZone: DraggableDropZoneController) {
		this.dropZones.delete(dropZone);
	}

	onDragStart(element: JQuery) {
		this.$element.addClass('drag-active');
		this.dragData = {};
		this.dropZones.forEach(dropZone => {
			this.positions.set(dropZone.getCurrentPosition(), dropZone);
			if ( dropZone.contains(element) ) {
				this.dragData.origin = dropZone.id;
			}
		});

		element.detach().appendTo('body');
		this.dropZones.forEach(dropZone => {
			dropZone.updateElementPositions();
		});
	}

	onDrag(coords: Draggable.Coord) {
		let closestPosition = this.draggableService.getClosestPosition(coords, this.positions);
		let closestDropZone = this.positions.get(closestPosition);
		this.dragData.destination = closestDropZone.id;
		this.dragData.index = closestDropZone.appendPlaceholder(this.draggableService.$PLACEHOLDER, coords);
	}

	onDragEnd(element: JQuery, draggableId: string, payload: any) {
		this.$element.removeClass('drag-active');
		this.positions.clear();
		this.draggableService.$PLACEHOLDER.after(element).detach();

		let { origin, destination, index } = this.dragData;
		this.notifier.onNext({ draggableId, destination, index, payload, origin, element });
	}

	observe(): SpgRx.IObservable<Draggable.DragNotification<any>> {
		return this.notifier.asObservable();
	}
}

const DraggableContainerDirective: angular.IDirectiveFactory = () => ({restrict: 'A', controller: DraggableContainerController});

angular.module('munisSalesLink').directive('spgDraggableContainer', DraggableContainerDirective);






/*@MODULE*/
class DraggableDropZoneController implements angular.IController {
	static $inject = ['$element', '$attrs', 'spgDraggableService'];

	private containerCtrl: DraggableContainerController;
	private positions: Map<Draggable.Coord, JQuery>;

	constructor(private $element: angular.IRootElementService, private $attrs: Draggable.DropZoneAttrs, private draggableService: SpgDraggableService) {}

	get draggables(): JQuery {
		return this.$element.find(this.draggableService.SELECTOR);
	}

	get id(): string {
		return this.$attrs.spgDraggableDropZone;
	}

	$postLink() {
		this.positions = new Map<Draggable.Coord, JQuery>();
		this.containerCtrl.addDropZone(this);
	}

	$onDestroy() {
		this.containerCtrl.deleteDropZone(this);
	}

	getCurrentPosition(): Draggable.Coord {
		let draggables = this.draggables;
		let { left: x, top: y } = this.$element.offset();
		let height = this.$element.height();
		let lastDraggable = draggables.length ? draggables.last() : null;
		let right = lastDraggable ? lastDraggable.offset().left + lastDraggable.width() : x;
		let width = right - x;
		return this.draggableService.getCenterPosition({x, y}, {height, width});
	}
	contains(element: JQuery): boolean {
		return !!this.$element.has(element[0]).length;
	}

	updateElementPositions() {
		this.positions.clear();
		this.draggables.each((idx, node) => {
			let element = angular.element(node);
			let { left: x, top: y } = element.offset();
			let [ height, width ] = [element.height(), element.width()];
			this.positions.set(this.draggableService.getCenterPosition({x,y},{height, width}), element);
		});
	}

	appendPlaceholder(placeholder: JQuery, coords: Draggable.Coord): number {
		if ( !this.positions.size ) {
			placeholder.appendTo(this.$element as JQuery);
			return 0;
		}

		let closestPosition = this.draggableService.getClosestPosition(coords, this.positions);
		let closestElement = this.positions.get(closestPosition);
		closestPosition.x < coords.x ? placeholder.insertAfter(closestElement) : placeholder.insertBefore(closestElement);
		return placeholder.prevAll(this.draggableService.SELECTOR).length;
	}

	linkContainer(containerCtrl: DraggableContainerController) {
		this.containerCtrl = containerCtrl;
	}
}

const DraggableDropZoneDirective: angular.IDirectiveFactory = () => ({
	restrict: 'A',
	require: ['spgDraggableDropZone', '^^spgDraggableContainer'],
	controller: DraggableDropZoneController,
	link(scope: angular.IScope, element: angular.IRootElementService, attrs: angular.IAttributes, [ ctrl, container ]: [DraggableDropZoneController, DraggableContainerController]) {
		ctrl.linkContainer(container);
	}
});

angular.module('munisSalesLink').directive('spgDraggableDropZone', DraggableDropZoneDirective);



[spg-draggable-container] {
	&.drag-active {
		user-select: none;
	}
}

[spg-draggable-drop-zone] {
	.spg-draggable-placeholder {
		width: 100px;
		height: 28px;
		border: 2px dotted $ms-grey-04;
		border-radius: 3px;
		float: left;
	}
}

[spg-draggable] {
	&.drag-active {
		display: block;
		position: absolute;
		z-index: 9999;
		background: $ms-grey-24;
		color: $ms-white;
		text-align: center;
		border: 2px solid $ms-grey-24;
		border-radius: 4px;
		padding: 4px 6px;
		user-select: none;

		a {
			color: $ms-white;
		}
	}
}








