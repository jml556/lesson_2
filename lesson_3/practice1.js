let str1 = "Come over here!asd!";

function checkString(str) {
  if(str.slice([str.length - 1]) === '!') {
    return true
  }
  return false
}

console.log(checkString(str1))