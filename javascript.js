const slider = document.getElementById("rangebar");
const valueSlider = document.getElementById("valuedisplay");

console.log ("value is" + valueSlider);

valueSlider.innerHTML = (slider.value + " x " + slider.value);

slider.oninput = function () {
    valueSlider.innerHTML = (this.value + " x " + this.value);
}