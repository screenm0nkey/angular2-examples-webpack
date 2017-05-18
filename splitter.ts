/*@MODULE*/
class SplitterBarController implements angular.IComponentController {
	static $inject = ['$scope', '$element', '$document', 'spgRx'];

	/*BINDINGS*/
	notifier: SpgRx.ISubject<Splitter.Position>;
	isVertical: boolean;
	index: number;
	onDragBegin: () => void;
	onDragMove: (params: { coords: Splitter.Coord, index: number }) => number;
	onDragComplete: () => void;

	domInputs: SpgRx.ISubscription<{ x: number, y: number }>;
	max: boolean;

	private pSizeBounds: [number, number];

	constructor(
		private $scope: angular.IScope,
		private $element: angular.IRootElementService,
		private $document: angular.IDocumentService,
		private rx: SpgRxService
	) { }

	get sizeBounds(): [number, number] {
		return this.pSizeBounds || (this.pSizeBounds = this.isVertical ? [2, 86] : [1, 98]);
	}

	$postLink() {
		//Subscribe to the 'mousedown' event
		this.domInputs = this.rx.fromEvent(this.$element, 'mousedown')
		//We dont want multiple clicks within short timeframe to interrupt
			.throttle(25)
		//Notify parent that a drag has started
			.do(() => this.onDragBegin())
		//Switch subscription to the 'mousemove' event
			.flatMapLatest(() => this.rx
				.fromEvent(this.$document, 'mousemove')
			//Unsubscribe if there is a 'mouseup' event or if there is a position notification from the container
				.takeUntil(this.rx.using(
					() => ({ dispose: () => this.onDragComplete() }),
					() => this.rx.merge(this.rx.fromEvent(this.$document, 'mouseup'), this.notifier.asObservable().filter(val => !!val))
				))
			)
		//Throttle by 15ms
			.sample(15)
		//Get the current x and y position
			.map(({ pageX, pageY }) => ({ x: pageX, y: pageY }))
		//Notify the parent
			.subscribe(coords => {
				let pctSize = this.onDragMove({ coords, index: this.index });
				let [min, max] = this.sizeBounds;
				this.max = pctSize > max || pctSize < min;
			});
	}

	$onDestroy() {
		this.domInputs && this.domInputs.dispose();
	}
}

const SplitterBarComponent: angular.IComponentOptions = {
	controller: SplitterBarController,
	bindings: {
		notifier: '<',
		isVertical: '<',
		index: '<',
		onDragBegin: '&',
		onDragMove: '&',
		onDragComplete: '&'
	},
	template:
	`<div class="splitter" ng-class="$ctrl.isVertical ? 'vertical' : 'horizontal'">
			<span class="resize-arrow resize-up-left" ng-class="{ max: vm.max || vm.isLeft }">
				<i class="grip"></i>
			</span>
		</div>`
};

angular.module('munisSalesLink').component('splitterBarComponent', SplitterBarComponent);







/*@MODULE*/
class SplitterContainerController implements angular.IComponentController {
	static $inject = ['$scope', '$element', '$window', 'spgRx'];
	private readonly DEFAULT_VERTICAL = 0.5;

	/* BINDINGS */
	currentPosition: Splitter.Position;
	onPositionUpdate: (params: { position: Splitter.Position }) => void;

	$container: angular.IRootElementService;
	$anchor: angular.IRootElementService;
	notifier: SpgRx.ISubject<Splitter.Position>;
	domInputs: SpgRx.ISubscription<any>;
	panels: { top: Splitter.ISplitterPanelController, bottom: Splitter.ISplitterPanelController };
	containerHeight: number;
	heightOffset: number;
	currHeight: number;

	constructor(
		private $scope: angular.IScope,
		private $element: angular.IRootElementService,
		private $window: angular.IWindowService,
		private rx: SpgRxService
	) { }

	$onInit() {
		this.onPositionUpdate = this.onPositionUpdate || _.noop;
		this.panels = { top: null, bottom: null };
		this.notifier = new this.rx.Subject<Splitter.Position>();
	}

	$onChanges({currentPosition}: Splitter.OnChangesObject) {
		if (currentPosition && this.panels) {
			this.onPositionChange();
		}
	}

