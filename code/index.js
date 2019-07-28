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

// Lab 1

// const addFive = num => 5 + num;

// console.log(addFive(3));

// const divide = (num1, num2) => num1 / num2;

// console.log(divide(10,2));

  
// const whoIsTheBestIA = () => {
//     let iaName = 'Alanoud';
//     console.log(iaName);
//   }

//   whoIsTheBestIA();

// --------------------------------------

// Lab 2

// const fullName = (first,last) => `${first} ${last}`

// console.log(fullName('Reem', 'AlHarbi'));

// --------------------------------------

// Lab 3

// const sayHello = name => console.log("Hello " + name);
  
// sayHello("World");

// --------------------------------------

// Traditional for loop method

// const instructors = ['Marc', 'AlAnoud', 'Usman'];

// for (let i = 0; i < instructors.length; i++){
//     console.log(instructors[i]);
// }

// --------------------------------------

// forEach loop method

// const instructors = ['Marc', 'AlAnoud', 'Usman'];

// instructors.forEach(function(element){ 
//     console.log(element);
// });

// --------------------------------------

// forEach loop method also print method

// const instructors = ['Marc', 'AlAnoud', 'Usman'];

// instructors.forEach(function(element, index){ 
//     console.log(element,index);
// });

// instructors.forEach(name => console.log(name));

// instructors.forEach((name, i) => console.log(name , i));


// --------------------------------------

// Copy array

// const instructors = ['Marc', 'AlAnoud', 'Usman'];
// const instructorsCopy = [];

// Traditional for loop method 

// for (let i=0; i < instructors.length; i++){
//     instructorsCopy.push(instructors[i]);
// }
// console.log(instructorsCopy);

// forEach method

// instructors.forEach(function(item){
//     instructorsCopy.push(item);
// });
// console.log(instructorsCopy);

// --------------------------------------

// Lab 1

// const friends = ["Mansour", "Munira", "Ahmed"];
// friends.forEach(name => console.log(`Hi ${name}!`));

// --------------------------------------

// Lab 2

// const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
// let total = 0;
// nums.forEach(number => total= total+number);
// console.log(total);

// --------------------------------------

// Lab 3

const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

stringNumbers.forEach(number => {
   let intNumbers = Number(number);
    if(intNumbers < 4000){
        totalNumbersUnder4000 += intNumbers;
    }
});

console.log(totalNumbersUnder4000);