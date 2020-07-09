let allElements = document.getElementsByTagName("*");
let outline = false;

let v1 = document.getElementById("value1");
let v2 = document.getElementById("value2");
let d1 = document.getElementById("decimal-display1");
let d2 = document.getElementById("decimal-display2");
let dSum = document.getElementById("decimal-sum");
let bSum = document.getElementById("binary-sum");
let bd1 = document.getElementById("binary-display1");
let bd2 = document.getElementById("binary-display2");

v1.addEventListener("change", handleV1);
v2.addEventListener("change", handleV2);

let decimalNumber1 = 0;
let decimalNumber2 = 0;
let binaryNumber1 = 0;
let binaryNumber2 = 0;

function handleV1(e) {
  decimalNumber1 = calculateDecimal(e.target.value);
  d1.innerHTML = decimalNumber1;

  binaryNumber1 = e.target.value;
  bd1.innerHTML = binaryNumber1;
}

function handleV2(e) {
  decimalNumber2 = calculateDecimal(e.target.value);
  d2.innerHTML = decimalNumber2;

  binaryNumber2 = e.target.value;
  bd2.innerHTML = binaryNumber2;
}

function clearInputs() {
  v1.value = "";
  v2.value = "";
  d1.innerHTML = "0";
  d2.innerHTML = "0";
  bd1.innerHTML = "0";
  bd2.innerHTML = "0";
  bSum.innerHTML = "0";
  dSum.innerHTML = "0";
  decimalNumber1 = 0;
  decimalNumber2 = 0;
  binaryNumber1 = 0;
  binaryNumber2 = 0;
}

function calculateDecimal(num) {
  return parseInt(num, 2);
}

function checkBinaryInputs() {
  let b1 = binaryNumber1;
  let b2 = binaryNumber2;

  if (!b1 || !b2) {
    clearInputs();
    alert("Please provide two binary numbers.");
  } else {
    if (b1.length > b2.length) {
      b2 = b2.toString().padStart(b1.length, "0");
      bd2.innerHTML = b2;
    } else {
      b1 = b1.toString().padStart(b2.length, "0");
      bd1.innerHTML = b1;
    }
    return true;
  }
}

function halfAdder(a, b) {
  const sum = a ^ b;
  const carry = a & b;
  return [sum, carry];
}

function fullAdder(a, b, carry) {
  halfAdd = halfAdder(a, b);
  const sum = carry ^ halfAdd[0];
  carry = carry & halfAdd[0];
  carry = carry | halfAdd[1];
  return [sum, carry];
}

function addBinary(a, b) {
  let sum = "";
  let carry = "";

  for (let i = a.length - 1; i >= 0; i--) {
    if (i == a.length - 1) {
      const halfAdd = halfAdder(a[i], b[i]);
      sum = halfAdd[0] + sum;
      carry = halfAdd[1];
    } else {
      const fullAdd = fullAdder(a[i], b[i], carry);
      sum = fullAdd[0] + sum;
      carry = fullAdd[1];
    }
  }
  return carry ? carry + sum : sum;
}

function calculateBinary() {
  if (checkBinaryInputs()) {
    let b1 = bd1.innerHTML;
    let b2 = bd2.innerHTML;

    return addBinary(b1, b2);
  }
}

function calculateSum() {
  dSum.innerHTML = decimalNumber1 + decimalNumber2;
  bSum.innerHTML = calculateBinary() || 0;
}

function toggleOutlines() {
  for (let tag of allElements) {
    outline
      ? (tag.style.border = "none")
      : (tag.style.border = "1px solid darkcyan");
  }
  outline ? (outline = false) : (outline = true);
}

// https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input
function setInputFilter(textbox, inputFilter) {
  ["input"].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
        number = 0;
        decimalEle.value = "";
        updateCalcs();
      }
    });
  });
}

setInputFilter(document.getElementById("value1"), function (value) {
  return /^[01]*$/.test(value);
});

setInputFilter(document.getElementById("value2"), function (value) {
  return /^[01]*$/.test(value);
});
