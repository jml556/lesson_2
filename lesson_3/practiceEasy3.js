
/*
let numbers = [1, 2, 3, 4];


while(numbers.length) {
  console.log(numbers);
  numbers.pop()
}
console.log(numbers)
*/
/*
const checkColor = () => {
  return color === "blue" || color === "green" ? true : false
}

*/

/*
let string = 'The Flintstones Rock!'

function repeatString(string, num) {
  let space = ''
  for(let i = 0; i < num; i++) {
    console.log(space + string)
    space += ' '
  }
}

repeatString(string, 10)
*/

/*

let munstersDescription = "The Munsters are creepy and spooky.";

munstersDescription.split('').map(item => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
).join('')

*/
/*
function factors(number) {
  if(number === 0) return 'NO 0'
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0 && divisor > 0);
  return factors;
}

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8, newAnswer);

let arr = [1,2,3,4]


let newArr = arr

newArr.push(5)


console.log(arr, newArr)
*/

/*
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = "one";
let two = "two";
let three = "three";

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);  
*/
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if(dotSeparatedWords.length !== 4) return false
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('4.124.266.24'))