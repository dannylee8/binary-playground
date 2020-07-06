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

function calculateDecimal(num) {
  return parseInt(num, 2);
}

function calculateSum() {
  dSum.innerHTML = decimalNumber1 + decimalNumber2;
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
