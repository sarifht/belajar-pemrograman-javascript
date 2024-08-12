// Implementasi Konversi Suhu tanpa Function
const temperatureInCelsius = 90;
const temperatureInFahrenheit = (9 / 5) * temperatureInCelsius + 32;

console.log("Hasil konversi:", temperatureInFahrenheit);
/* Output:
Hasil konversi: 194
*/

// Setelah menggunakan Function
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log("Hasil konversi:", temperatureInFahrenheit);
}

convertCelsiusToFahrenheit(90);
/* Output:
Hasil konversi: 194
*/
