// Belajar Operator di JavaScript
// 5 + 5; //angka 5 merupakan operand dan + merupakan operator

/* 
    Secara umum ada 3 kategori operator di JavaScript
    1. Unary Operator
    2. Binary Operator
    3. Ternary Operator
*/

let age = 25;
 
// Unary operator
typeof age;
 
// Binary operator
5 + 4;
10 / 2;
age = 30;
 
// Ternary operator (conditional operator)
(age < 18) ? 'You are too young!' : 'Welcome onboard!'; 

// Tidak menampilkan apa-apa, hanya contoh operator sesuai kategorinya.

/* 
    Ada beberapa jenis operator di JavaScript
    1. Assignment Operator (Operator Penugasan)
    2. Arithmetic Operator (Operator Aritmatika)
    3. Comparison Operator (Operator Perbandingan)
    4. Logical Operator (Operator Logika)
    5. String Operator (Operator String)
*/

// Contoh Assignment Operator
// Operator ini dicirikan dengan tanda sama dengan (=)
let city = 'Jakarta';
console.log(city); // Jakarta

city = 'Bandung';
console.log(city); // Bandung

// Contoh Arithmetic Operator
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1
console.log((a + b) + a); // 23

// Perpangkatan
console.log(a ** b); // 1000

// Increment dan Decrement
console.log(a++); // 10
console.log(a++); // 11
console.log(b--); // 3
console.log(b--); // 2
