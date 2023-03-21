const inputEl = document.getElementById('validation-input');
const { length } = inputEl.dataset;

inputEl.addEventListener('blur', () => {
  inputEl.value.length === Number(length)
    ? (inputEl.className = 'valid')
    : (inputEl.className = 'invalid');
});
