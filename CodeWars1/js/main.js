/*

1. We need a function that can transform a number into a string.

What ways of achieving this do you know? */

function numberToString(num) {
    // Return a string of the number here!
    return num.toString()
  }
  
  
  /*
  
  2. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */
  
  function boolToWord( bool ){
    if(bool === true){
      return 'yes'
    } else {
      return 'no'
    }
  }
  
  // Much simpler solution
  
  /* function boolToWord( bool ){
    return bool ? 'Yes':'No';
  } 
  */
  
  
  /* 
  3. Given an array of integers your solution should find the smallest integer.
  
  For example:
  
  Given [34, 15, 88, 2] your solution will return 2
  Given [34, -345, -1, 100] your solution will return -345
  You can assume, for the purpose of this kata, that the supplied array will not be empty. */
  
  let arraySmallest = [3, 44, 21, 94, -103];
  
   function findSmallestInt(args) {
      return Math.min(...args)
    }
  
  
  /*
  
  4. Simple, remove the spaces from the string, then return the resultant string. */
  
  function noSpace(x){
    return x.replace(/\s+/g, '');
  }
  
  /*
  
  5. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */
    function summation(num) {
      let sum = 0
      for(i = 1; i <= num; i++){
         sum += i;
      }
        return sum;
  }
  
  
  
  /* Much easier way to answer
    function summation(num){
      return num * (num + 1) / 2;
    }
  
  */