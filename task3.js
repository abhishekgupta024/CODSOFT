const display = document.querySelector('.display p');
const buttons = Array.from(document.querySelectorAll('.buttons button'));
let currentNumber = '';
let operator = null;

function appendNumber(number) {
  currentNumber += number;
  display.textContent = currentNumber;
}

function setOperator(op) {
  if (operator || currentNumber === '') return;
  operator = op;
  currentNumber += ' ' + operator + ' ';
  display.textContent = currentNumber;
}

function calculateResult() {
  try {
    const result = eval(currentNumber);
    display.textContent = result;
    currentNumber = '' + result;
    operator = null;
  } catch {
    display.textContent = 'Error';
    currentNumber = '';
    operator = null;
  }
}

function clearDisplay() {
  currentNumber = '';
  operator = null;
  display.textContent = '';
}

for (const button of buttons) {
  button.addEventListener('click', e => {
    const buttonText = e.target.innerText;
    if (e.target.classList.contains('numeric')) {
      appendNumber(buttonText);
    } else if (e.target.classList.contains('operator')) {
      setOperator(buttonText);
    } else if (buttonText === 'C') {
      clearDisplay();
    } else if (buttonText === '=') {
      calculateResult();
    }
  });
}
