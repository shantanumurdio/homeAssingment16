const textarea = document.getElementById("textArea");
const selectedColor = document.getElementById("givenColor");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const color = selectedColor.value;
  textarea.style.color = color;
  saveToLocalStorage(textarea.value, color);
});

function saveToLocalStorage(text, color) {
  const data = {
    text: text,
    color: color,
  };
  localStorage.setItem("savedData", JSON.stringify(data));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem("savedData");
  if (savedData) {
    const data = JSON.parse(savedData);
    textarea.value = data.text;
    textarea.style.color = data.color;
  }
}

loadFromLocalStorage(); // Load saved data when the page loads

textarea.addEventListener("input", () => {
  saveToLocalStorage(textarea.value, selectedColor.value);
});