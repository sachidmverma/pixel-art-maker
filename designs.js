/**defining the variables by selecting the DOM elements that the user will interact with*/
/*When size is submitted by the user, call makeGrid()*/

let canvas = document.getElementById("pixelCanvas");
let color = document.getElementById("colorPicker");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let sizePicker = document.getElementById("sizePicker");

sizePicker.onsubmit = function(event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
/*loop over each row and cell*/
/*event listeners added to the grid squares*/
    for (let h = 0; h <height.value; h++) {
        const row = canvas.insertRow(h);

        for (let w = 0; w<width.value; w++) {
            const cell = row.insertCell(w);
            cell.addEventListener("click", fillSquare);
        }
    }
}
/*clears the grid*/
function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}
/*fill the square with the color the user selects*/
function fillSquare () {
    event.target.style.backgroundColor = color.value;
}
