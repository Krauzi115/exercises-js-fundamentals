/**
 * Given an array of integers, returns the count of even integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Even_number
 *
 * @example
 * countEvens([1, 2, 3, 4, 5]); // => 2
 * countEvens([10, 10, 10]); // => 3
 * countEvens([1, 1, 1, 2]); // => 2
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */
function countEvens(array) {
  // This is your job. :)
  var evenCount = 0;
  let target = [];
  for (i = 0; i<batch.length; i++){
    if ( batch[i] % 2 === 0){
      target.push(batch[i]);
    }
   
}
return target;
}
let batch = [2, 4, 6, 9];
if (require.main === module) {
  console.log('Running sanity checks for countEvens:');
  console.log(countEvens(batch));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countEvens;
