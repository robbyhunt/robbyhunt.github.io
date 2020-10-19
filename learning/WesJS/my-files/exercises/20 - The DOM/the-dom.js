// const heading = document.querySelector('h2');

// console.log(heading.textContent); // can see hidden text
// console.log(heading.innerText); // no styling

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');

// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('beforeend', ' 🍕');

// Classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'cute pup';

const custom = document.querySelector('.custom');

console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
