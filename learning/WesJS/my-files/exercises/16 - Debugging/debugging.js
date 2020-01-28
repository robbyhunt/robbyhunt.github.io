const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // console.groupCollapsed(`${person.name}`);
  // console.log(person.country);
  // console.log(person.cool);
  // console.log('DOne!');
  // console.groupEnd(`${person.name}`);
  // if (person.name === 'Wes') {
  //   console.error('Dumb name');
  // } else if (person.name === 'Snickers') {
  //   console.error('Good boy!');
  // }
  // debugger;
  // console.log(person.name);
});

// console.table(people);

// Console Methods
// console.log(); // logs text
// console.error(); // changes icon in console to error sign
// console.warn(); // same but with warning icon
// console.table(); // formats info into a table
// console.count(); // counts in console the number of times it has been run
// console.group(); // groups multiple console functions

// Callstack - tracing function calls etc. in console error reports

// Grabbing Elements
// $0, 1, 2 select recently grabbed elements on webpage
// $('p) similar to document.queryselector - only gets first one - doesn't work if jquery loaded
// $$('p') same but selects all

// Breakpoints
// debugger; pauses js loading at a specified point when in dev tools

// Scope

// Network Requests - more dev tools stuff

// Break On Attribute - allows you to add breakpoints when certain events happen (such as attribute update etc.)

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.warn('I need to see some identification');
  console.error("Not the log you're looking for");
  console.log("Boil 'em, mash 'em, stick 'em in a stew!");
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  console.count(`running Doctorize ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  // doesntExist(); // will cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
