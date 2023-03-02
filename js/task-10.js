const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls').children[0];
const createEl = document.querySelector('#controls').children[1];
const destroyEl = document.querySelector('#controls').children[2];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  let divHTML = '';
  for (let i = 0; i < amount; i++) {
    divHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    boxesEl.innerHTML = divHTML;
    size += 10;
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

createEl.addEventListener('click', () => createBoxes(inputEl.value));

destroyEl.addEventListener('click', () => {
  destroyBoxes();
  inputEl.value = '';
});
