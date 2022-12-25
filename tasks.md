# Tasks for JS

Для кожного завдання необіхідно створити окремий JS файл

## Task 1

Створити функцію sumOfTwo яка буде приймати два аргументи, та повертати квадрат їх суми

> Для піднесення в квадрат використати Math.pow(значення, степінь)
> Math.pow(2, 2) => 4
> Math.pow(3, 1) => 3
> Math.pow(3, 2) => 9
> let c = 5;
> Math.pow(c, 2) => 25
> let a = 5 , b = 3;
> Math.pow(a, b) => 125

## Task 2

Створити функцію getNextNumber яка буде приймати один аргумент та повертати:

- наступне число, якщо аргумент є додатній
- попереднє число, якщо аргумент є від'ємний
- при передачі значення 0, повертати 0

## Task 3

Створити функцію getTriangleSquare, яка буде рахувати площу трикутника за формулою Герона(https://uk.wikipedia.org/wiki/%D0%A4%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0_%D0%93%D0%B5%D1%80%D0%BE%D0%BD%D0%B0). Функція приймає в якості аргументів довжини сторін трикутника

> Для отримання квадратного кореню з числа використати Math.sqrt(значення)
> Math.sqrt(16) => 4
> Math.sqrt(9) => 3
> Math.sqrt(81) => 9
> let c = 25;
> Math.sqrt(c) => 5

## Task 4

Створити функцію getSeconds, яка буде повертати кількість секунд, в залежності від того що їй передадуть. Функція має два аргументи:

- value - аргумент, який вказує кількість
- type - аргумент, який вказує в яких одиницях передається значення і може набувати наступних значень: seconds, minutes, hours. У випадку, якщо передається тип, який не є описаний, результату має бути -1

> getSeconds(5, 'minutes') => 300
> getSeconds(5, 'hours') => 18000
> getSeconds(5, 'р') => -1

## Task 5

Створити функцію getCountOfByClassName, яка в якості аргумента, приймає назву CSS класу, а резульаттом функції є повернення кількості елементів з таким класом на сторінці.

```
<body>
  <div class="item"></div>
  <div class="item"></div>
  <div class="elem"></div>
</body>
```

> getCountOfByClassName('item') => 2
> getCountOfByClassName('elem') => 1
> getCountOfByClassName('abc') => 0

## Task 6

Створити функцію setInnerText, яка буде міняти в елемента за його id текстову складову. Якщо елемента не існує, то функція має повернути значення false, якщо елемент існує, то функція повертає значення true

> setInnerText('mySpecialId', 'my new value')

## Task 7

Створити функцію generateListOfNumber, яка буде приймати два параметра: початок і кінець відрізку. Функція повинна стоврити на сторінці список з числовими значеннями з відрізку. Якщо передані іислові значення не є відрізком(перший аргумент є більший за дургий), функція повинна стоврити на сторінці елемент <p> з текстом: "Wrong interval"

> generateListOfNumber(1, 5)

```
<body>
<ul>
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
</ul>
</body>
```

> generateListOfNumber(20, 5)

```
<body>
<p>Wrong interval</p]>
</body>
```

## Task 7

Створити функцію generateListOfNumberWithStep, яка буде приймати три параметра: початок, кінець відрізку, крок. Функція повинна створити на сторінці список з числовими значеннями з відрізку з заданим кроком. Якщо передані іислові значення не є відрізком(перший аргумент є більший за дургий), функція повинна стоврити на сторінці елемент <p> з текстом: "Wrong interval". У випадку якщо крок задається 0 або менеше, необхідно створити елемент span з текстом: "Interval must be positive number"

> generateListOfNumber(1, 7, 3)

```
 <body>
   <ul>
    <li>1</li>
    <li>4</li>
    <li>7</li>
   </ul>
 </body>
```

> generateListOfNumber(20, 5, 2)

```
<body>
  <p>Wrong interval</p>
</body>
```

> generateListOfNumber(1, 5, -2)

```
<body>
  <span>Interval must be positive number</span>
</body>
```

## Task 8

Створити функцію generateCrad, яка буде приймати об'єкт з наступною стурктурою

```
{
 title: "Title 1",
 imageUrl: "Some url",
 description: "Eu ut non sint ullamco minim anim laboris sit nulla."
}
```

На основі цього аргументу в body має з'явитися наступний елемент:

```
const card = {
 title: "Title 1",
 imageUrl: "Some url",
 description: "Eu ut non sint ullamco minim anim laboris sit nulla."
};
```

> generateCrad(card);

```
<body>
 <div class="card">
   <h4>Title 1</h4>
   <br>
   <img src="Some url" alt="alternative text was not provided">
   <p>
    Eu ut non sint ullamco minim anim laboris sit nulla.
   </p>
 </div>
</body>
```

## Task 9

Використовуючи функцію з Task 8 generateCrad, необхідно створити функцію generateCrads яка буде приймати масив об'єктів і на їх основі створювати елементи в body. Якщо Індекс елемента є парне число, потріно додати на початок його значення поля title індекс його позиції у форматі: `[index]`

```
const cards = [
 { title: 'title A', imageUrl: 'url', description: 'description - 1' },
 { title: 'title B', imageUrl: 'url', description: 'description - 2' },
 { title: 'title C', imageUrl: 'url', description: 'description - 3' },
 { title: 'title D', imageUrl: 'url', description: 'description - 4' },
];
```

> generateCrads(cards);

```
<body>
 <div class="card">
   <h4>[0]title A</h4>
   <br>
   <img src="url" alt="alternative text was not provided">
   <p>description - 1</p>
 </div>
 <div class="card">
   <h4>title B</h4>
   <br>
   <img src="url" alt="alternative text was not provided">
   <p>description - 2</p>
 </div>
 <div class="card">
   <h4>[2]title C</h4>
   <br>
   <img src="url" alt="alternative text was not provided">
   <p>description - 3</p>
 </div>
 <div class="card">
   <h4>title D</h4>
   <br>
   <img src="url" alt="alternative text was not provided">
   <p>description - 4</p>
 </div>
</body>
```

## Task 10

Стоврити код, який буде всім елементам з CSS класом `random-font` додавати функцію кліку, яка буде змінювати властивість `font-family` на випадковий шрифт. Послідовність шрифтів має бути попередньо заданою.

```
const fontFamilies = [
 'Arial', 'Times New Roman',
 'Verdana', 'Brush Script MT',
 'Tahoma', 'Garamond'
];
```

Для отриамння випадкового індексу використати наступний вираз:

> Math.floor(Math.random() \* fontFamilies.length)

## Task 11

Створити функцію getRandomColor, яка в якості аргумента приймає спосіб задання кольору: hex, rgb. Якщо у функцію передадуть тип, який не підтримується, функція повертає -1. Для rgb кольору є обмеження, що кожне число має бути в діапазоні від 0 до 255. Для hex кольору необхідно сформувати послідовність з літер(ABCDEF) і чисел довжиною в 6 символів. Для генерації випадкової літери використати принцип з Task 10 для отримання рандомного шрифта.

Для випадковго числа в десятковій системі числення використати цю функцію

```
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
```

> getRandomColor('rgb') => "rgb(122, 234, 150)"
> getRandomColor('hex') => "#12DD4F"
> getRandomColor('hexical') => -1

## Task 12

Всім елементам p CSS класом `random-color` задати функцію, яка буде викликатися при кліку на елемент та випадковим чином міняти колір. Використати функцію з Task 11
