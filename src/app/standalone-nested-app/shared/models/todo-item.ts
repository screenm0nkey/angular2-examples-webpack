import { Guid } from '@standaloneApp/shared/models/guid';

export class TodoItem {
  constructor(title: string, description: string, dueDate: string = null) {
    this.id = Guid.newGuid();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  public id: string;
  public title: string;
  public description: string;
  public dueDate?: string;
  public completed?: boolean;
}
