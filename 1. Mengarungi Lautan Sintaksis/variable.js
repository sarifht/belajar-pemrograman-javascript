// Belajar Variable
/* 
    Sebenarnya variable di JavaScript itu ada var, let dan const.
    Hanya saja yang var sudah tidak digunakan lagi karena banyak masalah.
    Kali ini kita hanya akan belajar let dan const.
*/

const number = 10;
let fullName = 'Sarif Hidayatullah';

console.log(number);
console.log(fullName);

// let dapat diubah kembali expressionnya sedangkan const tidak
// number = 11; //Jika diaktifkan akan error
fullName = 'Joko Widodo';

// console.log(number);
console.log(fullName);

// Contoh lain penggunaan let

let nameCity = 'Batam';
console.log('Sebelumnya berada di Kota', nameCity);
nameCity = 'Manokwari';
console.log('Sekarang berada di Kota', nameCity);

/* 
    Best practice dalam penamaan variable
    1. Gunakan nama variable yang jelas dan tidak boleh sama


    Penamaan variable yang diperbolehkan:
    -> const firstName = 'Fulan';
    -> const last_name = 'Lestari';
    -> const $message = 'Hello, World!';
    -> const userId1 = 123;
    -> const userId2 = 456;
    -> const _message = 'Hello, World!';
    
    Penamaan variable yang tidak boleh:
    -> const first-name = 'Fulan'; // tidak boleh mengandung karakter -
    -> const last name = 'Lestari'; // tidak boleh mengandung spasi
    -> const @message = 'Hello, World!'; // tidak boleh mengandung karakter @
    -> const 1userId = 123; // tidak boleh diawali dengan angka
*/


// Contoh lain, untuk kondisi dimana nama variable boleh sama.
// Ini akan dipelajari dibagian function nantinya.
console.log('');

function printCountryInfo() {
    const name = 'Indonesia'; // <- nama variabel sama
    const legal = 'Negara';
    
    console.log('Country name:', name);
    console.log('Legal type:', legal);
  }
   
  function printEmployeeInfo() {
    const name = 'Sarif Hidayatullah'; // <- nama variabel sama
    const division = 'UIUX';
    
    console.log('Employee name:', name);
    console.log('Division:', division);
  }
   
  printCountryInfo();
  printEmployeeInfo();