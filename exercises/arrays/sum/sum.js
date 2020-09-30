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
  let g = [5, 6, 7, 8];
  g.reduce((x, y)=> x+y, 0 );
  g.reduce(array)
  // This is your job. :)
   // pg 168 JS Definitive guide
  // let sumOfArray = array[0];
  // let g = [1, 2, 3, 4];
  // g.map(x => x+x)
  // if (element = sumOfArray) {
  //   sumOfArray > element;
  // }
  // return sumOfArray;
  return array
}
// another possible method. 
let g = [5, 6, 7, 8];
  g.reduce((x, y)=> x+y, 0 );
  g.reduce(array)
if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log(array([5, 6, 7, 8]));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
