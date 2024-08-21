const map = new Map();
console.log(typeof map);
console.log(map);
// Output: object

// Contoh kodingan Map yang sederhana
const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 250],
]);
console.log(productMap);

// Menyimpan data di Map
map.set("name", "Sarif");
console.log(map);

map.set(1, "Hidayatullah");
console.log(map);

// Mengakses nilai di Map
console.log(map.get("name"));

// Menghapus nilai di Map
map.delete(1);
console.log(map);
