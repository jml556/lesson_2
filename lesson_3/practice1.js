/*
let str1 = "Come over here!asd!";

function checkString(str) {
  if(str.slice([str.length - 1]) === '!') {
    return true
  }
  return false
}
*/

/*
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 , Spot: 12};
(Object.keys(ages).includes('Spot'))
*/

/*
let munstersDescription = "the Munsters are CREEPY and Spooky.";
console.log(munstersDescription[0].toUpperCase() + munstersDescription.toLowerCase().slice(1))
*/

/*
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

for(let prop in additionalAges) {
  ages[prop] = additionalAges[prop]
}

console.log(ages)
*/

/*

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function checkForDino(str) {
  if(str.includes('Dino')) return true;
  return false
}

console.log(checkForDino(str1), checkForDino(str2))

*/

/*
let advice = "Few things in life are as important as house training your pet dinosaur.";

function removeString(str, word) {
  return advice.substring(0, (str.indexOf(word)))
}

console.log(removeString(advice, 'house'))
*/