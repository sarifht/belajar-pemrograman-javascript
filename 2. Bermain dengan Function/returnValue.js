// Tanpa return
const greetings = console.log("JavaScript keren!");
console.log(greetings);
/* Output:
JavaScript keren!
undefined
*/

// Menggunakan return
function sumNumber(a, b) {
  hasil = a + b;
  console.log(`${a}` + " x " + `${b}` + " = " + `${hasil}`);
  return hasil;
}

sumNumber(2, 3);
