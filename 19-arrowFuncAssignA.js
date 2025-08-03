// 1. Arrow function with no args and no return value
let greet = () => {
    console.log("Good Morning, Today is Friday");
};
greet();

// 2. Arrow function with 3 args and no return value - multiplication
let multiply = (n1, n2, n3 = 1) => {
    console.log(`Multiplication is: ${n1 * n2 * n3}`);
};
multiply(5, 5, 2);  // Output: 50
multiply(10, 4);    // Uses default for 3rd arg, Output: 40

// 3. Arrow function with 5 args and return value - addition
let add = (a1, a2, a3, a4, a5) => {
    return a1 + a2 + a3 + a4 + a5;
};

let result1 = add(100, 100, 200, 349, 756);
console.log(`Addition of (numbers): ${result1}`);

let result2 = add("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`Addition of (strings): ${result2}`);
