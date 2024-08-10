// Memanggil nama object
const user = {
    firstName: "Sarif",
    lastName: "Hidayatullah",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
  };
  
  console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
  console.log(`Umur saya ${user.age} tahun`);
/* output
  Halo, nama saya Sarif Hidayatullah
  Umur saya 19 tahun
*/

// Memanggil dengan bracket atau tanda kurung siku
console.log(`Saya berasal dari ${user["home world"]}`); 


// Modifikasi sebuah nilai dalam object
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 800,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  console.log(spaceship);
  /* output
  {
    name: 'Millenium Falcon',
    manufacturer: 'Corellian Engineering Corporation',
    maxSpeed: 1300,
    color: 'Glossy red'
  }
*/

// Menambahkan properti baru pada object
spaceship.class = "Light freighter";
console.log(spaceship);
/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/

// Menghapus properti pada object
delete spaceship.manufacturer;
console.log(spaceship);
/* output
{
  name: 'Millenium Falcon',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/