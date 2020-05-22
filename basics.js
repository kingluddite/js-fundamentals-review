// # Numbers in JavaScript
// ## Only one type of number in JavaScript and that is `Number`

// ## typeof
const age = 21; // this is an integer (but type is number)
const price = 100.52; // this is a float (but type is number)

console.log(typeof age);
console.log(typeof price);

// ## math operators
// ```
// + add
// - subtract
// * multiple
// / divide
// ```

// ### casting
// * if you multiply strings numbers, subtract or divide them JavaScript will cast them as a number (**note** but it won't when using `+`)

// ## JavaScript helper functions
// * Math
//     - .round()
//     - .floor()
//     - .ceil()
//     - .random()

// ## Two other Math operators
// * modulo
//     - remainder
//     - Type this in console `0.1 + 0.2`
//     - Why?
//     - Type this in console
console.log(0.1 + 0.2);
// ```
window.location = `https://${0.1 + 0.2}.com`;
// ```

// node tells you window is not defined... why?
// but viewing `index.html` redirects to above URL

// * **Tip** Don't store money in dollars and cents
//     - This will prevent any strange JavaScript decimal behavior
//     - You will always be working in whole numbers
//     - Never working in fractions
//     - Then you use an equation to convert number to dollars and cents
//     - We'll discuss displaying money later


// ## power
// * There are numbers that are too high and too small for JavaScript
//     - infinity
//     - and negative infinity

// Try this in the console
// > 10 ** 2
// < 100

// * Above `**` is "to the power of"

// ```
// > 1000 ** 20
// > Infinity
// ```

// ```
// > -1000 ** 200
// > Infinity
// ```

// ```
console.log(typeof Infinity);
console.log(typeof -Infinity);
// ```
// ## NaN
// ```
console.log(NaN / 'word');

// * Not a Number is a number? Crazy!

// `typeof NaN //(number)`
console.log(typeof NaN);
