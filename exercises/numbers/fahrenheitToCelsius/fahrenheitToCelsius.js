/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {
  // This is your job. :).
  return ((temp-32)*(5/9));
}

if (require.main === module) {
  console.log('Running sanity checks for fahrenheitToCelsius:');
console.log(fahrenheitToCelsius(10));
  // Your sanity checks go here. // collab with Tsega-ab and Kevin
}

module.exports = fahrenheitToCelsius;
