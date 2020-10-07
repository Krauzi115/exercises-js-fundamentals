/**
 * Given an input string, returns a copy of the string in title case.
 *
 * For our purposes, title case is words separated by spaces with the
 * first letter of each word being capitalized and every other letter
 * being lowercsae.
 *
 * Don't do anything special with non-alphabetic characters (numbers,
 * puncuation, etc.). Don't worry about special rules like not capializing
 * definite articles (a, an, the, etc).
 *
 * @example
 * toTitleCase('wElCoMe to THE wILD wiLD WEST!'); // => 'Welcome To The Wild Wild West!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toTitleCase(string) {
  // This is your job. :)
  return string.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

if (require.main === module) {
  console.log('Running sanity checks for toTitleCase:');
console.log(toTitleCase('Anybody else getting this?'));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = toTitleCase;
