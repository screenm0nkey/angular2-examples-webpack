import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "person-input",
  template: `
      <input #personName type="text" />
      <button (click)="add(personName)">Add Person</button>
    `
})
export class PersonInputComponent {
  @Output() addPerson = new EventEmitter();

  add(personInput: HTMLInputElement) {
    if (personInput.value) {
      this.addPerson.emit(personInput.value);
      personInput.value = "";
    }
  }
}
