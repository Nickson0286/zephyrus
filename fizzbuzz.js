/**
 * @param {array|number}
 *
 */

/**
 * pseudo
 * 1. loop through numbers from 1 to 100
 * 2. if number can be divided by 3 and 5, print FizzBuzz
 * 3. if number can be divided by 3, print Fizz
 * 4. if number can be divided by 5, print Buzz
 */

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
