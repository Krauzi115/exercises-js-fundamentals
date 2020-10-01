/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */
function sum(array) {
  var sum = 0;
  for (i = 0; i<array.length; i++){
    sum+=array[i];
}
  return sum;

}
var numbers = [1, 2, 3];
if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log(sum(numbers));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
