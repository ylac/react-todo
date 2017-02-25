// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(1, 4));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
//
var groupA = ['Bert', 'Freddie'];
var groupB = ['Rigram'];
var final = [3, ...groupA];

console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

var greet = function (name, age) {
  var greeting = "Hi " + name + ", you are " + age;
  console.log(greeting);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = [...names, 'Caly'];

final.forEach((name) => {
  console.log(name);
});
