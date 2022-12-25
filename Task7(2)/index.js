// ## Task 7

// Створити функцію generateListOfNumberWithStep, яка буде приймати три параметра: початок, кінець відрізку, крок. Функція повинна створити на сторінці список з числовими значеннями з відрізку з заданим кроком. Якщо передані іислові значення не є відрізком(перший аргумент є більший за дургий), функція повинна стоврити на сторінці елемент <p> з текстом: "Wrong interval". У випадку якщо крок задається 0 або менеше, необхідно створити елемент span з текстом: "Interval must be positive number"

// > generateListOfNumber(1, 7, 3)

// ```
//  <body>
//    <ul>
//     <li>1</li>
//     <li>4</li>
//     <li>7</li>
//    </ul>
//  </body>
// ```

// > generateListOfNumber(20, 5, 2)

// ```
// <body>
//   <p>Wrong interval</p>
// </body>
// ```

// > generateListOfNumber(1, 5, -2)

// ```
// <body>
//   <span>Interval must be positive number</span>
// </body>
// ```

let input = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input5 = document.getElementById('input3');
let result = document.getElementById('result');

function generateListOfNumber(input, input2, input5){
let input3 = parseInt(input.value);
let input4 = parseInt(input2.value);
let input6 = parseInt(input5.value);
if(input3 > input4){
  let p = document.createElement('p');
  p.innerHTML = 'Wrong number';
  result.innerHTML = p;
  document.body.appendChild(p);
}
else if(input4 > input3){
  if(input6 === null){
    for(let i = input3; i <= input4; i++){
      let li = document.createElement('li');
      li.innerHTML = i;
      result.innerHTML = li;
      document.body.appendChild(li);
    }
  }
  else if(input6 < 0){
    let p = document.createElement('p');
    p.innerHTML = 'Must be positive number';
    result.innerHTML = p;
    document.body.appendChild(p);
  }
  else{
    for(let i = input3; i <= input4; i+=input6){
      let li = document.createElement('li');
      li.innerHTML = i;
      result.innerHTML = li;
      document.body.appendChild(li);
    }
  }
  
 
}
else if(input3 ==0 || input4 == 0){
  result.innerHTML = 'Must be positive number > 0';
}
}