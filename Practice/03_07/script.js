/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const coffee = {
  name: "Cup of Coffee",
  percentOfCurrentLiquid: 50,
  colorOfCup: "white",
  typeOfCoffee: "black",
  creamer: false,
  sugar: false
}
console.log("Current cup of coffee: ", coffee);

const desk = {
  name: "Computer Desk",
  colorOfDesk: "white",
  typeOfCoffee: "black",
  isDeskMessy: true,
  doYouLikeYourDesk: true,
  isDeskBad: false,
  cleanDesk: false,
  toggleCleanDesk: function (cleanStatus) {
    this.cleanDesk = cleanStatus;
  }
};
console.log("Computer Desk: ", desk);