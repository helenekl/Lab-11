
function randomIntFromInterval(mymin, mymax) {
  return Math.floor(Math.random() * (mymax - mymin + 1) + mymin);
}

const elements = document.getElementsByClassName('random-color');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function (event) {
    let a = randomIntFromInterval(0, 255);
    let b = randomIntFromInterval(0, 255);
    let c = randomIntFromInterval(0, 255);
    elements[i].style.fontSize = '40px';
    elements[i].style.color = "rgb(" + a + ", " + b + ", " + c + ")";
  })
}
