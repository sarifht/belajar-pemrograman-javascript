// Belajar Tipe Data Primitif di JavaScript
/* 
    Tipe data primitif di JavaScript  yaitu:
    1. String
    2. Number
    3. Boolean
    4. Null dan Undefined
*/

// Tipe data String
/* 
    Penulisan tipe data String dapat menggunakan:
    1. Single quote ('')
    2. Double quote ("")
    3. Backtick (`) -> Template literals
*/
const firstName = 'Sarif';
const lastName = "Hidayatullah";
const fullName = `Nama saya ${firstName} ${lastName}`;
console.log(firstName);
console.log(lastName);
console.log(fullName);
console.log('');
/* 
    Backticks sering disebut juga sebagai template literals 
    karena memungkinkan kita menyisipkan JavaScript expressions 
    untuk membentuk nilai string menggunakan notasi ${}.
*/

// Tipe data Number
/*
    Tipe data Number adalah tipe data yang digunakan untuk 
    merepresentasikan bilangan bulat dan bilangan desimal.
    Tidak ada aturan khusus dalam penulisan tipe data Number.
    Cukup dengan menuliskan angka pada variable.
*/
let age = 10;
console.log(age);
age = 1.618;
console.log(age);

// Contoh Infinity dan NaN (Not a Number) pada tipe data Number
const pembagian = 10 / 0;
console.log(pembagian); // Infinity
const konversi = Number('Joko Widodo');
console.log(konversi); // NaN