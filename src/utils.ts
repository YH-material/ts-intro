export function concatenate(a: string, b: string) {
  return a + b;
}

concatenate("2", "2"); //Prints 22

function greet() {
  console.log("Hello");
}

greet(); //Prints "Hello"

function advancedGreet(name?: string) {
  console.log(`Hello ${name ?? "stranger"}`);
}

advancedGreet(); //Prints "Hello stranger"
advancedGreet("Anna"); //Prints "Hello Anna"
//advancedGreet("Anna", "Andersson");

function exponentiation(power = 1) {
  console.log(4 ** power);
}

exponentiation(); // Prints: 4

exponentiation(4); // Prints: 256

//exponentiation(true); // Error: Argument of type 'true' is not assignable to parameter of type 'number'.

function factOrFiction() {
  return Math.random() >= 0.5 ? "true" : "false";
}

//const myAnswer: boolean = factOrFiction(); // Type 'string' is not assignable to type 'boolean'

/* function trueOrFalse(value: boolean): boolean {
  if (value) {
    return true;
  }

  return "false"; // Typescript Error: Type 'string' is not assignable to type 'boolean'.
} */

// zipcodes is an array of strings
let zipcodes: string[] = ["03255", "02134", "08002", "03063"];

// Pushing a number to zipcodes will generate an error
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
/* zipcodes.push(90210); */

// one-dimensional empty array
let axis: string[] = [];

let answer: any; // any type
let typedAnswer: string | number; // union type

let myBoolean: string | boolean;

myBoolean = "TRUE"; // string type
myBoolean = false; // boolean type
