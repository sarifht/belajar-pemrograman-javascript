// If statement sederhana

const nilaiBagus = 80;

if (nilaiBagus > 70) {
  console.log("Selamat kamu lulus");
}
console.log("Program selesai");

const nilaiJelek = 50;
if (nilaiJelek > 70) {
  console.log("Selamat kamu lulus");
} else {
  console.log("Maaf kamu belum lulus");
}
console.log("Program selesai");

// Menggunakan if else
const nilai = 75;

if (nilai >= 80) {
  console.log("Selamat, nilai Kamu A");
} else if (nilai >= 70) {
  console.log("Selamat, nilai kamu B");
} else {
  console.log("Kamu mendapat nilai C");
}

// Shortcut untuk if else
const anggota = 12;
const teamFootball = false;
const jumlah = teamFootball ? 0 : -1;
console.log(`Jumlah anggota tim adalah ${anggota + jumlah}`);

// Kodingan dari Dicoding
const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

// Contoh kondisi double
console.log("");
const cuaca = "hujan";
if (cuaca === "hujan") {
  console.log("Jangan lupa pakai payung");
}

const payung = "ada";
if (payung === "tidak ada") {
  console.log("Kamu akan kehujanan");
}

if (cuaca === "hujan" && payung === "tidak ada") {
  console.log("Hahaha mampus");
}

console.log("program selesai");
