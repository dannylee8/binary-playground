v1 = document.getElementById("value1");
v2 = document.getElementById("value2");
d1 = document.getElementById("decimal1");
d2 = document.getElementById("decimal2");
dSum = document.getElementById("decimal-sum");
bSum = document.getElementById("binary-sum");
bd1 = document.getElementById("binary-display1");
bd2 = document.getElementById("binary-display2");

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

function sumBinary() {
  let b1 = binaryNumber1;
  let b2 = binaryNumber2;

  if (checkBinaryInputs()) {
    return 1;
  }
  // console.log(b1.split("").pop());
}

function calculateSum() {
  dSum.innerHTML = decimalNumber1 + decimalNumber2;
  bSum.innerHTML = sumBinary();
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
