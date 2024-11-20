/**
 * @param {string}
 * @return {string}
 */

/**
 * pseudo
 * 1. use split() to convert the string to an array
 * 2. use reverse() to reverse the array
 * 3. use join() to convert the array back to a string
 *  */

function reverseString(str) {
  // Check if the input is a string and not null or undefined
  if (!str) return str;
  return str.split("").reverse().join("");
}
