import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h2>Add New Animal</h2>
  <div>
    <div>
     <label>Enter Animal Species:</label>
     <input #newSpecies>
    </div>
    <div>
      <label>Enter Animal Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Animal Age:</label>
      <input #newAge>
    </div>
    <label>Enter Animal Diet:</label>
    <input #newDiet>
     <div>
       <label>Enter Animal Location:</label>
       <input #newLocation>
     </div>
     <div>
       <label>Enter Animal Caretakers:</label>
       <select #newCaretakers>
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
       </select>
     </div>
     <div>
     <label>Choose Animal Sex:</label>
       <select #newSex>
         <option value="Male"> Male </option>
         <option value="Female"> Female </option>
       </select>
     </div>
     <div>
       <label>Enter Animal Likes:</label>
       <input #newLikes>
     </div>
     <div>
       <label>Enter Animal Dislikes:</label>
       <input #newDislikes>
     </div>
      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    console.log(newAnimalToAdd);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
