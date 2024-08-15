// Function didalam sebuah variabel
const convertCelsiusToFahrenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

const temperatureInCelsius = convertCelsiusToFahrenheit(100);
console.log("Hasil konversi:", temperatureInCelsius);

// First-Class Citizen
function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);
/* Output:
  8
*/

// Mengembalikan nilai function dari sebuah function
function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));
/* Output:
  20
  33
*/
