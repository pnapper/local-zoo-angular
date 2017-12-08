import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="matureAnimals">Mature Animals</option>
    </select>
    <h2 *ngFor="let currentAnimal of childAnimalList | age:filterByAge" (click)="showDetails(currentAnimal)"><strong>{{currentAnimal.species}}:</strong> <strong>{{currentAnimal.name}}</strong>
    </h2>

    <div *ngIf="currentAnimal">
    <hr>
      <ul>
        <li (click)="hideDetails(currentAnimal)">
        <h2><strong>{{currentAnimal.species}}</strong></h2>
        <h3><strong>Name: {{currentAnimal.name}}</strong></h3><br>  <div>Age: {{currentAnimal.age}}</div><br>
        <div>Diet: {{currentAnimal.diet}}</div><br>
        <div>Location: {{currentAnimal.location}}</div><br>  <div>Caretakers: {{currentAnimal.caretakers}}</div><br>
        <div>Sex: {{currentAnimal.sex}}</div><br>
        <div>Likes: {{currentAnimal.likes}}</div><br>  <div>Dislikes: {{currentAnimal.dislikes}}</div><br>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
        </li><br><br>
      </ul>
    </div>
  `
})

export class AnimalListComponent {

  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "";
  currentAnimal = null;

  showDetails(clickedAnimal) {
  this.currentAnimal = clickedAnimal;
  }

  hideDetails(clickedAnimal) {
  this.currentAnimal = null;
  }

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
  this.clickSender.emit(animalToEdit);
  }

  toggleDone(clickedAnimal: Animal, setAge: number) {
  clickedAnimal.age = setAge;
  }
}
