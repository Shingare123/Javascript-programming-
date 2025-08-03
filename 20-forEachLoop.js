const array = [10, 20, 40, 30, 60];
array.forEach( (currentValue) => {
    console.log(currentValue); 
} );

console.log("Sum of array elements ");

const arrayOne = [10, 20, 40, 30, 60];
let sum = 0;
arrayOne.forEach( (currentValue) => {
    sum = sum + currentValue;
    // console.log(currentValue); 
} );
console.log(sum);

console.log(`===== Traversing set ========`);
let setOfRollNum = new Set();
setOfRollNum.add(101);
setOfRollNum.add(111);
setOfRollNum.add(101);
setOfRollNum.add(113);
setOfRollNum.add(111);
setOfRollNum.add(201);
console.log(setOfRollNum);

setOfRollNum.forEach((element)=> {
    console.log(element);
});

console.log(`===== Traversing map ========`);
const myMap = new Map();
myMap.set(101, "Jenny");
myMap.set(223, "Elon");
myMap.set(456, "Stew");
myMap.set(545, "Elon");
myMap.forEach((value, key) => {
    console.log(`${key} ==> ${value}`);
});