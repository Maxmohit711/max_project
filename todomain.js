let number = 0;
let p = document.getElementById('show');




document.getElementById('show').innerHTML = number;

function add() {
  number += 1
  document.getElementById("show").innerHTML = number;
  if (number < 0) {
    p.style.color = 'red';
  } else if (number => 0) {
    p.style.color = 'black';
  }
}

function less() {
  number -= 1
  document.getElementById("show").innerHTML = number;

  if (number < 0) {
    p.style.color = 'red';
  } else if (number => 0) {
    p.style.color = 'black';
  }
}

function reset() {
  number = 0;
  document.getElementById("show").innerHTML = number;

  if (number < 0) {
    p.style.color = 'red';
  } else if (number => 0) {
    p.style.color = 'black';
  }
}