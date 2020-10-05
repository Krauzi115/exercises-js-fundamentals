/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  // This is your job. :)
  var target = string.split(" ");
  var longest = 0;
  for(var i=0; i < target.length; i++){
    if(longest < target[i].length){
      longest=target[i].length;
      word=target[i];
    }
  }
  return word;
  
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord('Craig Mack was so underrated'));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longestWord;