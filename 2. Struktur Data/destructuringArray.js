// Contoh kode Desctructuring Array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
/* output:
Seafood
Salad
Nugget
Soup
*/

/*
Bedanya dengan Object, pada bagian tanda 
kurung kurawal { } sedangkan array menggunakan 
tanda kurung siku [ ]
*/


// Memilih element mana yang ingin diambil
const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
const [ , , thirdFood1 ] = favorites1
console.log(thirdFood1);
 /* output:
Nugget
*/


// Pembelajaran berikutnya mengenai
// Destructuring Assignment
// Default Values

/*
Silahkan kamu pelajari sendiri ya yang bagian ini
kamu bisa melihatnya di W3Schools.
Ini saya memberikan tautannya:
https://www.w3schools.com/js/js_destructuring.asp

Semangat ya belajarnya hehe
*/

