/*
Sebelum adanya loop, kita harus menulis kode secara berulang-ulang untuk menampilkan angka 1 sampai 10 seperti dibawah ini, apalagi kalo dibungkus dengan variable harus diketik satu-satu.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
*/

// For Loop
for(let i = 0; i < 5; i++) {
    console.log(i);
}
/* output
0
1
2
3
4
*/

// For of Loop
/* 
Cara lain dalam melakukan looping adalah menggunakan for..of. For of mulai hadir pada ECMAScript 2015 (ES6). Cara ini jauh lebih sederhana dan modern dibanding for loop biasa.
*/
let myArray = ["Aku", "Kamu", "Kita", "Kami"];

for(const arrayItem of myArray) {
console.log(arrayItem)
}
/* output
Aku
Kamu
Kita
Kami
*/