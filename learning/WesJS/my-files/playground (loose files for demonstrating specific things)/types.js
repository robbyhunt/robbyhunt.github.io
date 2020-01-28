/* eslint-disable */

/*
// Explorin' Strings
const name = 'robby';
const middle = "scott";
const last = `hunt`;

const sentance1 = 'he\'s so "cool"';
const sentance2 = "he's so \"cool\"";
const sentance3 = `he's so "cool"`

const song1 = 'Ohh\
 \
yeah';
const song2 = `Ohh
 
yeah`;

const html = `
  <div>
    <h2>Ay</h2>
  </div>
`;

const hello1 = 'hello my name is ' + name + '. Nice to meet you'; //concatenation
const hello2 = `hello my name is ${name}. Nice to meet you I am ${1+100} years old.`;

const html2 = `
  <div>
    <h2>${name}</h2>
    <p>${hello2}</p>
  </div>
`;

// console.log(html2);
document.body.innerHTML = html2;

*/


// Explorin' Numbers
/*

const age = 25.5;
const name = 'robby';

const a = 10;
const b = 20;

console.log(a + b);
console.log(a + '5');
console.log('10' + '10');
console.log('10' * '10'); 

console.log(Math.round(20.5));
console.log(Math.floor(20.9));
console.log(Math.ceil(20.2));
console.log(Math.random());


const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kid gets ${eachKidGets} Smarties and dad gets ${dadGets}.`);


*/

//Explorin Objects
/*
const person = {
  first: 'rob',
  status: 'cool',
  age: 25,
};

console.log(person.first);
console.log(person.status);
console.log(person.age);
*/

//Explorin null and undefined
/*
let dog;
console.log(dog); //undefined
dog = 'snickers';
console.log(dog); //defined now

let somethingUndefined; //undefined when nothing is set
const somethingNull = null; //has to be set to null

const cher = {
  first: 'cher',
} // last name is undefined - it never existed

const teller = {
  first: 'Raymond',
  last: 'Teller'
}

teller.first = 'Teller';
teller.last = null; // last name is null, it's been removed/set to nothing
*/

//Explorin booleans and equality
let isDrawing = false;
let age = 18;
const ofAge = age > 17;
console.log(ofAge);

age = 100;
console.log(age === 10);
console.log(age === 100);

let age2 = 100;
console.log(age === age2);

console.log(10 === 10); //checks for value and type
console.log(10 == 10); // checks only value
//double equals almost always bad practice - ===
console.log("10" == 10);
console.log("10" === 10);

