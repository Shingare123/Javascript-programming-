let array = [50, 40, 30, 50, 40, 30 ];
console.log(array);

let setOfRollNum = new Set();
setOfRollNum.add(101);
setOfRollNum.add(111);
setOfRollNum.add(101);
setOfRollNum.add(113);
setOfRollNum.add(111);
setOfRollNum.add(201);
console.log(setOfRollNum);

console.log(`Size is ${setOfRollNum.size}`);

setOfRollNum.delete(113);
console.log(setOfRollNum);

console.log(`Is element 111 available: ${setOfRollNum.has(1111)} `);

console.log(typeof setOfRollNum);

console.log(`===== Set traversing =======`);
for (const element of setOfRollNum) {
    console.log(element); 
}

console.log(`WAP to remove duplicate from the array `);
let arrayOne = [50, 40, 30, 50, 40, 40 ];
const arrayUnique = [...new Set(arrayOne)];
console.log(arrayUnique);