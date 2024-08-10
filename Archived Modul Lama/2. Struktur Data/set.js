// Inisial kode Set
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);
/* output
Set(3) { 1, 4, 6 }
*/

// Menambahkan nilai baru ke Set
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);
/* output
Set(5) { 1, 4, 6, 5, 10 }
*/

// Menghapus nilai dari Set
numberSet.delete(4);

console.log(numberSet);
/* output
Set(4) { 1, 6, 5, 10 }
*/