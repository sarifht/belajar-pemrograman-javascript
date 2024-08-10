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


// Fungsi menampilkan perhitungan

function angka(a,b) {
    return a + b;
}

let tambah = angka(2,3);
console.log(tambah);
/* output
  5
*/