	$postLink() {
		this.$anchor = this.$element.find('.splitter-container-top');
		this.$container = this.$element.children('.splitter-container-component.vertical');
		this.refreshHeightAndPosition();
		this.setContainerHeight();
		this.onPositionChange();
		this.$emitEvents(300);
		this.domInputs = this.rx.fromEvent(this.$window, 'resize').debounce(50).subscribe(() => this.onResize());
	}

	$onDestroy() {
		this.notifier.dispose();
		this.domInputs && this.domInputs.dispose();
	}

	onDragBegin() {
		this.refreshHeightAndPosition();
		this.setOverlay(true);
	}

	onDragComplete() {
		this.setOverlay();
		this.updatePosition();
	}

	updateHeight({ y }: Splitter.Coord): number {
		return this.setHeight((y - this.heightOffset) / this.containerHeight);
	}

	toggleHeight(fullHeight: boolean, {top}: Splitter.PanelPosition) {
		if (fullHeight) {
			this.setHeight(top ? 1 : 0);
		} else {
			this.setHeight(0.5);
		}

		this.updatePosition();
	}

	registerPanel(panel: Splitter.ISplitterPanelController) {
		panel.isTop ? this.panels.top = panel : this.panels.bottom = panel;
	}

	private refreshHeightAndPosition() {
		this.containerHeight = this.$container.outerHeight();
		this.heightOffset = this.$container.offset().top;
	}

	private setHeight(height: number): number {
		if (height < -0.0001 || height > 1.0001) return;
		if (height < 0.05) height = 0;
		if (height > 0.95) height = 1;

		this.currHeight = height;
		this.$anchor.outerHeight((height *= 100) + '%');
		return height;
	}

	private onPositionChange() {
		let { vertical, top, bottom }: Splitter.Position = (this.currentPosition || { vertical: this.DEFAULT_VERTICAL });
		this.setHeight(vertical);
		this.panels.top && this.panels.top.onPositionChange(top);
		this.panels.bottom && this.panels.bottom.onPositionChange(bottom);
		this.updatePosition(true);
	}

	private updatePosition(isExternal: boolean = false) {
		this.$scope.$evalAsync(() => {
			let position = this.getCurrentPosition();
			this.notifier.onNext(position);
			!isExternal && this.onPositionUpdate({ position });
			this.$emitEvents();
		});
	}

	private getCurrentPosition(): Splitter.Position {
		let position: Splitter.Position = { vertical: this.currHeight };

		if (this.panels.top) {
			position.top = this.panels.top.widths;
		}
		if (this.panels.bottom) {
			position.bottom = this.panels.bottom.widths;
		}

		return position;
	}

	private onResize() {
		let { vertical, top, bottom } = this.getCurrentPosition();
		this.refreshHeightAndPosition();
		this.setContainerHeight();
		this.setHeight(vertical);
		this.panels.top && this.panels.top.onPositionChange(top);
		this.panels.bottom && this.panels.bottom.onPositionChange(bottom);
		this.$emitEvents();
	}

	private setContainerHeight() {
		let height = angular.element('.app-component').length ?
			angular.element('.app-component').height() : angular.element('body').height();

		this.$container.css('height', height - this.heightOffset);
	}

	private setOverlay(show: boolean = false) {
		this.$container[0].style['user-select'] = show ? 'none' : '';
	}

	private $emitEvents(delay: number = 0) {
		setTimeout(() => {
			this.$scope.$emit('splitter.sizeChanged', { isVerticalChange: true });
			this.$scope.$emit('splitter.sizeChanged', { isVerticalChange: false });
		}, delay);
	}
}

