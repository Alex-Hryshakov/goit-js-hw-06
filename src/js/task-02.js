const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = document.querySelector("#ingredients");

const makeIngredientsItem = ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  return itemEl;
};
const ingredientsItem = ingredients.map(makeIngredientsItem);
console.log(ingredientsItem);

ingredientsEL.append(...ingredientsItem);