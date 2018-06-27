let numOne = 22
let numTwo = 7

let result = 22/7;
let floatRes = -100.99

// console.log(Math.floor(floatRes)); //  floor//returns Largest integer lessthan or equal to given number  Ex: 5.95 -> 5 Ex: -5.05 -> -6
// console.log(Math.ceil(floatRes)) // Math ceil smallest integer greater than or equal to given number

// console.log(Math.random() * 10 + 1)

let upper = 25
let lower = 20

let myRandom = (Math.ceil(Math.random() * (upper - lower+1))) + lower
console.log(myRandom)