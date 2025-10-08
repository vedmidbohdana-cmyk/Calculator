// 
const display = document.getElementById('display');
// 
const buttons = document.querySelectorAll('.btn');

let currentInput = '';  // 
let prevInput = '';     // 
let operator = '';      // 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    
    if (value === 'C') {
      // 
      currentInput = '';
      prevInput = '';
      operator = '';
      display.textContent = '0';
    } else if (value === '=') {
      // 
      if (prevInput !== '' && currentInput !== '') {
        currentInput = calculate(prevInput, currentInput, operator);
        display.textContent = currentInput;
        prevInput = '';
        operator = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      // 
      if (currentInput === '') return;
      if (prevInput === '') {
        prevInput = currentInput;
        currentInput = '';
      } else {
        prevInput = calculate(prevInput, currentInput, operator);
        display.textContent = prevInput;
        currentInput = '';
      }
      operator = value;
    } else {
      //
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

function calculate(prev, curr, op) {
  let result = 0;
  prev = parseFloat(prev);
  curr = parseFloat(curr);
  
  switch (op) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      if (curr === 0) {
      alert("На 0 не можна ділити!");
        return '0';
      }
      result = prev / curr;
      break;
    default:
      return 0;
  }
  
  return result.toString();
}