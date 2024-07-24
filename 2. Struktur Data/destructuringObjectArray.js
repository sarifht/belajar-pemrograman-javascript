// Penjelasan singkat
/* 

Ada dua hal yang banyak digunakan saat ini dalam
mengelola data yaitu Iterasi Object dan Array, kamu tau JSON
(JavaScript Object Notation) adalah format data yang
paling terkenal, digunakan dalam transaksi data.

Contoh data dalam format JSON:
[
  {
    "id": 14,
    "title": "Belajar Fundamental Aplikasi Android",
    "author": "Google ATP"
  },
  {
    "id": 51,
    "title": "Belajar Membuat Aplikasi Android untuk Pemula",
    "author": "Google ATP"
  },
  {
    "id": 123,
    "title": "Belajar Dasar Pemrograman Web",
    "author": "Dicoding Indonesia"
  },
  {
    "id": 163,
    "title": "Belajar Fundamental Front-End Web Development",
    "author": "Dicoding Indonesia"
  }
]
*/

// Contoh kodenya:
const profile = {
    firstName: "Sarif",
    lastName: "Hidayatullah",
    age: 20
  }
  
const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age
   
console.log(firstName, lastName, age)
/* output:
  John Doe 18
*/