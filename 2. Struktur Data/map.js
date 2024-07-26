// Contoh kode Map
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
  ]);
  
console.log(myMap);
/* output
  Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/


// Contoh kode Map dengan Get dan Set
/*
Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya 
berdasarkan key tertentu dengan metode get(). Lalu, untuk 
menambahkan pasangan key-value baru gunakan metode set().
*/
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);
  
console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));
/* output
  3
  England
  4
  India
*/


// Map query dengan .has dan .delete
const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));
/* output
false
false
 */