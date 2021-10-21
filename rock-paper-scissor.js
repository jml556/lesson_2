const readline = require('readline-sync')

let scoreCount = 0;
let userChoice = '';
let keepPlaying;
let roundsPlayed = 0;

function chooseHand() {
  const randomNum = Math.ceil(Math.random() * 3)
  switch(randomNum) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissor';
  }
}

function yesOrNo(res) {
  let response = res.trim().toLowerCase();
  let value = response === 'yes' ? true : false
  if(value == false) console.log('Awww')
  return response
}

function checkIfValid(string) {
  switch(string) {
    case 'rock':
      return true;
    case 'scissors':
      return true;
    case 'paper':
      return true;
    default:
      return false;
  }
}

console.log('Do you want to play rock paper scissors? Yes or No?')
keepPlaying = yesOrNo(readline.question())

while(keepPlaying) {
  const computerChoice = chooseHand()
  
  console.log('rock, paper, or scissors?')
  userChoice = readline.question().trim().toLowerCase()

  if(!checkIfValid(userChoice)) {
    console.log('You need to enter a valid option and restart')
    break;
  }

  if((userChoice == 'rock' && computerChoice == 'rock') || 
    (userChoice == 'scissors' && computerChoice == 'scissors') || 
    (userChoice == 'paper' && computerChoice == 'paper')) {
    roundsPlayed++;
    console.log('Wow you tied!');
    console.log('Play again?')
    keepPlaying = yesOrNo(readline.question())
    if(!keepPlaying) break;
  }
}

