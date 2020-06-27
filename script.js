// Try edit message
let decimalEle = document.getElementById("dec");
let binaryEle = document.getElementById("bin");
let twosEle = document.getElementById("twos");

let number = 0;
let increment = 1;

function upClick() {
  number += increment;
  decimalEle.innerHTML = number;
  binaryEle.innerHTML = (number.toString(2) >>> 0).toString(2);
  twosEle.innerHTML = (~number.toString(2)).toString(2);
}

function downClick() {
  number -= increment;
  decimalEle.innerHTML = number;
  binaryEle.innerHTML = (number.toString(2) >>> 0).toString(2);
  twosEle.innerHTML = (~number.toString(2) >>> 0).toString(2);
}

function incrementClick(num) {
  increment = num;
}
