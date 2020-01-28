'use strict';

// Adding a property to the prototype
/*function Cat(name, color) {
  this.name = name
  this.color = color
}

var fluffy = new Cat('Fluffy', 'White')

display(Cat.prototype)
display(fluffy.__proto__)*/

// Prototype properties and instance

/*function Cat(name, color) {
  this.name = name
  this.color = color
}
Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')
var muffin = new Cat('Muffin', 'Brown')

fluffy.age = 5

display(fluffy.age)
display(fluffy.__proto__.age)

display(fluffy,hasOwnProperty('age'))*/

function Animal(voice) {
  this.voice = voice || 'grunt'
}
Animal.prototype.speak = function() {
  display(this.voice)
}

function Cat(name, color) {
  Animal.call(this, 'Meow')
  this.name = name
  this.color = color
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
var fluffy = new Cat('Fluffy', 'White')

display(fluffy.__proto__.__proto__)



class Animal {
  constructor(voice) {
    this.voice = voice || 'grunt'
  }
  
  speak() {
    display(this.voice)
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super('Meow')
    this.name = name
    this.color = color
  }
}

var fluffy = new Cat('Fluffy', 'White')
display(Object.keys(fluffy.__proto__.__proto__))
display(fluffy.__proto__.__proto__.hasOwnProperty('speak'))

