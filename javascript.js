//interface functions: show the value on the slider range bar

const slider = document.getElementById("rangebar");
const valueSlider = document.getElementById("valuedisplay");
let gridValue = slider.value;

valueSlider.innerHTML = (slider.value + " x " + slider.value);
getGrid ();

slider.oninput = function () {
    valueSlider.innerHTML = (this.value + " x " + this.value);
    gridValue = slider.value;

    getGrid ();
}

//grid functions

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

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
            row.className = 'row';
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    gridCanva.appendChild(grid);    
}

