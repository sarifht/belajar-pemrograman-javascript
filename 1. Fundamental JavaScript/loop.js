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


// While dan Do While
// Contoh While Loop
let i = 1;

while (i <= 5) {
console.log(i);
i++;
}

// Contoh Do While Loop
let j = 1;

do {
console.log(j);
j++;
} while (j <= 5);


// Infinite Loop
/*
Pada While Loop
let i = 1;

while (i <= 5) {
console.log(i);
} 

Hati-hati dalam menjalankannya karena dapat mengakibatkan crash
*/

/*
Pada For Loop
for(let i = 1; i <= 5; i=1) {
console.log(i);
}

Hati-hati dalam menjalankannya karena dapat mengakibatkan crash
*/