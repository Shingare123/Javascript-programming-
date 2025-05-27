const arrayOne = [1, 2, 3];
const arrayClone = arrayOne;// Shallow Clone

console.log("==== arrayClone===== ");
arrayClone.push(100);
console.log(arrayClone);
console.log("==== arrayOne===== ");
console.log(arrayOne);

console.log(`=== Deep Clone ====`);
const arrayThree = [1, 2, 3];
const arrayTwo = [...arrayThree];
console.log(arrayTwo);
arrayTwo.push(2000);
console.log(arrayTwo);
console.log(arrayThree);

console.log(`By default primitive DT will have deep clone`);

let numOne = 100;
let numTwo = numOne;

console.log(`====== Merge two arrays using spread operator ... =====`);
const arrayFour = [1, 2, 3];
const arrayFive = [4, 5, 6];
const arraySix = [10, 50, 16];
const mergedArray = [...arrayFour, ...arrayFive, ...arraySix];
console.log(mergedArray);