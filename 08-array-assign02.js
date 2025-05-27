const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

// 1. Total elements / length
console.log("1. Total elements:", arrayNumbers.length);

// 2. First and last element
console.log("2. First element:", arrayNumbers[0]);
console.log("   Last element:", arrayNumbers[arrayNumbers.length - 1]);

// 3. Third last element
console.log("3. Third last element:", arrayNumbers[arrayNumbers.length - 3]);

// 4. All even numbers using for loop
console.log("4. Even numbers:");
for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 2 === 0) {
    console.log(arrayNumbers[i]);
  }
}

// 5. All odd numbers using for loop
console.log("5. Odd numbers:");
for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 2 !== 0) {
    console.log(arrayNumbers[i]);
  }
}

// 6. Even positioned elements, sum and log
let evenPosSum = 0;
console.log("6. Even positioned elements:");
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 === 0) {
    console.log(arrayNumbers[i]);
    evenPosSum += arrayNumbers[i];
  }
}
console.log("   Sum of even positioned elements:", evenPosSum);

// 7. Odd positioned elements, sum and log
let oddPosSum = 0;
console.log("7. Odd positioned elements:");
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 !== 0) {
    console.log(arrayNumbers[i]);
    oddPosSum += arrayNumbers[i];
  }
}
console.log("   Sum of odd positioned elements:", oddPosSum);

// 8. Sum of all elements
let totalSum = 0;
for (let num of arrayNumbers) {
  totalSum += num;
}
console.log("8. Sum of all elements:", totalSum);

// 9. Numbers which are multiple of 5
console.log("9. Numbers multiple of 5:");
for (let num of arrayNumbers) {
  if (num % 5 === 0) {
    console.log(num);
  }
}

// 10. Is 115 available?
console.log("10. Is 115 available?", arrayNumbers.includes(115));

// 11. Is 23 available?
console.log("11. Is 23 available?", arrayNumbers.includes(23));

// 12. Insert 55, 66 at index 3
arrayNumbers.splice(3, 0, 55, 66);
console.log("12. After inserting 55, 66 at index 3:", arrayNumbers);
