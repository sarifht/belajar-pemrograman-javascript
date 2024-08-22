// Kondisi tanpa looping
const makanan = ["Nasi Goreng", "Mie Ayam", "Bakso", "Soto"];
// console.log(makanan[0]);
// console.log(makanan[1]);
// console.log(makanan[2]);
// console.log(makanan[3]);

// Mencoba looping -> for
for (let i = 0; i < makanan.length; i++) {
  console.log(makanan[i]);
}

// Kodingan for loop
for (let i = 0; i < 5; i++) {
  console.log(`Angka ke-${i} adalah ${i}`);
}

// Kodingan for in
console.log("");
const person = { name: "Sarif", origin: "Banten", birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

console.log("");
const namaOrang = { nama1: "Sarif", nama2: "Anies", nama3: "Joko" };
for (const panggilan in namaOrang) {
  console.log(`Halo nama saya ${namaOrang[panggilan]}`);
}

// Kodingan for of
console.log("");
const names = ["Bebek", "Ayam", "Telor", "Tempe"];

for (const item of names) {
  console.log(item);
}
