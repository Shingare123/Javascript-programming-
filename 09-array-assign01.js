const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

// 1. Log the first and last element on console
console.log("First Element:", fruits[0]);
console.log("Last Element:", fruits[fruits.length - 1]);

// 2. Add element → Papaya before the element ‘Banana’ and then log array
fruits.unshift("Papaya");
console.log("After adding Papaya:", fruits);

// 3. Remove ‘Mango’ from the array
const mangoIndex = fruits.indexOf("Mango");
if (mangoIndex !== -1) {
  fruits.splice(mangoIndex, 1);
}
console.log("removed Mango:", fruits);

// 4. Add or insert element ‘Pineapple’ at the last position
fruits.push("Pineapple");
console.log("added Pineapple at last position:", fruits);

// 5. Insert an element - ‘Dragon Fruit’ before “Water Melon”
const waterMelonIndex = fruits.indexOf("Water Melon");
if (waterMelonIndex !== -1) {
  fruits.splice(waterMelonIndex, 0, "Dragon Fruit");
}
console.log("Dragon Fruit added before Water Melon:", fruits);

// 6. Replace an element ‘Orange’ with ‘Kiwi’
const orangeIndex = fruits.indexOf("Orange");
if (orangeIndex !== -1) {
  fruits[orangeIndex] = "Kiwi";
}
console.log("replaced Orange with Kiwi:", fruits);

// 7. Log the elements starting from index 1 to 4
console.log("Elements from index 1 to 4:", fruits.slice(1, 5));

// 8. Only select last 3 elements and log on console: Use the length property
console.log("Last 3 elements:", fruits.slice(fruits.length - 3));
