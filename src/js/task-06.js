const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length === Number.parseInt(inputEl.dataset.length)
  ) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}