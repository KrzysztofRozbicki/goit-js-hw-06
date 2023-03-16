const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  inputEl.className = '';
  inputEl.value.length > inputEl.dataset.length
    ? inputEl.classList.toggle('invalid')
    : inputEl.classList.toggle('valid');
});
