const readline = require('readline-sync');

let firstNum;
let secondNum;
let operation;
let answer;
let calculatedNum

function checkIfNum(num) {
  return Number.isNaN(Number(num))
}

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

console.log('--> Welcome to the Calculator');
console.log('--> What is the first number?');

firstNum = readline.question()

while (checkIfNum(firstNum)) {
  console.log('please enter a valid number')
  firstNum = readline.question()
}

console.log('--> What is the second number?');
secondNum = parseInt(readline.question(), 10);

console.log('--> What operation would you like to perform?');
operation = readline.question().toLowerCase();

console.log(`--> These are the numbers and operation you have selected: ${firstNum}, ${secondNum}, ${operation}. \n--> Would you like to change anything? \n--> Yes or No?`)

answer = readline.question()

if(answer === 'yes') {
  calculatedNum = getNum(operation, firstNum, secondNum);
  console.log(answer);
}
else {
  console.log('What woukd you like to change? \nThe operation, first number, or the second number?')
}
