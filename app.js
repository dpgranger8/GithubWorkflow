console.log("Hello world");
const rotated = document.getElementById("rotated");
const colors = ["blue", "red", "orange", "lightblue", "yellow", "green", "brown"]
let transform = 0;

var intervalID = window.setInterval(myCallback, 10);

function myCallback() {
    transform ++
    rotated.style.transform = "rotate(" + transform + "deg)";
}

document.getElementById("epilepsy").onclick = function () {
    let counter = 0;

    // Use setInterval for periodic execution
    const intervalId = setInterval(() => {
        if (counter >= 100) {
            clearInterval(intervalId); // Stop after 1000 iterations
            document.body.style.backgroundColor = "white";
            return;
        }

        colorfun();
        counter++;
    }, 10); // Run every 100ms
}

function colorfun() {
    let newColor = colors[Math.floor(Math.random() * colors.length)]
    console.log(newColor);
    document.body.style.backgroundColor = newColor;
}