const SplitterContainerComponent: angular.IComponentOptions = {
	controller: SplitterContainerController,
	bindings: {
		currentPosition: '<',
		onPositionUpdate: '&'
	},
	transclude: {
		top: 'splitterTop',
		bottom: 'splitterBottom'
	},
	template:
	`<div class="splitter-container-component vertical">
		<div id="on-drag-overlay"></div>
		<div class="splitter-container-top splitter-container vertical">
			<splitter-controls-component ng-if="!$ctrl.panels.top" notifier="$ctrl.notifier" on-toggle="$ctrl.toggleHeight(fullHeight, position)" is-top="true" vertical-only="true"></splitter-controls-component>
			<ng-transclude ng-transclude-slot="top"></ng-transclude>
		</div>

		<splitter-bar-component is-vertical="true" notifier="$ctrl.notifier" on-drag-begin="$ctrl.onDragBegin()" on-drag-move="$ctrl.updateHeight(coords)" on-drag-complete="$ctrl.onDragComplete()"></splitter-bar-component>

		<div class="splitter-container-bottom splitter-container vertical">
			<splitter-controls-component ng-if="!$ctrl.panels.bottom" notifier="$ctrl.notifier" on-toggle="$ctrl.toggleHeight(fullHeight, position)" is-top="false" vertical-only="true"></splitter-controls-component>
			<ng-transclude ng-transclude-slot="bottom"></ng-transclude>
		</div>
	</div>
	`
};

angular.module('munisSalesLink').component('splitterContainerComponent', SplitterContainerComponent);




/*@MODULE*/
class SplitterControlsController implements angular.IComponentController {
	/* BINDINGS */
	notifier: SpgRx.ISubject<Splitter.Position>;
	verticalOnly: boolean;
	isTop: boolean;
	index: number;
	onToggle: (params: { fullHeight?: boolean, fullWidth?: boolean, position: Splitter.PanelPosition }) => void;

	maxWidth: boolean;
	maxHeight: boolean;

	constructor() { }

	get position(): Splitter.PanelPosition {
		return { top: this.isTop, colIndex: this.index }
	}

	$onInit() {
		//When there is a change in splitter position, recompute the maxHeight and maxWidth flags
		this.notifier.filter(val => !!val).subscribe(({ vertical, top, bottom}) => {
			let horizontal = this.isTop ? top && top[0] : bottom && bottom[0];
			this.maxHeight = vertical > 0.95 || vertical < 0.05;
			this.maxWidth = this.verticalOnly ? true : (horizontal > 0.9 || horizontal < 0.05);
		});
	}

	toggleFullScreen(expand: boolean) {
		this.onToggle({ fullWidth: expand, fullHeight: expand, position: this.position })
	}

	toggleHeight(expand: boolean) {
		this.onToggle({ fullHeight: expand, position: this.position })
	}

	toggleWidth(expand: boolean) {
		this.onToggle({ fullWidth: expand, position: this.position });
	}
}

const SplitterControlsComponent: angular.IComponentOptions = {
	controller: SplitterControlsController,
	bindings: {
		notifier: '<',
		verticalOnly: '<',
		isTop: '<',
		index: '<',
		onToggle: '&'
	},
	template:
	`
		<div class="splitter-buttons-component">
			<ul>
		        <!--Toggle Screen-->
		        <li>
		        	<!-- Restore -->
		            <button title="Restore"
		                    class="btn btn-default"
		                    ng-show="$ctrl.maxWidth && $ctrl.maxHeight"
		                    ng-click="$ctrl.toggleFullScreen(false)">
		                <div class="restore-full-screen"></div>
		            </button>

		            <!-- Expand -->
		            <button title="Full Screen"
		                    class="btn btn-default"
		                    ng-show="!$ctrl.maxWidth || !$ctrl.maxHeight"
		                    ng-click="$ctrl.toggleFullScreen(true)">
		                <div class="expand-full-screen"></div>
		            </button>
		        </li>

		        <!--Toggle Height-->
		        <li ng-if="!$ctrl.verticalOnly" ng-show="!$ctrl.maxWidth">
		        	<!-- Restore -->
		            <button title="Restore Height"
		                    class="btn btn-default"
		                    ng-show="$ctrl.maxHeight"
		                    ng-click="$ctrl.toggleHeight(false)">
		                <div class="restore-height"></div>
		            </button>

		            <!-- Expand -->
		            <button title="Full Height"
		                    class="btn btn-default full-height"
		                    ng-show="!$ctrl.maxHeight"
		                    ng-click="$ctrl.toggleHeight(true)">
		                <div class="expand-height"></div>
		            </button>
		        </li>

		        <!--Toggle Width-->
		        <li ng-if="!$ctrl.verticalOnly"  ng-show="!ctrl.maxHeight">
		        	<!-- Restore -->
		            <button title="Restore Width"
		                    class="btn btn-default restore-width"
		                    ng-show="$ctrl.maxWidth"
		                    ng-click="$ctrl.toggleWidth(false)">
		                <div class="restore-width"></div>
		            </button>

		            <!-- Expand -->
		            <button title="Full Width"
		                    class="btn btn-default full-width"
		                    ng-show="!$ctrl.maxWidth"
		                    ng-click="$ctrl.toggleWidth(true)">
		                <div class="expand-width"></div>
		            </button>
		        </li>
		    </ul>
		</div>
	`
};

