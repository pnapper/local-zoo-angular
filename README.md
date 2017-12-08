# Local Zoo

This App tracks animals at the local Zoo.

## Specifications

* 1. User can add newly-admitted animals by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike

 Sample Input: "Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"
 Sample Output:
  Species: "Arctic Fox"
  Name: "Moon"
  Age: 2
  Diet: "Carnivore"
  Location: "Northern Trail"
  Caretakers: 5
  Sex: "Female"
  Likes: "Cool shade"
  Dislikes: "Loud noises"

* 2. User can view a list of animals they have logged.

 Sample Input: Load the page (default view)s
 Sample Output:
  Species: "Arctic Fox"
  Name: "Moon"
  Species: "Ocelot"
  Name: "Prince"
  Species: "Northwest Black Tailed Deer"
  Name: "Tinkerbell"

* 3. User can view view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).

 Sample Input: Select view mature animals
 Sample Output:
   Species: "Arctic Fox"
   Name: "Moon"
   Age: 2
   Diet: "Carnivore"
   Location: "Northern Trail"
   Caretakers: 5
   Sex: "Female"
   Likes: "Cool shade"
   Dislikes: "Loud noises"

* 4. User can click an animal to edit its name, age or caretakers.

 Sample Input: click on Arctic Fox.
 Sample Output: Edit form appears.

 ## Ambitions

 * 1. Extend the functionality of the app by building out the animal model to further enhance the app.

  Examples: Add Feeding Times, Health Status, Mating Status.

 * 2. Display of the total number of caretakers needed in a day.

 * 3. Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.

 * 4. Expand the application to differentiate between animals' species. Group the animals into those categories. Then include a component to display the total needed caretakers for whichever species the user selects.

 * 5. Add a new master component to average the total age for each species.

 * 6. Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores)

## Getting Started

1. Clone the project from https://github.com/pnapper/local-zoo-angular onto your local machine.

2. Navigate to the project folder in the console and run "npm install" and "bower install".

3. From the console run the application using "gulp build" and "gulp serve".

4. Enjoy!

### Prerequisites

Web browser required.

### Installing

From the console run:
npm install
bower install

## Technologies Used

Angular
TypeScript
JavaScript
HTML
CSS
Bootstrap

## Versioning

version 1.0

## Authors

* **Patrick Napper**  [Github](https://github.com/pnapper)

## License

MIT Licence
