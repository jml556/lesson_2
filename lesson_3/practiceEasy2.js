/* 
Solves recursively the problem of replacing words in a string
let advice = "Few things in life are as important as house training your pet dinosaur.";

function changeWord(string, word, replaceWord) {
  if(!string.includes(word)) {
    return string
  }
  else {
    return changeWord(string.replace(word, replaceWord), word, replaceWord)
  }
}
*/
/*
let number = [1,2,3,4,5,6]

let a = number.slice().reverse()

console.log(...number)

*/

/*
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

if(numbers.includes(1)) {
  console.log(true)
}
*/

/*
let famousWords = "seven years ago...";

const arr = famousWords.split(' ')
arr.unshift('four score and')
console.log(arr.join(' '))
*/
/*

let arr = [1, 2, 3, 4, 5]

arr.splice(1,1)

console.log(arr)
*/

/*
let arr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

const newArr = [arr[0], arr[1], ...arr[2], ...arr[3]]

function flatten(arr) {
  let flatArr = []
  arr.forEach(item => {
    flatArr = flatArr.concat(item)
  })
  return flatArr
}

console.log(flatten(arr))
*/

/*
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
const barney = Object.keys(flintstones)

const arr = [barney[barney.indexOf('Barney')], flintstones.Barney]

function createArr(obj, val) {
  const arr = []
  for(const prop in obj) {
    if(prop === val) {
      arr.push(prop, obj[prop])
    }
  }
  return arr
}

console.log(createArr(flintstones, 'Betty'))
*/


let statement1 = "The Flintstones Rock!".toLowerCase().split('').reduce((acc, item) => {if(item === 'f'){return acc += 1} return acc} ,0)

console.log(statement1)
let statement2 = "Easy come, easy go.";