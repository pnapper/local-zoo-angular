import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

    <h2 *ngFor="let currentAnimal of childAnimalList" (click)="showDetails(currentAnimal)"><strong>{{currentAnimal.species}}:</strong> <strong>{{currentAnimal.name}}</strong>
    </h2>

    <div *ngIf="currentAnimal">
    <hr>
      <ul>
        <li (click)="hideDetails(currentAnimal)">
        <h3><strong>Species: {{currentAnimal.species}}</strong></h3>
        <h3><strong>Name: {{currentAnimal.name}}</strong></h3><br>  <div>Age: {{currentAnimal.age}}</div><br>
        <div>Diet: {{currentAnimal.diet}}</div><br>
        <div>Location: {{currentAnimal.location}}</div><br>  <div>Caretakers: {{currentAnimal.caretakers}}</div><br>
        <div>Sex: {{currentAnimal.sex}}</div><br>
        <div>Likes: {{currentAnimal.likes}}</div><br>  <div>Dislikes: {{currentAnimal.dislikes}}</div><br>
        </li><br><br>
      </ul>
    </div>
  `
})

export class AnimalListComponent {

  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  currentAnimal = null;

  showDetails(clickedAnimal) {
  this.currentAnimal = clickedAnimal;
  }

  hideDetails(clickedAnimal) {
  this.currentAnimal = null;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
  this.clickSender.emit(animalToEdit);
  }
}
