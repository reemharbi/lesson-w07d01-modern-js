'use strict';

console.log('It works!');

// function declaration
// function sayHello(){
//     console.log('Hello World!');
// }

// sayHello();

// --------------------------------------

// function expression
// const sayHello = function(){
//     console.log('Hello World!');
// }

// sayHello();

// --------------------------------------

// Arrow function expression - Rocket symbol - Fat arrow
// const sayHello = () => {
//     console.log('Hello World!');
// }

// sayHello();

// --------------------------------------

// Arrow function expression in one line

// const sayHello = () => console.log('Hello World!');

// sayHello();

// --------------------------------------

// Arrow function expression in one line with passed parameter

// const greetWorld = (greeting) => console.log(`${greeting} World!`);

// greetWorld('Hi');

// --------------------------------------

// Arrow function expression in one line with passed parameter without brackets for argument

// const greetWorld = greeting => console.log(`${greeting} World!`);

// greetWorld('Goodbye');

// --------------------------------------

// const greetWorld = greeting => `${greeting} World!`;

// const result = greetWorld('Goodbye');

// console.log(result);

// --------------------------------------

// Addition Function traditional way

// const add = function(x,y){
//     return x + y;
// }

// console.log(add(10,20));

// --------------------------------------

// Addition Function arrow way

// const add = (x,y) => x + y;

// console.log(add(10,20));

// --------------------------------------


const addFive = num => 5 + num;

console.log(addFive(3));

const divide = (num1, num2) => num1 / num2;

console.log(divide(10,2));

  
const whoIsTheBestIA = () => {
    let iaName = 'Alanoud';
    console.log(iaName);
  }

  whoIsTheBestIA();