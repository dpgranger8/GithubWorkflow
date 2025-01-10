console.log("Hello world");
const rotated = document.getElementById("rotated");
let transform = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var intervalID = window.setInterval(myCallback, 10);

function myCallback() {
    transform ++
    rotated.style.transform = "rotate(" + transform + "deg)";
}

let colors

document.getElementById("epilepsy").onclick = function () {
    
}

// function myCallback() {
//     for (i = 0; i < 10000; i++) {
//         sleep(1)
//         transform ++
//         rotated.style.transform = "rotate(" + transform + "deg"
//     }
// }