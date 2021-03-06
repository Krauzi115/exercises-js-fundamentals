/**
 * Given an array and an element, return a new array with all instances of the
 * given element removed.
 *
 * @example
 * removeElement([1, 1, 1], 1); // => []
 * removeElement([1, 2, 1], 1); // => [2]
 * removeElement(['one', 'two', 'three'], 'two'); // => ['one', 'three']
 * removeElement(['Jesse', undefined, 'Farmer'], undefined); // => ['Jesse', 'Farmer']
 *
 * @param {object[]} array - An array
 * @param {object} element - An element to remove
 * @returns {object[]} A copy of the input array with all instances of the given
 *   element removed.
 */
function removeElement(array, element) {
  // This is your job. :)
  for (i = 0; i<lucky.length; i++) {
    if (lucky[i]=== 9){
       lucky.splice(i, 1);
    }
  }
  return lucky;
}
let lucky = [5, 9, 2, 0];
if (require.main === module) {
  console.log('Running sanity checks for removeElement:');
  console.log(removeElement([5, 9, 2, 0], 9));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = removeElement;
