let num;

function first1(num) {
  let sum = (num-32)*(5/9);
  return sum;
}

function second2(num) {
  let sum = num*9/5+32;
  return sum;
}

document.getElementById("btn").onclick = function() {

  let num = document.getElementById("main").value;
  let num1 = document.getElementById("first");
  let num2 = document.getElementById("second");

  if (num1.checked) {
    //num = Number(num);
    num = first1(num);
    document.getElementById("show").innerHTML = num +'°C';

  } else if (num2.checked) {
    //num = Number(num);
    num = second2(num);
    document.getElementById("show").innerHTML = num +'°F';

  } else {
    
    document.getElementById("show").innerHTML = "Enter some value";
  }

}