var num = 100;
var numStr = String(num);
console.log(`Value: ${numStr} and it's type: ${typeof numStr}`);

var numOne = 0;
var numBoolean = Boolean(numOne);
console.log(`Value: ${numBoolean} and it's type: ${typeof numBoolean}`);

var numTwo = true;
var numTwoBoolean = String(numTwo);
console.log(`Value: ${numTwoBoolean} and it's type: ${typeof numTwoBoolean}`);

var numTwoBoolean = Number(numTwo);
console.log(`Value: ${numTwoBoolean} and it's type: ${typeof numTwoBoolean}`);