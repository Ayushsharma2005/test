let display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += ' ' + operator + ' ';
}

function appendDot() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let result = eval(display.value.replace('%', '/100').replace('^', '**'));
    display.value = result;
  } catch (e) {
    display.value = 'Error';
  }
}
