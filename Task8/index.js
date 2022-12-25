// ## Task 8

// Створити функцію generateCrad, яка буде приймати об'єкт з наступною стурктурою

// ```
// {
//  title: "Title 1",
//  imageUrl: "Some url",
//  description: "Eu ut non sint ullamco minim anim laboris sit nulla."
// }
// ```

// На основі цього аргументу в body має з'явитися наступний елемент:

// ```
// const card = {
//  title: "Title 1",
//  imageUrl: "Some url",
//  description: "Eu ut non sint ullamco minim anim laboris sit nulla."
// };
// ```

// > generateCrad(card);

// ```
// <body>
//  <div class="card">
//    <h4>Title 1</h4>
//    <br>
//    <img src="Some url" alt="alternative text was not provided">
//    <p>
//     Eu ut non sint ullamco minim anim laboris sit nulla.
//    </p>
//  </div>
// </body>
// ```
let mytitle = document.getElementById('input1');
let imageUrl = document.getElementById('input2');
let description = document.getElementById('input3');


function generateCard(mytitle, imageUrl, description) {
    let h4 = document.createElement('h4');
    h4.innerHTML = mytitle.value;
    document.getElementById('result').appendChild(h4);
    let img = document.createElement('img');
    img.src = imageUrl.value;
    document.getElementById('result').appendChild(img);
    let p = document.createElement('p');
    p.innerHTML = description.value;
    document.getElementById('result').appendChild(p);
}