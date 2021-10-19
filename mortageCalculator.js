const readline = require('readline-sync');

//variables asked for from the user
let loanAmount;
let yearlyApr;
let loanDurationDays;

//variables calculated from user provided information
let monthlyRate; 
let loanDurationMonths;
let monthlyPayment

//function to calculate monthly payment
function getMonthlyPayment(loanAmount, monthlyInterest, loanDurationMonths) {
  return (loanAmount * (monthlyInterest / (1 - (1 + monthlyInterest) ** -loanDurationMonths))).toFixed(2);
}

//dollars are in number type
console.log('Loan amount in dollars?');
loanAmount = parseFloat(readline.question());

//apr is divided by 100 to get a decimal value
console.log('What is your APY in percentage value?');
yearlyApr = parseFloat(readline.question()) / 100;

//converts the number of days to months
console.log('What is the loan duration in days?');
loanDurationDays = parseFloat(readline.question());

//calculated the amount of months by dividing by the average of days in a month for the Gregorian Calendar
loanDurationMonths = loanDurationDays / 30.436875;

//monthly rate = the apr in percentage divided by the duration in months. This number is saved as a decimal
monthlyRate = (yearlyApr / 12);

monthlyPayment = getMonthlyPayment(loanAmount, monthlyRate, loanDurationMonths);

console.log(`You're monthly playment has been calculated. It is $${monthlyPayment}`);