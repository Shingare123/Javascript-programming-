let array = [50, 40, 20, 40, 80, 30 ];
let sum=0;
for (const element of array) {
   console.log(element);
    sum=sum+element;
}
console.log(sum);

console.log("======== join() ===========");
let arrayNum = [50, 40, 20, 40, 80, 30 ];
console.log(typeof arrayNum);
const joinedElement = arrayNum.join("-");
console.log(joinedElement);
console.log(typeof joinedElement);
