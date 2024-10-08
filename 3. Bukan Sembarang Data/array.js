// Perkenalan dengan Array
const array = [1, 2];
console.log(typeof array); // Output: object

/* 
    Perbedaan antara Array dan Object adalah
    pada posisi urutan datanya, yang mana
    pada Array lebih terurut, tapi pada dasarnya
    Array adalah object yang memiliki urutan saja.

    Versi lebih rapinya kalo boleh dibilang.
*/

// Penulisan Array
const nama = ["Sarif", "Gibran", "Anies", "Jokowi", "Mahfud"];

console.log(nama);
console.log(nama[0]);
console.log(nama[9]);

// Membuat Array menggunakan object constructor
// Menggunakan new Array()
const angka = new Array(1, 2, 3);
console.log(angka);
const campur = new Array("Sarif", 1, false);
console.log(campur);

// Menggunakan Array.from
const ejaNama = Array.from("Sarif");
console.log(ejaNama);
const userName = new Array("Sarif", "Joko", "Anies");
const customer = Array.from(userName);
console.log(customer);

// Menggunakan Array literal
const namaBuah = ["Mangga", "Jeruk", "Nanas"];
console.log(namaBuah);

// Memanggil data di dalam Array
console.log(namaBuah[0]);
console.log(namaBuah[1]);

// Mengubah data di dalam Array
namaBuah[0] = "Apel";
console.log(namaBuah);
namaBuah[1] = "Bengkoang";
console.log(namaBuah[1]);

// Menambah data di dalam Array menggunakan push
namaBuah.push("Durian");
console.log(namaBuah);

// Menghapus data di dalam Array
delete namaBuah[1];
console.log(namaBuah);

namaBuah.splice(1, 1);
console.log(namaBuah);
namaBuah.splice(1, 2);
console.log(namaBuah);

// Menghapus menggunakan shift dan pop
const namaHewan = new Array("Kucing", "Anjing", "Burung", "Ikan");
namaHewan.shift();
console.log(namaHewan);
const namaBurung = new Array("Merpati", "Elang", "Burung Hantu");
namaBurung.pop();
console.log(namaBurung);

// Array destructuring
const kata = ["Halo", "Hai", "Morning"];
const [salam, sapaan, waktu] = kata;
console.log(salam);
console.log(sapaan);

// Array method reverse
const namaKota = ["Batam", "Jakarta", "Padang", "Tangerang"];
namaKota.reverse();
console.log(namaKota);

// Array method sort
const namaNegara = ["Indonesia", "Malaysia", "Singapura", "Thailand"];
namaNegara.sort();
console.log(namaNegara);
