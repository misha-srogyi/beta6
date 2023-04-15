const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');


const elements = ingredients.map(option => {
  const elemRef = document.createElement('li');
  elemRef.textContent = `${[option]}`;
  elemRef.classList.add('item');
  return elemRef; 
})

listEl.append(...elements);