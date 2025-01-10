console.log("Hello world");
const rotated = document.getElementById("rotated");
rotated.style.transform = "rotate(40deg)";
let transform = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

while (true) {
    transform ++;
    sleep(10);
    rotated.style.transform;
}