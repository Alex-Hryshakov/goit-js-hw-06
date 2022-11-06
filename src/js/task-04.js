const counterValue = document.querySelector("#value");
let count = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const render = () => {
  counterValue.textContent = count;
};
function plus() {
  count += 1;
  render();
}

function minus() {
  count -= 1;
  render();
}

decrementBtn.addEventListener("click", minus);
incrementBtn.addEventListener("click", plus);