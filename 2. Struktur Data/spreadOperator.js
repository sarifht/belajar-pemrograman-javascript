// Contoh Spread Operator
/*
Sesuai namanya “spread”, fitur ini digunakan 
untuk menyebarkan nilai array atau lebih tepatnya 
iterable object menjadi beberapa elemen. 
Spread operator dituliskan dengan tiga titik (...). 
*/
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);
/* output
Seafood Salad Nugget Soup
*/

// Saat kamua ga pake spread operator, akan seperti ini
const others = ["Cake", "Pie", "Donut"];
const allFavorites = [favorites, others];

console.log(allFavorites);
/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

// Saat menggunakan spread operator
const allFavorites1 = [...favorites, ...others];

console.log(allFavorites1);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

// Menggunakan Spread Operator untuk Object Literals
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/