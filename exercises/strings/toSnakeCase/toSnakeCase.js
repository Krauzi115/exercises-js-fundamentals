/**
 * Given an input string, returns a copy of the string in snake case.
 *
 * In snake case, every letter is lowercase and spaces are replaced
 * with underscores.
 *
 * See https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * toSnakeCase('HeLlo fRIENds'); // => 'hello_friends'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A snake-case copy of the input string
 */

function toSnakeCase(string) {
  // This is your job. :)
  const string = 'JavaScript is like a baby';
  const toSnakeCase = (str = '') => {
     const stringCog = str.split(' ');
     const snakeArr = stringCog.reduce((acc, val) => {
        return acc.concat(val.toLowerCase());
     }, []);
     return snakeArr.join('_');
  };
  console.log(toSnakeCase(string));
  // okay I really had a hard time finding a resource that talked about this.
  //I understand that you have to break the string into subsections/substrings
  //and use the reduce method to reduce the string to a single value while performing the split function, 

}
const str = 'JavaScipt is like a baby';
if (require.main === module) {
  console.log('Running sanity checks for toSnakeCase:');
  console.log(toSnakeCase(string));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = toSnakeCase;
