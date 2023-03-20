const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event =>
  event.currentTarget.value
    ? (nameEl.textContent = event.currentTarget.value)
    : (nameEl.textContent = 'Anonymous')
);
