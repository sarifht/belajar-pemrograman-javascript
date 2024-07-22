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


// Tipe BigInt
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