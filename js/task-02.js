const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  ingredientsEl.append(listItem);
});
