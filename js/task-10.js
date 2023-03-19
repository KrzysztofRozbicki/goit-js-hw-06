const START_SIZE = 30;
const INCREMENT_SIZE_VALUE = 10;
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input[type="number"]');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');

//This 'global' let is just to store the increment sizze value (just in case when user first create 5 boxes, and then want to create 10 other boxes)
let size = START_SIZE;

//Create random color in HEX value function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const singleBox = document.createElement('div');
    singleBox.style.width = `${size}px`;
    singleBox.style.height = `${size}px`;
    singleBox.style.backgroundColor = getRandomHexColor();
    boxesEl.append(singleBox);
    size += INCREMENT_SIZE_VALUE;
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

createEl.addEventListener('click', () => createBoxes(inputEl.value));

destroyEl.addEventListener('click', () => {
  destroyBoxes();
  inputEl.value = '';
  size = START_SIZE;
});
