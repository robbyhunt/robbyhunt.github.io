// /* eslint-disable */
// const first = 'rob';
// let second = 'hunt';
// var age = 100;

// function sayHi() {
//   console.log('Hi');
// }

// const age = 100;

// function go() {
//   const hair = 'brown';
//   const age = 200;
//   console.log(hair);
//   console.log(age);
// }

// go();

// console.log(age);
// console.log(hair);

// let cool;

// if (1 === 1) {
//   cool = true;
// }

// console.log(cool);

// function isCool(name) {
//   let cool;
//   if (name === 'robby') {
//     cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// isCool('robby');

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// VAR function scope, LET AND CONST block scoped

// BELOW IS EXAMPLE OF LEXICAL SCOPING -- VALUES ARE GATHERED FROM WHERE THEY ARE DEFINED NOT WHERE THEY ARE RUN
const cat = 'lola';

function logCat() {
  console.log(cat);
}

function go() {
  const cat = 'cakers';
  logCat();
}

go();

// BEST PRACTICES:
// try not to create global variables
//
