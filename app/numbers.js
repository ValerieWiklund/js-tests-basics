// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
  return x + y
}

// Write a function that returns the Cubed value of x
function cubed(x) {
  return Math.pow(x, 3);

}

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(x, y) {
  return Math.floor(x / y);
}

// Write a function that takes in a number and determines if it is even. 
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
  return num % 2 == 0;

}


// Given 2 numbers, generate a random number within that range. 
// Make it inclusive so that the starting and ending numbers are part 
// of the range.HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(num1, num2) {
  // let min;
  // let max;
  // if (num1 < num2) {
  //   min = num1;
  //   max = num2;
  // } else {
  //   min = num2;
  //   max = num1;
  // }

  return Math.floor((Math.random() * (Math.abs(num1 - num2) + 1) + Math.min(num1, num2)));
}