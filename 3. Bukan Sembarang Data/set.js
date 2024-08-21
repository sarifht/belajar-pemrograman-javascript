const set = new Set();
console.log(typeof set);

// Kode sederhana Set
const mySet = new Set([1, 2, 3]);
console.log(mySet);

// Menambahkan data ke Set
const buah = new Set();
buah.add("Jeruk");
buah.add("Jeruk");
buah.add("Mangga");
buah.add("Apel");
console.log(buah);

// Set dalam perulangan
const newSet = new Set();
newSet.add(1);
newSet.add(3);

for (const angka of newSet) {
  console.log(angka);
}

newSet.forEach((value) => console.log(value));

// Menghapus data di Set
buah.delete("Apel");
console.log(buah);
