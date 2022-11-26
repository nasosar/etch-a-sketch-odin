//interface functions: show the value on the slider range bar

const slider = document.getElementById('rangebar');
const valueSlider = document.getElementById("valuedisplay");
let gridValue = slider.value;
let pickedColor = document.querySelector('#colorwheel').value;
let randomColor = '';
let selectedMode = '';

document.querySelector('#colorwheel').onchange = e => {
    pickedColor = (e.target.value);
}


valueSlider.innerHTML = (slider.value + " x " + slider.value);
getGrid ();

slider.oninput = function () {
    valueSlider.innerHTML = (this.value + " x " + this.value);
    gridValue = slider.value;

    getGrid ();
}


// button modes functions

document.querySelector('#btn-color').onclick = e => {
    selectedMode = 'notrainbow';
    pickedColor = document.querySelector('#colorwheel').value;
}

document.querySelector('#btn-rainbow').onclick = e => {
    selectedMode = 'rainbow';
    alert("selected the " + selectedMode);
}

document.querySelector('#btn-eraser').onclick = e => {
    selectedMode = 'notrainbow';
    pickedColor = 'white';
}

document.querySelector('#btn-clear').onclick = e => {
    selectedMode = 'notrainbow';
    getGrid ();
}

//grid functions

function getGrid () {

    let columns = gridValue;
    let rows = gridValue;
    const gridCanva = document.querySelector('.div-canva');
    let grid = document.createElement('div');

    removeAllChildNodes(gridCanva);

    grid.className = 'grid';
    for (let i = 0; i < columns; ++i) {
        let column = document.createElement('div'); // create column
        column.className = 'column';
        for (let j = 0; j < rows; ++j) {
            let row = document.createElement('div'); // create row
            row.className = 'canva-pixel';
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    gridCanva.appendChild(grid);

    if (selectedMode === "rainbow"){
        randomColor();
    } else {
    paintPixels ();
    } 
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function paintPixels () {
    let pixels = document.querySelectorAll('.canva-pixel');
        pixels.forEach ((pixels) => {
            pixels.onmouseover = (event) => {                
                 pixels.style.backgroundColor = pickedColor;                               
            }
        }); 
     
}


function randomPickedColor() {
    alert ('im running');
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    pickedColor = "rgb(" + x + "," + y + "," + z + ")";

    let pixels = document.querySelectorAll('.canva-pixel');
        pixels.forEach ((pixels) => {
            pixels.onmouseover = (event) => {
                alert('funciona porra');
                pixels.style.backgroundColor = randomPickedColor();                                     
            }
        });  
}

