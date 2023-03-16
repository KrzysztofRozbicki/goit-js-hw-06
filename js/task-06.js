const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  inputEl.className = '';
  console.log(inputEl.value.length, inputEl.dataset.length);
  inputEl.value.length === +inputEl.dataset.length
    ? inputEl.classList.toggle('valid')
    : inputEl.classList.toggle('invalid');
});
