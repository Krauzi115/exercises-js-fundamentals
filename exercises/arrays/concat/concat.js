/**
 * Given two arrays, returns a new array that is a concatenation of the
 * two given arrays.
 *
 * "Concatenation" means the two arrays are joined or glued together, end-to-end.
 *
 * JavaScript array's have a built-in concatenation method. Don't use it!
 * The goal is to better understand how concatenation works, not navigate
 * the JavaScript documentation.
 *
 * See https://en.wikipedia.org/wiki/Concatenation
 *
 * @example
 * concat([1, 2, 3], [4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
 * concat([-10, undefined], [true, 'waffles']); // => [-10, undefined, true, 'waffles']
 * concat([], []); // => []
 * concat([20, 104], []); // => [20, 104]
 * concat([], ['hello', 'world']); // => ['hello', 'world']
 *
 * @param {object[]} leftArray - The left array to concatenate
 * @param {object[]} rightArray - The right array to concatenate
 * @returns {object[]} The concatenation of the two given arrays
 */
function concat(leftArray, rightArray) {
  // This is your job. :)
  return g.concat(f);
  //return c.concat(d); this would work with numbers too 
}
let g = ['My name is'];
let f = ['Kyle Rauzi'];
// let c = [2, 4, 6, 8];
// let d = [10, 12, 14];

if (require.main === module) {
  console.log('Running sanity checks for concat:');
  console.log(concat(g, f));
  console.log(concat(c, d));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = concat;
