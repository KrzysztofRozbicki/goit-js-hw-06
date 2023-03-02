const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  inputEl.value.length > inputEl.dataset.length
    ? inputEl.classList.add('invalid')
    : inputEl.classList.add('valid');
});
