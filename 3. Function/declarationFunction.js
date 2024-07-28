// Deklarasi fungsi yang sederhana
function greeting() {
    console.log("Good Morning!")
  }
  
  greeting();
/* output
  Good Morning!
*/


// Fungsi dengan if-else statement
function sapaan(nama, bahasa) {
    if(bahasa === "Indonesia") {
        console.log('Selamat Pagi ' + nama + '!');
    } else if (bahasa === "English") {
        console.log(`Good Morning ${nama}!`);
    } else {
        console.log(`Kumaha damang ${nama}!`);
    }
}
  
sapaan("Sarif", "Indonesia");
/* output
  Bonjour Harry!
*/

