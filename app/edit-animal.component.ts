import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h3>{{childSelectedAnimal.name}}</h3>
        <p>Animal Species: {{childSelectedAnimal.species}}</p>
        <hr>
        <h3>Edit Animal</h3>
        <label>Enter Animal Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name"><br>
        <label>Enter Animal Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age"><br>
        <label>Enter Animal Caretakers:</label>
        <select [(ngModel)]="childSelectedAnimal.caretakers"><br>
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
          <option value="6"> 6 </option>
          <option value="7"> 7 </option>
          <option value="8"> 8 </option>
          <option value="9"> 9 </option>
          <option value="10"> 10 </option>
        </select><br>
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
   this.doneButtonClickedSender.emit();
 }
}
