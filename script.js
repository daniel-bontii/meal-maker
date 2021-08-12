const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers(){
      return this._course.appetizers;
    },
    get mains() {
      return this._course.mains;
    },
    get desserts() {
      return this._course.desserts;
    }, 
  
    set appetizers(addedAppetizer){
      this._course.appetizer = addedAppetizer;
    },
    set mains(addedMain){
      this._course.main = addedMain;
    },
    set desserts(addedDessert){
      this._course.desserts = addedDessert;
    },
    get courses(){
      return {
        appetizers: this._coures.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randex = Math.floor(Math.random() * dishes.length);
      return dishes[randex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the total price is ${totalPrice}`;
    },
  };
  
  menu.addDishToCourse('appetizers', 'Cured Meat Platter', 5.25);
  menu.addDishToCourse('appetizers', 'Prawn & Avocado Cocktail', 5.00);
  menu.addDishToCourse('appetizers', 'Goats Cheese & Onion Filo Tart', 3.50);
  
  menu.addDishToCourse('mains', 'Pumpkin and Red Onion Tagine', 4.00);
  menu.addDishToCourse('mains', 'Mushroom Rocket Brie & Cranberry Filo Tart', 3.00);
  menu.addDishToCourse('mains', 'Vegetable Nut Roast with Apricot & Goats Cheese', 5.10);
  
  menu.addDishToCourse('desserts', 'Crème Brulee', 2.00);
  menu.addDishToCourse('desserts', 'Tarte aux Citroen', 4.50);
  menu.addDishToCourse('desserts', 'Fresh Fruit Pavlova', 3.20);
  
  const meal = menu.generateRandomMeal();
  
  console.log(meal);
  