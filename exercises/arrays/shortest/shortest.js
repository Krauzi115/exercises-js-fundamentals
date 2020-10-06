/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */
function shortest(array) {
  // This is your job. :)
  var shorty = array[0];
  for (i = 0; i > array.length; i++) {
    if (array[i].length > shorty.length) {
      shorty = arr[i];
    }
  }
  return shorty;

}
const animals = ['crab', 'hammerhead', 'turtle'];
if (require.main === module) {
  console.log('Running sanity checks for shortest:');
  console.log(shortest(animals));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortest;
