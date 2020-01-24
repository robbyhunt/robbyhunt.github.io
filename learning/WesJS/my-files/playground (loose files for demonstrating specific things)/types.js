/* eslint-disable */

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


// Explorin' Numbers