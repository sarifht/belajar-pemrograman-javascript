// Contoh kode penulisan Desctructuring Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
  const { firstName, middleName, lastName, age } = profile;
   
  console.log(firstName, lastName, age);
/* output:
  John Doe 18
*/

// Destructuring Assignment
/*
Sebenernya disini ada materi tersebut, hanya saja karena 
kodenya sama dengan yang diatas dan ada penambahan kode
yang membuat kode tersebut menjadi error,
saya lebih sarankan bikin file baru ya dan coba kamu
pelajari dari W3Schools.
*/

// Default Values
const profile2 = {
    firs: "John",
    last: "Doe",
    years: 18
  }
   
   
  const { first, years, isMale } = profile2;
   
  console.log(first)
  console.log(years)
  console.log(isMale)
/* output:
  John
  18
  undefined
*/

/*
Harusnya sih kode tersebut berjalan seperti output diatas,
hanya saja dalam kode itu tidak diperbolehkan, tapi saat saya
coba menggunakan compiler Dicoding, itu bisa dijalankan.
Coba kamu pahami sendiri ya dan saran saya liat dokumentasinya
di W3Schools.
*/