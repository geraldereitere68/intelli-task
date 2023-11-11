// Filename: complex_program.js

/*
  This code is a complex program that simulates a virtual zoo management system.
  It includes various functionalities like adding, removing, and updating animals,
  tracking feeding schedules, managing staff, and calculating zoo revenue.

  The program is divided into several classes such as Zoo, Animal, Staff, etc.
  Each class has its own methods and properties that handle specific operations.

  Please note that this is a simplified version of a virtual zoo management system.
  A complete implementation may require additional code, data structures, and error handling.

  Author: Your Name
  Date: MM/DD/YYYY
*/

//-- Class Definitions: --

class Zoo {
  constructor(name, location, openingHours) {
    this.name = name;
    this.location = location;
    this.openingHours = openingHours;
    this.animals = [];
    this.staff = [];
    this.dailyRevenue = 0;
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  removeAnimal(animal) {
    const index = this.animals.indexOf(animal);
    if (index >= 0) {
      this.animals.splice(index, 1);
    }
  }

  updateAnimal(animal, newDetails) {
    animal.updateDetails(newDetails);
  }

  addStaff(member) {
    this.staff.push(member);
  }

  removeStaff(member) {
    const index = this.staff.indexOf(member);
    if (index >= 0) {
      this.staff.splice(index, 1);
    }
  }

  calculateRevenue() {
    this.animals.forEach((animal) => {
      this.dailyRevenue += animal.calculateTicketPrice();
    });
  }

  getOpeningHours() {
    return this.openingHours;
  }
}

class Animal {
  constructor(species, name, age, habitat, diet) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.habitat = habitat;
    this.diet = diet;
  }

  updateDetails(details) {
    this.species = details.species || this.species;
    this.name = details.name || this.name;
    this.age = details.age || this.age;
    this.habitat = details.habitat || this.habitat;
    this.diet = details.diet || this.diet;
  }

  calculateTicketPrice() {
    let basePrice = 10; // Base ticket price for all animals
    let additionalPrice = 0;

    if (this.species === "Lion" || this.species === "Tiger") {
      additionalPrice = 5; // Extra price for Lions and Tigers
    } else if (this.species === "Elephant") {
      additionalPrice = 8; // Extra price for Elephants
    }

    return basePrice + additionalPrice;
  }
}

class Staff {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  updatePosition(newPosition) {
    this.position = newPosition;
  }

  updateSalary(newSalary) {
    this.salary = newSalary;
  }
}

//-- Program Execution: --

// Create a new Zoo
const myZoo = new Zoo("My Zoo", "City Park", "9 AM - 5 PM");

// Add animals to the zoo
myZoo.addAnimal(new Animal("Lion", "Leo", 5, "Savannah", "Meat"));
myZoo.addAnimal(new Animal("Tiger", "Tony", 7, "Jungle", "Meat"));
myZoo.addAnimal(new Animal("Elephant", "Ellie", 12, "Grassland", "Vegetables"));

// Update animal details
myZoo.updateAnimal(myZoo.animals[2], { name: "Ella", age: 13 });

// Remove an animal
myZoo.removeAnimal(myZoo.animals[1]);

// Add staff members
myZoo.addStaff(new Staff("John Doe", "Keeper", 3000));
myZoo.addStaff(new Staff("Jane Smith", "Veterinarian", 5000));

// Calculate the daily revenue
myZoo.calculateRevenue();

// Print zoo information
console.log("Zoo Name:", myZoo.name);
console.log("Location:", myZoo.location);
console.log("Opening Hours:", myZoo.getOpeningHours());
console.log("Animals:", myZoo.animals);
console.log("Staff:", myZoo.staff);
console.log("Daily Revenue:", myZoo.dailyRevenue);