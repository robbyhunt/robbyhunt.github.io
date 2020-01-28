// Different ways to declare functions

/*
// Regular keyword function
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

// Anonymous function - Function with no name
function (firstName) {
 return `Dr. ${firstName}`;
}

doctorize2('Wes'); // Showing that function expression can't be called before it's defined but keyword functions can because they're "hoisted" to the top on load

// Function expression - Storing a function as a value in variable
const doctorize = function doctorize(firstName) {
  doesntExist(); // Demonstrating bad error reporting in function expression
  return `Dr. ${firstName}`;
};

function doctorize2(firstName) {
 return `Dr. ${firstName}`;
}
*/

/*
// Arrow functions - always anonymous functions
// First example is the basic way of doing then will simplify
function inchToCM(inches) {
  const cm = inches * 2.54;
  return cm;
}

function inchToCM2(inches) {
  return inches * 2.54;
}

const inchToCM3 = function(inches) {
  return inches * 2.54;
};

const inchToCM4 = inches => inches * 2.54;

// Challenge to convert the following to arrow function
function add(a, b = 3) {
  const total = a + b;
  return total;
}

const addArrow = (a, b = 3) => a + b;
*/

// Returning an object with arrow function
function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
}

const MakeABaby2 = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE - Immediately Invoked Function Expression
(function(age) {
  console.log('Running the Anon function');
  return `You are cool and age ${age}`;
})(10);

// Methods - A function living inside an object
const wes = {
  name: 'Wes Bos',
  sayHi() {
    console.log('Hey Wes');
    return 'Hey wes';
  },
  // arrow function - useful if you don't want to access this.etc
  whisperHi: () => {
    console.log('hii im quiet');
  },
};

// Callback functions
// Click callback
const button = document.querySelector('.clickMe');
console.log(button);

function handleClick() {
  console.log('Great Clicking!!');
}
button.addEventListener('click', handleClick);
button.addEventListener('click', function() {
  console.log('Nice JOb!!!!');
});

// Timer callback
setTimeout(function() {
  console.log('Time to eat!');
}, 2000);
