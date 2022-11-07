function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const makeColorButton = document.querySelector('.change-color');
const spanColorValue = document.querySelector('span.color');

makeColorButton.addEventListener('click', onMakeColorButtonClick);

function onMakeColorButtonClick(event) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColorValue.textContent = color;
}
