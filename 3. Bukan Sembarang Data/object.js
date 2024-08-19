// Kodingan dasar dari Object
const user = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};

console.log(user.name); // Output: Dicoding

// Mencoba membuat kodingan Object sendiri
const nama = {
  presiden: "Jokowi",
  anakPresiden: "Gibran",
  abah: "Anies",
  hasil: 17,
  namaDepan: "Sarif",
  namaBelakang: "Hidayatullah",
  Hewan: "",
};

console.log(nama);

// Memanggil data menggunakan square bracket
console.log(nama["Nama saya"]); // Output: Sarif
console.log(nama["anakPresiden"]); // Output: Gibran

// Memanggil data dengan cara Desctructuring
const { namaDepan, namaBelakang } = nama;
console.log(namaDepan, namaBelakang); // Output: Sarif Hidayatullah

// // Jika memanggil tanpa Desctructuring -> hilangkan komentar kode dibawah ini
// Berikan komentar pada kode Desctructuring di atas, lalu jalankan kode berikut:
// console.log("");
// const namaDepan = nama.namaDepan;
// const namaBelakang = nama.namaBelakang;
// console.log(namaDepan, namaBelakang); // Output: Sarif Hidayatullah

// Jika memanggil data yang tidak ada di Object
const hewan = { karnivora: "Singa" };
console.log(hewan.herbivora); // Output: undefined

// Mengubah nilai
console.log("");
const data = {
  namaPresiden: "Soekarno",
  rezim: "Soeharto",
};

console.log(data.namaPresiden); // Output: Soekarno

data.namaPresiden = "Jokowi";
console.log(data.namaPresiden); // Output: Jokowi

// Menghapus nilai
console.log("");

console.log(data);

delete data.rezim;
console.log(data);
