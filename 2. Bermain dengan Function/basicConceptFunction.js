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

convertCelsiusToFahrenheit(100);
/* Output:
Hasil konversi: 194
*/

// Hanya akan menampilan Function saja
console.log(convertCelsiusToFahrenheit);
/* Output:
[Function: convertCelsiusToFahrenheit]
*/

// Menampilkan hasil Function
const temperature = 80;
convertCelsiusToFahrenheit(temperature);
/* Output:
Hasil konversi: 176
*/

// Menampilkan isian Function yang lain
function greetings(name) {
  console.log("Halo, nama saya " + name);
}

greetings("Joko");
greetings("Sarif");
greetings("Anies");
greetings("Mahfud");

// Kondisi jika Function tidak memiliki parameter
function angka() {
  console.log(angka);
}
angka();

//  Kondisi parameter ada dalam variabel dan tidak terisi
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log("Hasil konversi:", temperatureInFahrenheit);
}

convertCelsiusToFahrenheit();
/* Output:
Hasil konversi: NaN
*/
