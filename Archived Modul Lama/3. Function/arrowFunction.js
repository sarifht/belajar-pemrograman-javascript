// Hanya memiliki satu parameter
const sayName = (name) => {
    console.log(`Halo nama saya ${name}`);
}

sayName('Sarif Hidayatullah');

// Jika tidak membutuhkan parameter
const sayHello = () => {
    console.log('Selamat sore!');
}

sayHello();

// Tips untuk menghemat baris kode
const sayName1 = fullName => console.log(`Halo nama aku ${fullName}`);
sayName1('Sarif Hidayatullah');

const sayHello1 = () => console.log('Selamat sore semua!');
sayHello1();
/* Output:
Halo nama aku Sarif Hidayatullah
Selama sore semua!
*/

// Menuliskan fungsi return
const multiply = (a, b) => a + b;
console.log(multiply(2, 3)); 
// Output: 5