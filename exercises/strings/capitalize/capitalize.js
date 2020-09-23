/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(string) {
  console.log(string[0].toUpperCase()+ sentence.slice(1)); // This is your job. :)

}
const sentence = 'first example towards javascript.'; // All caps example
console.log(sentence.toUpperCase());
capitalize(sentence)
console.log(sentence.slice(1));// collab with Kevin, Tsega-ab, and Trey




if (require.main === module) {
  console.log('Running sanity checks for capitalize:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = capitalize;
