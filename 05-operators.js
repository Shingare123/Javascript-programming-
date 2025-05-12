console.log("===========Airthmatic operator========");

var a=10;
var b=5;

console.log(`Addition ${a+b}`);
console.log(`Substraction: ${a-b} `);
console.log(`Multiplication: ${a*b} `);
console.log(`Division: ${a/b} `);
console.log(`Mudulus: ${a%b} `);

console.log("=========Comparison operator===========");
var a=10;
var b=11;
var c="10";
var d=10;

console.log(`== Operator : ${a==b}`);
console.log(`== Operator : ${a==d}`);
console.log(`== Operator : ${a==c}`);

console.log(`== Operator : ${a===b}`); //false
console.log(`== Operator : ${a===d}`); //true
console.log(`== Operator : ${a===c}`); //false

console.log(`!= Not equal Operator : ${a!=b}`); //true
console.log(`!= Not equal Operator : ${a!=d}`); //false
console.log(`!= Not equal Operator : ${a!=c}`); //false

console.log(`< less than Operator : ${a<b}`); //true
console.log(`< less than Operator : ${a<=d}`); //true
console.log(`< less than Operator : ${a<=c}`); //true

console.log(`> greater than Operator : ${a>=b}`); //false
console.log(`> greater than Operator : ${a>=d}`); //true
console.log(`> greater than Operator : ${a>=c}`); //true

