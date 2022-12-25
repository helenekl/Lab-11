let input = document.getElementById('input');
let result = document.getElementById('result');

function getNextNumber(input) {

let input_int = parseInt(input.value);
  
  if (input_int > 0) {
    result.innerHTML = input_int + 1;
  }
  else if (input_int == 0) {
    result.innerHTML = 0;
  }
  else{
    result.innerHTML = input_int - 1;
  }

}


