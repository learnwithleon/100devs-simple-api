//The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

function century(year) {
  if ((year <= 99) && (year > 0)) {
    return 1
  } else if (year > 0 && (year % 100 === 0)) { 
    strCentury = String(year).slice(0,-2)
    return Number(strCentury);
  } else if (year > 0) { 
    let yearString = String(year);
    let yearStringSmol = yearString.slice(0, -2);
    let yearCentury = Number(yearStringSmol) + 1;
    return yearCentury;
  } else {
    return "Please select a positive integer greater than 0"
  }
}

//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
switch (operation) {
  case ('+'):
    return value1 + value2
    break;
  case ('-'):
    return value1 - value2
    break;
  case ('*'):
    return value1 * value2
    break;
  case ('/'):
    if (value2 > 0 || value2 < 0) {
    return value1 / value2
    } else {
    return "Please select a second value greater than or less than 0"
    }
    break;
  default:
    break;
}
}

//Given an integral number, determine if it's a square number:
var isSquare = function(n){
  if ((n >= 0) && (Number.isInteger(Math.sqrt(n)) === true)) {
  return true;
} else {
  return false;
  }
}

// Write a function "greet" that returns "hello world!"
const greet = () => "hello world!";


//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time/2);
}

//Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
function sumStr(a,b) {
 if ((!a && !b) || ((a === "") && (b === ""))) {
    return "0"
 } else if ((!a) || (a === "")) {
    return b.toString()
  } else if ((!b) || (b === "")) {
    return a.toString();
  } else {
  let nums = (parseInt(a) + parseInt(b))
  return nums.toString()
 }
}

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
function summation(num) {
    sum = 0
for(let start = 1; start <= num; start++) {
    sum += start;
} return sum;
}

//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(string) {
  let midArrStr = string.split('').length / 2;
  if (midArrStr % 1 !== 0) {
    return string.charAt(Math.floor(midArrStr));
  } else {
    return string.charAt(Math.floor(midArrStr - 1)) + string.charAt(Math.floor(midArrStr));
  }
}

//We need a function that can transform a string into a number. What ways of achieving this do you know?
//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
var stringToNumber = str => parseInt(str);