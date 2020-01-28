'use strict';

// var cat = {
//   name: 'Lol',
//   color: 'Red'
// };

// cat['eye color'] = 'blue';
// display(cat['eye color']);

//´PROPERTY JS 
// var cat = {
//   name: 'Tom',
//   color: 'Gray'
// };

// display(Object.getOwnPropertyDescriptor(cat, 'name'));

// CONFIGURABLE ATRIBUTE

// var cat = {
//   name: {first: 'Tom', last: 'Uri'},
//   color: 'Gray'
// };
// delete cat.name;
// display(cat.name);

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'}, 
    color: 'White'
}

Object.defineProperty(cat, 'fullName', 
  {
    get: function() {
      return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
      var nameParts = value.split(' ')
      this.name.first = nameParts[0]
      this.name.last = nameParts[1]
    }
  })

cat.fullName = 'Uriel Medina'
display(cat.fullName)
display(cat.name.first)
display(cat.name.last)

