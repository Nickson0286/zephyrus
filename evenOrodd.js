/**
 *
 * @param {number} num
 * @returns
 */

/**
 * pseudo
 * 1. check if num is a number or string
 * 2. use % 2 to check if num is even or odd
 */

function evenOrOdd(num) {
  //check if num is number or string
  if (typeof num !== "number") return "Please enter a number";
  //check if num is even or odd
  return num % 2 === 0 ? "Even" : "Odd";
}
