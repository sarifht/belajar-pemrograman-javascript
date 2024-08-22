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