angular.module('munisSalesLink').component('splitterControlsComponent', SplitterControlsComponent);




/*@MODULE*/
class SplitterPanelDoubleController implements Splitter.ISplitterPanelController {
	static $inject = ['$scope', '$element'];
	private readonly DEFAULT_WIDTHS = [0.5];

	/* BINDINGS */
	containerCtrl: SplitterContainerController;

	$container: angular.IRootElementService;
	$anchor: angular.IRootElementService;
	isTop: boolean;
	containerWidth: number;
	widthOffset: number;
	currWidth: number;

	constructor(
		private $scope: angular.IScope,
		private $element: angular.IRootElementService
	) { }

	//HOOK FOR CONTAINER
	get widths(): number[] {
		return [this.currWidth];
	}

	get notifier(): SpgRx.ISubject<Splitter.Position> {
		return this.containerCtrl.notifier;
	}

	$onInit() {
		this.isTop = !!this.$element.closest('.splitter-container-top').length;
		this.containerCtrl.registerPanel(this);
	}

	$postLink() {
		this.$anchor = this.$element.find('.splitter-container-left');
		this.$container = this.$element.children('.splitter-container-component.horizontal');
		this.refreshWidthAndPosition();
	}

	onDragBegin() {
		this.refreshWidthAndPosition();
		this.containerCtrl.onDragBegin();
	}

	onDragComplete() {
		this.containerCtrl.onDragComplete();
	}

	updateWidth({ x }: Splitter.Coord): number {
		return this.setWidth((x - this.widthOffset) / this.containerWidth);
	}

	toggleScreen(fullWidth: boolean, fullHeight: boolean, panelPosition: Splitter.PanelPosition) {
		this.toggleWidth(fullWidth, panelPosition);
		this.containerCtrl.toggleHeight(fullHeight, panelPosition);
	}

	onPositionChange([width]: number[] = this.DEFAULT_WIDTHS) {
		this.setWidth(width);
	}

	private refreshWidthAndPosition() {
		this.containerWidth = this.$container.outerWidth();
		this.widthOffset = this.$container.offset().left;
	}

	private setWidth(width: number = 1): number {
		if (width < -0.0001 || width > 1.0001) return;
		//SNAP TO EDGE
		if (width < 0.05) width = 0;
		if (width > 0.90) width = 1;

		this.currWidth = width;
		this.$anchor.outerWidth((width *= 100) + '%');
		return width;
	}

	private toggleWidth(fullWidth: boolean, { colIndex }: Splitter.PanelPosition) {
		if (fullWidth) {
			this.setWidth(colIndex ? 0 : 1);
		} else {
			this.setWidth(0.5);
		}
	}
}

