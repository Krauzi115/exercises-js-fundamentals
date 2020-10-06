/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
 
  // This is your job. :)
  var longer = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i].length > longer.length) {
      longer = arr[i];
    }
  }
  return longer;
}
const collection = ['bubble', 'rat', 'apple'];

if (require.main === module) {
  console.log('Running sanity checks for longest:');
  console.log(longest(collection));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longest;
