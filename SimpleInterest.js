const prompt = require('prompt-sync')();

let principal = parseFloat(prompt("Enter Principal amount: "));
let rate = parseFloat(prompt("Enter Rate of Interest: "));
let time = parseFloat(prompt("Enter Time (in years): "));

if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
  console.log("Please enter valid numeric values only!");
} else if (principal <= 0 || rate <= 0 || time <= 0) {
  console.log("Please enter positive numbers for Principal, Rate, and Time!");
} else {
  let simpleInterest = (principal * rate * time) / 100;
  console.log("Simple Interest = " + simpleInterest);
}

