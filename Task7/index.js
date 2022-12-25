let input = document.getElementById('input1');
let input2 = document.getElementById('input2');
let result = document.getElementById('result');

function generateListOfNumber(input, input2){
let input3 = parseInt(input.value);
let input4 = parseInt(input2.value);
if(input3 > input4){
  let p = document.createElement('p');
  p.innerHTML = 'Wrong number';
  result.innerHTML = p;
  document.body.appendChild(p);
}
else if(input4 > input3){
  for(let i = input3; i <= input4; i++){
    let li = document.createElement('li');
    li.innerHTML = i;
    result.innerHTML = li;
    document.body.appendChild(li);
  }
}
else if(input3 ==0 || input4 == 0){
  result.innerHTML = 'Must be positive number > 0';
}
}