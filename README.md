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


## Getting Started

1. Clone the project from https://github.com/pnapper/local-zoo onto your local machine.

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
