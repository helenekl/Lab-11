const quantity = document.getElementsByClassName('item');
const quantity2 = document.getElementsByClassName('elem');
const lastPage = quantity[quantity.length];
const lastPage2 = quantity2[quantity2.length];
let input = document.getElementById('input');

function getCountOfByClassName(quantity, lastPage, input) {
  let result = document.getElementById('result');
  quantity.length2 = parseInt(quantity.length);
  quantity2.length2 = parseInt(quantity2.length);
  switch (input.value) {
    case 'item':
      result.innerHTML = quantity.length2;
      break;
    case 'elem':
      result.innerHTML = quantity2.length2;
      break;
    default:
      result.innerHTML = 'Класу з таким іменем немає';
      break;
  }

}