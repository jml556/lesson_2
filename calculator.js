const readline = require('readline-sync');
let firstNum;

function checkIfNum(num) {
  return Number.isNaN(Number(num))
}

console.log('Welcome to the Calculator');

console.log('What is the first number?');
firstNum = readline.question()
while (checkIfNum(firstNum)) {
  console.log('please enter a valid number')
  firstNum = readline.question()
}

console.log('What is the second number?');
let secondNum = parseInt(readline.question(), 10);

console.log('What operation would you like to perform?');
let operation = readline.question().toLowerCase();

function getNum(operation, firstNum, secondNum) {
  switch (operation) {
    case 'sum':
      return firstNum + secondNum;
    case 'subtract':
      return firstNum - secondNum;
    case 'divide':
      return firstNum / secondNum;
    case 'multiply':
      return firstNum * secondNum;
    default:
      return ('No valid operation available');
  }
}

let answer = getNum(operation, firstNum, secondNum);

console.log(answer);