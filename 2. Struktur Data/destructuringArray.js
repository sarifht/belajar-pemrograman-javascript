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