const SplitterPanelDoubleComponent: angular.IComponentOptions = {
	controller: SplitterPanelDoubleController,
	require: {
		containerCtrl: '^^splitterContainerComponent'
	},
	transclude: {
		left: 'splitterLeft',
		right: 'splitterRight'
	},
	template:
	`
		<div class="splitter-container-component horizontal">
			<div class="splitter-container-left splitter-container grid-offset-container">
				<splitter-controls-component notifier="$ctrl.notifier" on-toggle="$ctrl.toggleScreen(fullWidth, fullHeight, position)" is-top="$ctrl.isTop" index="0"></splitter-controls-component>
				<ng-transclude ng-transclude-slot="left"></ng-transclude>
			</div>

			<splitter-bar-component is-vertical="false" notifier="$ctrl.notifier" on-drag-begin="$ctrl.onDragBegin()" on-drag-move="$ctrl.updateWidth(coords)" on-drag-complete="$ctrl.onDragComplete()"></splitter-bar-component>

			<div class="splitter-container-right splitter-container grid-offset-container">
				<splitter-controls-component notifier="$ctrl.notifier" on-toggle="$ctrl.toggleScreen(fullWidth, fullHeight, position)" is-top="$ctrl.isTop" index="1"></splitter-controls-component>
				<ng-transclude ng-transclude-slot="right"></ng-transclude>
			</div>
      	</div>
	`
};

angular.module('munisSalesLink').component('splitterPanelDoubleComponent', SplitterPanelDoubleComponent);




declare namespace Splitter {
	interface OnChangesObject extends angular.IOnChangesObject {
		currentPosition: angular.IChangesObject<Position>;
	}

	interface ISplitterPanelController extends angular.IComponentController {
		isTop: boolean;
		widths: number[];
		onPositionChange(widths: number[]): void;
		onDragBegin(): void;
		updateWidth(coords: Coord, index?: number): void;
		onDragComplete(): void;
		toggleScreen(fullWidth: boolean, fullHeight: boolean, panelPosition: PanelPosition): void;
	}

	interface Position {
		vertical: number;
		top?: number[];
		bottom?: number[];
	}

	interface PanelPosition {
		top: boolean;
		colIndex: number;
	}

	interface Coord {
		x?: number, y?: number;
	}
}


$splitter - sprite: '../assets/images/splitter-sprite.png';
$splitter - size: 10px;
$expandWidthIcon: '../assets/images/splitter-buttons/icon_expand_width.png';
$restoreWidthIcon: '../assets/images/splitter-buttons/icon_restore_width.png';
$expandHeightIcon: '../assets/images/splitter-buttons/icon_expand_height.png';
$restoreHeightIcon: '../assets/images/splitter-buttons/icon_restore_height.png';
$expandFullIcon: '../assets/images/splitter-buttons/icon_expand_full.png';
$restoreFullIcon: '../assets/images/splitter-buttons/icon_restore_previous.png';

%arrow - up {
    width: 0;
    height: 0;
    border: none;
    border - left: 4px solid transparent;
    border - right: 4px solid transparent;
    border - bottom: 4px solid white;
}

%arrow - down {
    width: 0;
    height: 0;
    border: none;
    border - left: 4px solid transparent;
    border - right: 4px solid transparent;
    border - top: 4px solid white;
}

%arrow - left {
    width: 0;
    height: 0;
    border: none;
    border - top: 4px solid transparent;
    border - right: 4px solid white;
    border - bottom: 4px solid transparent;
}

%arrow - right {
    width: 0;
    height: 0;
    border: none;
    border - top: 4px solid transparent;
    border - left: 4px solid white;
    border - bottom: 4px solid transparent;
}

.splitter - area{
    position: relative;
}

