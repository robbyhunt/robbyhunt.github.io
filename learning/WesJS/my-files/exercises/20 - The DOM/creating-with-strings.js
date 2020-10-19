const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `cute pup`;
const myHTML = `
  <div class="wrapper">
    <h2>cute</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// item.innerHTML = myHTML;
// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');

// turn a string into a dom element
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment);
console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);
