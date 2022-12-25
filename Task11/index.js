// ## Task 11

// Створити функцію getRandomColor, яка в якості аргумента приймає спосіб задання кольору: hex, rgb. Якщо 
//у функцію передадуть тип, який не підтримується, функція повертає -1. 
//Для rgb кольору є обмеження, що кожне число має бути в діапазоні від 0 до 255. 
//Для hex кольору необхідно сформувати послідовність з літер(ABCDEF) і чисел довжиною в 6 символів. 
//Для генерації випадкової літери використати принцип з Task 10 для отримання рандомного шрифта.

// Для випадковго числа в десятковій системі числення використати цю функцію

// ```
// function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
// ```

// > getRandomColor('rgb') => "rgb(122, 234, 150)"
// > getRandomColor('hex') => "#12DD4F"
// > getRandomColor('hexical') => -1


let input1 = document.getElementById('input1');
let p = document.getElementById('p');

function randomIntFromInterval(mymin, mymax) {
  return Math.floor(Math.random() * (mymax - mymin + 1) + mymin);
}

function getRandomColor(input1) {
  switch (input1.value) {
    case 'rgb':
      let a = randomIntFromInterval(0, 255);
      let b = randomIntFromInterval(0, 255);
      let c = randomIntFromInterval(0, 255);
      return "rgb(" + a + ", " + b + ", " + c + ")";

    case 'hex':
      let str = '#';
      for (let i = 0; i < 6; i++) {
        let h_3 = randomIntFromInterval(0, 15);
        str = str + ten_to_hex(h_3);
      }
      return str;

    default:
      return -1;
  }
}

function myColor() {
  p.innerHTML = getRandomColor(input1);
  p.style.color = p.innerHTML;
}

function ten_to_hex(myten) {
  switch (myten) {
    case 10:
      return 'A';
    case 11:
      return 'B';
    case 12:
      return 'C';
    case 13:
      return 'D';
    case 14:
      return 'E';
    case 15:
      return 'F';
    default:
      return myten;
  }
}