.splitter - container - component {
    display: flex;
    flex: 1;
    width: 100 %;
    overflow: hidden;

    &.vertical {
        flex - direction: column;
        height: 100 %;
    }

    & > *:last - child, .last - child {
        flex: 1;
        overflow: hidden;
        z - index: 3;
        position: relative;
    }
    .splitter - body {
        background: linear - gradient(#17191e, #181b1f);
        margin: 0;
        padding: 0;

        .well {
            margin: 0;

            &.left - well {
                padding - right: 0;
            }
            &.right - well {
                padding - left: 0;
            }
        }
    }
	.on - drag - overlay{
		position: fixed;
		top: 0px;
		left: 0px;
		height: 100 %;
		width: 100 %;
		z - index: 9;
		background: transparent;
	}
	[ng - transclude - slot] {
		height: 100 %;
		width: 100 %;
	}
}

.splitter - container {
    display: flex;
    overflow: hidden;
    width: 100 %;
    position: relative;

    &.vertical {
        flex - direction: column;
        height: 100 %;
    }

    .splitter - item:last - child {
        flex: 1;
    }
}

.splitter {
    display: flex;
    align - items: stretch;
    justify - content: space - around;
    position: relative;
    z - index: $splitterZIndex;
    background: linear - gradient(#515359, #464a52);

    .resize - arrow {
        flex: 1;
        display: inline - block;
        transition: opacity 0.25s;
        opacity: 1;
        position: relative;
        overflow: hidden;
        // cursor: pointer;
        border - left: 1px solid $ms- grey - 01;
        border - right: 1px solid #545454;
        width: $splitter - size;

        &.max {
            background: linear - gradient(90deg, #0771bf, #15456c);
        }

        .grip {
            position: absolute;
            content: '';
            background: transparent url(#{ $splitter-sprite }) no- repeat left top;
        }

        .arrow {
            position: absolute;
            pointer - events: none;
        }

        &.hide {
            visibility: hidden;
        }

        &.ng - hide {
            opacity: 0;
        }

    }

    &.horizontal {
        flex - direction: column;
        background: linear - gradient(90deg, #515359, #464a52);
        width: 10px;
        height: 1200px;
        cursor: ew - resize;

        .resize - arrow {

            &:hover {
                background: linear - gradient(90deg, #0771bf, #15456c);
            }

            .grip {
                background - position: 3px - 63px;
                height: 100px;
                width: $splitter - size;
                left: 0;
                top: 50 %;
                margin: -50px 0 0 0;
                cursor: ew - resize;
            }

            .arrow {
                top: 50 %;
                left: 3px;
                margin: -3px 0 0 0;
                @extend %arrow - left;
            }
        }


        .resize - down - right {
            .arrow {
                @extend %arrow - right;
            }
        }
    }

    &.vertical {
        flex - direction: row;
        height: $splitter - size;
        width: auto;
        cursor: ns - resize;

        .resize - arrow {

            &:hover {
                background: linear - gradient(#0771bf, #15456c);
            }

            .grip {
                background - position: 4px - 47px;
                width: 100px;
                height: $splitter - size;
                left: 50 %;
                top: 0;
                margin: 0 0 0 - 50px;
                cursor: ns - resize;
            }

            .arrow {
                top: 3px;
                left: 50 %;
                margin: 0 0 0 - 4px;
                @extend %arrow - up;
            }

        }

        .resize - down - right {
            .arrow {
                @extend %arrow - down;
            }
        }
    }

}

// Bootstrap Overrides for the splitter to stay on top
.input - group.form - control, label.select - label {
    z - index: 1;
}

.splitter - buttons - component {
	position: absolute;
	top: 2px;
	right: 0px;
	margin - right:6px;
	z - index: 4;
	background - color: #252525;

	ul {
		margin: 0;
		padding: 0;
		list - style: none;
		display: flex;
		flex - flow: row - reverse nowrap;
		line - height: 25px;

		li {
			float: right;
			text - align: center;
			font - size: 11px;
			margin - left:3px;
			background - color: $ms - grey - 10;

			&:last - child {
				margin - left:0px;
			}

			button {
				width: 32px;
				height: 24px;
				padding: 0;
				position: relative;

				div {
					width: 32px;
					height: 20px;
					position: absolute;
					top: 2px;
					left: 0;
					background - repeat : no - repeat;
					background - position: 6px 1px;
					&:hover {background - position: 6px - 18px; }

					&.expand - width {
						background - image: url(#{ $expandWidthIcon });
					}
					&.restore - width {
						background - image: url(#{ $restoreWidthIcon });
					}
					&.expand - height {
						background - image: url(#{ $expandHeightIcon });
						&:hover {background - position: 6px - 17px; }
					}
					&.restore - height {
						background - image: url(#{ $restoreHeightIcon });
						&:hover {background - position: 6px - 17px; }
					}
					&.expand - full - screen {
						background - image: url(#{ $expandFullIcon });
					}
					&.restore - full - screen {
						background - image: url(#{ $restoreFullIcon });
						&:hover {background - position: 6px - 17px; }
					}
				}
			}

			&:last - child {
				margin - right: 0px;
			}
		}
	}
}

