let first_side = document.getElementById('input1');
let second_side = document.getElementById('input2');
let third_side = document.getElementById('input3');
let result = document.getElementById('result');



function getTriangleSquare(first_side, second_side, third_side) {
  
  let first_side_int = parseInt(first_side.value);
  let second_side_int = parseInt(second_side.value);
  let third_side_int = parseInt(third_side.value);

  let sum_of_sides = (first_side_int + second_side_int + third_side_int) / 2;
  
  let square = Math.sqrt(sum_of_sides * (sum_of_sides - first_side_int) * (sum_of_sides - second_side_int) * (sum_of_sides - third_side_int));
  
  result.innerHTML = square;
}


