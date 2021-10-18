const menu = {
  _courses: {
    appetisers: [],
    mains: [],
    desserts: [] 
  },
  get appetisers() {
    return this._courses.appetisers;
  },
  set appetisers(appetiserIn) {
    this._courses.appetisers = appetisers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetisers: this.appetisers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName, 
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]
  },

  generateRandomMeal() {
    const appetiser = this.getRandomDishFromCourse('appetisers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetiser.price + mains.price + desserts.price;

    return `Total price for ${appetiser.name}, ${mains.name}, and ${desserts.name} is ${totalPrice}.`
  }
};

menu.addDishToCourse('appetisers', 'Chicken Manchow Soup', 3.25)
menu.addDishToCourse('appetisers', 'Hummus and Pita', 3.50)
menu.addDishToCourse('appetisers', 'Chicken Seekh Kabab', 4.50)
menu.addDishToCourse('mains', 'Chicken Thai Curry with Rice', 5.75)
menu.addDishToCourse('mains', 'Prawn Cambodian Curry with Rice', 6.50)
menu.addDishToCourse('mains', 'Prawn Thai Curry with Rice', 6.75)
menu.addDishToCourse('desserts', 'Macha Icecream', 3.50)
menu.addDishToCourse('desserts', 'Mint Chocolate Ganache Cake', 4.25)
menu.addDishToCourse('desserts', 'Kulfi', 3.25)

let meal = menu.generateRandomMeal();
console.log(meal);


