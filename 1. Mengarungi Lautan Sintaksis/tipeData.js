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

// Tipe data Boolean
/*
    Tipe data Boolean adalah tipe data yang digunakan untuk 
    merepresentasikan nilai kebenaran. 
    Hanya ada dua nilai Boolean, yaitu true dan false.
*/
console.log('');
const isLogin = true;
const isLogout = false;
console.log(isLogin);
console.log(isLogout);

// Boolean biasanya digunakan pada perbandingan seperti dibawah ini
const compare = 10 > 5;
console.log(compare);

// Tipe data Null dan Undefined
console.log('');
let message = null;
console.log(message);
let test;
console.log(test);

// Contoh lebih dalam perbedaan Null dan Undefined
const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}
/* 
    Jadi jika ingin membuat data yang masih belum tahu
    isinya apa, rekomendasi gunakan null.
*/