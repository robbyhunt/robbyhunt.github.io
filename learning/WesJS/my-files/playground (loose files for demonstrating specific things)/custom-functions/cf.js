// function definition
function testFunc() {
  console.log('it works'); // body of the function
}

testFunc(); // fuinction call/run

// const bill = 100;
// const taxRate = 0.13;

function calculateBill(billAmount, taxRate = 0.13) {
  console.log(billAmount, taxRate);
  // const total = 100 * 1.13;
  const total = billAmount * (1 + taxRate);
  return total;
}

// console.log(`Your total is $${myTotal}`);
// console.log(`Your total is $${calculateBill()}`);

const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(300, 0.13);
console.log(myTotal, myTotal2);

const wesTotal = 500;
const wesTax = 0.23;
const myTotal3 = calculateBill(wesTotal, wesTax);
console.log(myTotal3);

//
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('wes');
console.log(greeting);

const mytotal4 = calculateBill(20 + 20 + 30 + 20, 0.15); // expressions in arguments

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Sam') {
  return `HEY ${name.toUpperCase()}`;
}

console.log(yell()); // using default values for arguments

console.log(yell(doctorize('wes'))); // functions as arguments

function calculateBill2(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // const total = 100 * 1.13;
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

console.log(calculateBill2(100, undefined, 0.2));
