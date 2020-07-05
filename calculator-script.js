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
  return /^[01]$/.test(value);
});
