// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Because the num variable is in global scope, the function getLastDigit() always use the (num variable),
// no matter what number you pass into it in console.log argument. so it always print the last digit of 103.

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// Because the num variable is in global scope, the function getLastDigit() always use the (num variable),
// no matter what number you pass into it in console.log argument. so it always print the last digit of 103.
// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
