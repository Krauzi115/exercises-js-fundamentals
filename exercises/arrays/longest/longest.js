/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  let max = array[0].length; // max equals longest element in array starting at point zero. Length returns length 
  array.map(v => max = Math.max(max, v.length)); // renders list elements, calls the function on each, => retains map function, applies it to max
  result = array.filter(v => v.length == max); // filter creates new array with the element(s) that have passed the test of the function
  return result;
  // This is your job. :)
}


if (require.main === module) {
  console.log('Running sanity checks for longest:');
  console.log(longest(['bubble', 'rat', 'apple']));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longest;
