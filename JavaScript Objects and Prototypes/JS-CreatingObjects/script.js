'use strict';

// var cat = {
// 	name: 'Tom',
// 	color: 'gray',
// 	age: '2',
// 	speak: function(){ display("Miiaauu")}
// }

// display(cat.name);
// display(cat.age);
// cat.speak();

// CONSTRUCTOR FUNCTION

// function Cat(name, color){
// 	this.name: name;
// 	this.color: color;
// }

// var cat = new Cat("Uriel", "Red");

// display(cat);

class Cat {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  
  speak() {
    display('Miaauu')
  }
}

var cat = new Cat('Uriel', 'White')

display(cat)
cat.speak()