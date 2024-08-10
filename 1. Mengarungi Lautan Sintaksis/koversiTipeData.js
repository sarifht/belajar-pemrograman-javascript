// Belajar Konversi Tipe Data di JavaScript
/* 
    Cara konversi tipe data di JavaScript,
    itu ada dua cara yaitu Ekplisit dan Implisit.

    1. Ekplisit adalah konversi tipe data yang dilakukan secara manual oleh programmer
    2. Implisit adalah konversi tipe data yang dilakukan secara otomatis oleh interpreter
*/

// EKSPLISIT
// Mengubah ke String
const angka = 10;
const banding = true;

const numToString = String(angka); //Bisa menggunakan String
const boolToString = banding.toString(); //Bisa menggunakan toString

console.log(numToString);
console.log(typeof numToString);
console.log(boolToString);
console.log(typeof boolToString);

//  Mengubah ke Number
console.log('');
const string = '100';
const pecahan = '1.618';
const boolean = true;

const strToNum = Number(string); //Bisa menggunakan Number
const strToFloat = Number(pecahan); //Bisa menggunakan Number
const boolToNum = Number(boolean); //Bisa menggunakan Number

console.log(strToNum);
console.log(typeof strToNum);
console.log(strToFloat);
console.log(typeof strToFloat);
console.log(boolToNum);
console.log(typeof boolToNum);

// Spesifik menggunakan toInt dan toFloat
const cm = '100cm';
const inch = '2.54inch';

const cmToInt = parseInt(cm); //Bisa menggunakan parseInt
const inchToFloat = parseFloat(inch); //Bisa menggunakan parseFloat

console.log(cmToInt);
console.log(typeof cmToInt);
console.log(inchToFloat);
console.log(typeof inchToFloat);

// Mengubah ke Boolean
console.log('');
const num = 12;
const str = 'Joko';
const kosong = null;

const numToBool = Boolean(num); //Bisa menggunakan Boolean
const strToBool = Boolean(str); //Bisa menggunakan Boolean
const kosongToBool = Boolean(kosong); //Bisa menggunakan Boolean

console.log(numToBool);
console.log(typeof numToBool);
console.log(strToBool); 
console.log(typeof strToBool);
console.log(kosongToBool);
console.log(typeof kosongToBool);
/* 
    Seluruh nilai yang dikonversi ke boolean akan menghasilan
    truthy dan falsy.

    Nilai yang akan dianggap thruthy adalah:
    -> Semua angka kecuali 0
    -> Semua string kecuali string kosong
    -> Semua nilai kecuali null dan undefined

    Nilai yang akan dianggap falsy adalah:
    -> false
    -> 0
    -> -0
    -> 0n
    -> ''
    -> null
    -> undefined
    -> NaN
*/

// IMPLISIT
/* 
    Konversi implisit terjadi ketika JavaScript secara otomatis 
    mengubah tipe data tanpa instruksi eksplisit dari programmer.
*/
// Contoh Number
console.log('');
const age = 20;
const message = 'Umurku: ' + age;

console.log(message); // output: Umurku: 20

// Contoh String
const strNumber = '123';
const result = strNumber * 2;

console.log(result); // output: 246

// Contoh Boolean
const logic = true;
const hasil = 1 + logic;

console.log(hasil); // output: 2