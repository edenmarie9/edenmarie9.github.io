/*
Name: Eden-Marie Freiku
Date created: 2025-08-09
Date last edited: 2025-12-10
Version: 3.0
Description: Homework 2 JS. Providing functionality for the patient form
*/
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};
