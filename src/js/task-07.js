const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("span#text");

inputEl.addEventListener("change", onInputSlide);

function onInputSlide(event) {
  spanEl.style.fontSize = String(event.currentTarget.value) + "px";
}