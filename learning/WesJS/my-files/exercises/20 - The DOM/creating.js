const myParagraph = document.createElement('p');
myParagraph.textContent = 'Yo testerooooo!';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'niiice!';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Test Heading!';
myDiv.insertAdjacentElement('afterbegin', heading);

const myUl = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');

li1.textContent = 'One';
li2.textContent = 'Two';
li3.textContent = 'Three';
li4.textContent = 'Four';
li5.textContent = 'Five';

myUl.appendChild(li1);
myUl.appendChild(li2);
myUl.appendChild(li3);
myUl.appendChild(li4);
myUl.appendChild(li5);

myDiv.appendChild(myUl);
