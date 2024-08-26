// Membangkitkan pesan error
const error = new Error("Terjadi error");
console.error(error);

// Throwing error
const price = 100;
const paid = 80;

if (paid < price) {
  throw new Error("Pembayaran kurang");
}

// Catching error
try {
  console.log("Memulai program");
  throw new Error("Error: Program berhenti");
  console.log("Mengakhiri program");
} catch (err) {
  console.log("Karena ada error, blok ini akan dieksekusi");
}
