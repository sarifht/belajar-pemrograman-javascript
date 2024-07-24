let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

/* 
Mirip sekali dengan object bukan? nah perbedaan array dan object ialah terletak pada susunan dan cara pemanggilannya, kalo ada array itu disusun secara berurutan dan dipanggil menggunakan index.

contoh:
console.log(myArray[1]);

Oh iya, pemanggilan index ke-1 dimulai dari 0 ya!
*/

// Contoh kode pemanggilan array menggunakan index
console.log(myArray[1]);
/* output:
42.5
*/

// Contoh pemanggilan array tapi diluar batas index
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[0]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");
/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

// Menambahkan data ke dalam array
myArray.push('JavaScript');
console.log(myArray);
/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
*/

// Menghapus data array tapi elemen terakhir
myArray.pop();
console.log(myArray);
/* output
[ Cokelat, 42.5, 22, true ]
*/

// Manipulasi array dengan shift() dan unshift() khusus untuk data pertama
myArray.shift();
console.log(myArray);
/* output
[ 42.5, 22, true, 'Programming' ]
*/

myArray.unshift("Apple");
console.log(myArray);
/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

// Menghapus data dalam array
delete myArray[1];
console.log(myArray);
/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]

Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong. 
*/

// Menghapus elemen beserta posisinya menggunakan splice()
const myArray1 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray1.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray1);
/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/

// Menambahkan elemen pada posisi yang dihapus
const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);
/* 
before splice:  [ 'January', 'March', 'April', 'May' ]
*/

month.splice(1, 0, 'February');
console.log('after splice: ', month);
/* 
after splice:  [ 'January', 'February', 'March', 'April', 'May' ]
*/