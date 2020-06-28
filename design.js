// Select color input
// Select size input
const colorPicker = document.getElementById('colorPicker');
const rowsNumber = document.getElementById('inputHeight');
const cellsNumber = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
form.addEventListener("submit", function (evt) {
  pixelCanvas.innerHTML = '';
  evt.preventDefault();
  makeGrid();

})

pixelCanvas.addEventListener('click', function (evt) {
  if (evt.target.nodeName === 'TD') {
    evt.target.style.backgroundColor = colorPicker.value;
  }
})

function makeGrid() {
  for (let i = 0; i < rowsNumber.value; i++) {
    const row = pixelCanvas.insertRow(0);
    for (let j = 0; j < cellsNumber.value; j++) {
      row.insertCell(0);
    }
  }
}