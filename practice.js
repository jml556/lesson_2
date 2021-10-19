const readline = require('readline-sync')

let numMaxArr = []

function returnArray(item) {
  const split = item.split('')
  if(split.includes('[')) {
    return item.slice(1)
  }
  if(split.includes(']')) {
    return item.slice(0, 1)
  }
  return item
}

function checkIfNum(num) {
  return (Number.isNaN(Number(num)))
}

function getMax(arr) {
  let i = 0;
  let max= arr[0];
  while(i < arr.length) {
    if(arr[i] > max) {
      max = arr[i]
    }
    i++
  }
  return max
}

console.log('Enter collection')

let arr = readline.question()
  .split(',')
  .map(item => returnArray(item))
  .map(item => Number(item))

numMaxArr.push(getMax(arr))

console.log(`You're maximum in the current array is ${getMax(arr)}`)

console.log('Would you like to enter another array? y or n')
let answer = readline.question().toLowerCase()

if(answer === 'y') {
  console.log('Enter array now')
  let newArr = readline.question()
  .split(',')
  .map(item => returnArray(item))
  .map(item => Number(item))
  console.log(`You're maximum in the current array is ${getMax(newArr)}`)
  numMaxArr.push(getMax(newArr))
  console.log(`And you\'re current max num array is ${numMaxArr}`)
}
else {
  console.log('Wow you suck')
}
