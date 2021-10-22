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