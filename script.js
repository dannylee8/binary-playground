// Try edit message
let decimalEle = document.getElementById("decimal-num-text");
let binaryEle = document.getElementById("binary-num-text");
let number = 0;
let increment = 1;

function upClick() {
  number += increment;
  decimalEle.innerHTML = number;
  binaryEle.innerHTML = number.toString(2);
}

function downClick() {
  number -= increment;
  decimalEle.innerHTML = number;
  binaryEle.innerHTML = number.toString(2);
}

function incrementClick(num) {
  increment = num;
}
