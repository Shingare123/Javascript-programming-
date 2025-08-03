const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

// 1. Log the array element with its index using forEach with arrow function
console.log("=======================1. Array elements with index:=====================");
arrayNumbers.forEach((element, index) => {
  console.log(`Index: ${index}, Element: ${element}`);
});

// 2. Find the positive numbers and log on console
console.log("======================2. Positive numbers:===================================");
arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});

// 3. Find the negative numbers, add into new array and log new array on console
console.log("================3. Find the negative numbers, add into new array and log new array:=========================");
const negativeNumbers = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    negativeNumbers.push(element);
  }
});
console.log("3. Negative numbers array:", negativeNumbers);

// 4. Find the even numbers and log on console
console.log("================4. Even numbers:=========================");
arrayNumbers.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});

// 5. Find the sum of all elements from arrayNumbers
console.log("================5. sum of all elements:=========================");
let sum = 0;
arrayNumbers.forEach((element) => {
  sum += element;
});
console.log("5. Sum of all elements:", sum);

// 6. Log the only even indexed array values

console.log("================6. Even indexed elements:=========================");
arrayNumbers.forEach((element, index) => {
  if (index % 2 === 0) {
    console.log(`Index ${index}: ${element}`);
  }
});
