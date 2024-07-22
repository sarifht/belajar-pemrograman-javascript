// Tipe data Undefined
let x;
console.log(typeof(x));
/* output: undefined */


// Tipe data Numbers
let a = 11;
console.log(typeof(a))
/* output: number */

let b = 3.14;
console.log(typeof(b))
/* output: number */

// Operasi pada Numbers
let c = 12;
let d = 9;

console.log(c + d)
console.log(c - d)
console.log(c * d)
console.log(c / d)
console.log(c % d)
/* output:
21
3
108
1.3333333333333333
3
*/

// Increment dan Decrement

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */


// Tipe data BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);
/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);
/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/


//Tipe data Strings
let greet = "Hello";
console.log(typeof(greet))
/* output: string */ 

const question = '"What do you think of JavaScript?" I asked';
console.log(question)
/* output: "What do you think of JavaScript?" I asked */

const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);

// Menambahkan String
let moreGreet = greet + greet;
console.log(moreGreet);
/* output: HelloHello */

// String interpolation
const myName = "Sarif";
console.log(`Hello, my name is ${myName}.`);
/* output: Hello, my name is Luke. */


// Tipe data Boolean
let e = true;
let f = false;

console.log(typeof(e))
console.log(typeof(f))
/* output: 
boolean
boolean
*/

const g = 10;
const h = 12;

let isGreater = g > h;
let isLess = g < h;

console.log(isGreater);
console.log(isLess);
/* output:
false
true
*/

