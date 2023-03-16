const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  inputEl.value.length === +inputEl.dataset.length
    ? (inputEl.className = 'valid')
    : (inputEl.className = 'invalid');
});
