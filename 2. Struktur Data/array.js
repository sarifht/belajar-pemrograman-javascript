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
let myArray1 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray1[1]);
/* output:
42.5
*/

// Contoh pemanggilan array tapi diluar batas index
let myArray2 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray2[1]);
console.log(myArray2[2]);
console.log(myArray2[0]);
console.log(myArray2[3]);
console.log(myArray2[4]);
console.log(myArray2[5]);
console.log("Panjang nilai myArray adalah " + myArray2.length + ".");
/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/