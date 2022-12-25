//## Task 10
// Стоврити код, який буде всім елементам з CSS класом `random-font` додавати функцію кліку, 
//яка буде змінювати властивість `font-family` на випадковий шрифт. 
//Послідовність шрифтів має бути попередньо заданою.

// ```
// const fontFamilies = [
//  'Arial', 'Times New Roman',
//  'Verdana', 'Brush Script MT',
//  'Tahoma', 'Garamond'
// ];
// ```

// Для отриамння випадкового індексу використати наступний вираз:
// > Math.floor(Math.random() \* fontFamilies.length)

const fontFamilies = [
  'Arial', 'Times New Roman',
  'Verdana', 'Brush Script MT',
  'Tahoma', 'Garamond'
];

const elements = document.getElementsByClassName('random-font');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function (event) {
    let random = Math.floor(Math.random() * fontFamilies.length)
    elements[i].style.fontFamily = fontFamilies[random];
  })
}

