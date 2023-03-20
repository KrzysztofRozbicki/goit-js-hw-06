const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', () =>
  inputEl.value.length === Number(inputEl.dataset.length)
    ? (inputEl.className = 'valid')
    : (inputEl.className = 'invalid')
);
