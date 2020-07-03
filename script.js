// Try edit message
let decimalEle = document.getElementById("dec");
let binaryEle = document.getElementById("bin");
let onesEle = document.getElementById("ones");
let twosEle = document.getElementById("twos");
let unitCount = document.getElementById("unitCount");
let allElements = document.getElementsByTagName("*");

let number = 0;
let unit = 1;
let outline = false;

/**
 * Return a string representing n as a 32-bit unsigned integer,
 * in binary notation.
 *
 * https://exploringjs.com/impatient-js/ch_numbers.html#internally-bitwise-operators-work-with-32-bit-integers
 */
function b32(n) {
  // >>> ensures highest bit isn’t interpreted as a sign
  return (n >>> 0).toString(2).padStart(32, "0");
}

function b32ones(n) {
  return (~n >>> 0).toString(2).padStart(32, "0");
}

function b32twos(n) {
  return ((~n + 1) >>> 0).toString(2).padStart(32, "0");
}

function upClick() {
  number += unit;
  decimalEle.innerHTML = number;
  // decimalEle.classList.remove("fade");
  binaryEle.innerHTML = b32(number);
  onesEle.innerHTML = b32ones(number);
  twosEle.innerHTML = b32twos(number);
}

function downClick() {
  number -= unit;
  decimalEle.innerHTML = number;
  // decimalEle.classList.remove("fade");
  binaryEle.innerHTML = b32(number);
  onesEle.innerHTML = b32ones(number);
  twosEle.innerHTML = b32twos(number);
}

function unitClick(arg) {
  if (arg === "reset") {
    unit = 1;
  } else if (arg[0] === "+") {
    if (arg.length === 1) {
      unit += 1;
    } else {
      unit += Number.parseInt(arg.split("+")[1]);
    }
  } else if (arg[0] === "-") {
    if (arg.length === 1) {
      unit -= 1;
    } else {
      unit -= Number.parseInt(arg.split("-")[1]);
    }
  } else {
    unit += arg;
  }
  unitCount.innerHTML = `${unit}`;
}

function copyText(element) {
  navigator.clipboard.writeText(element.innerHTML).then((text) => {
    document.getElementById("copyMessage").innerHTML = "Copied!";
    setTimeout(clearCopyTextMessage, 2000);
  });
}

function clearCopyTextMessage() {
  document.getElementById("copyMessage").innerHTML = "&nbsp;";
}

function toggleOutlines() {
  for (let tag of allElements) {
    outline
      ? (tag.style.border = "none")
      : (tag.style.border = "1px solid darkcyan");
  }
  outline ? (outline = false) : (outline = true);
}
