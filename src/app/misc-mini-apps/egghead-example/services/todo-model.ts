export const STARTED = 'Started';
export const COMPLETED = 'Completed';

export class TodoModel {
  constructor(public title: string = '', public status: string = STARTED) {
  }

  toggle(): void {
    this.status = this.status === STARTED ? COMPLETED : STARTED;
  }
}
