const valueEl = document.querySelector('#value');
const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementEl.addEventListener('click', () => {
  valueEl.textContent = ++counterValue;
});

decrementEl.addEventListener('click', () => {
  valueEl.textContent = --counterValue;
});
