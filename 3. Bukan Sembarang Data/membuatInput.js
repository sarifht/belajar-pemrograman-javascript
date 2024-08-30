const readline = require("readline");

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menanyakan input ke pengguna
rl.question("Masukkan sesuatu: ", (input) => {
  // Menampilkan input pengguna di console
  console.log(`Kamu memasukkan: ${input}`);

  // Menutup interface readline
  rl.close();
});
