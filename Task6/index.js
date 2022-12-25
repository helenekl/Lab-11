let input = document.getElementById('input');
let input2 = document.getElementById('input2');
let div = document.getElementById('elem');
function setInnerText(input, input2) {
  switch (input.value) {
    case 'elem':
      div.innerText = input2.value;
      break;
    default:
      div.innerText = 'false';
      break;
  }
}