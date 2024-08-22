/* 
    Spread operator yang ditandai dengan sintaks tiga titik  
    (...) adalah fitur yang menarik dan membantu dalam 
    pengelolaan object dan array. 
*/

// Spread operator pada Object
const obj1 = { nama: "Sarif" };
const obj2 = { pekerjaan: "UIUX", domisili: "Batam" };
const newObj = { ...obj1, ...obj2 };
console.log(newObj);

// Spread operator untuk men-copy Object
const nama = { presiden: "Jokowi", gubernur: "Anies", UIUX: "Sarif" };
const copyNama = { ...nama };
console.log(copyNama);

// Spread operator pada Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr);

// Bisa juga digunakan untuk men-copy data Array
const buah = ["Jeruk", "Mangga", "Apel", "Semangka"];
const copyBuah = [...buah];
console.log(copyBuah);
