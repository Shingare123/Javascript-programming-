console.log("==========Greater Number function=========");

function greaterNumber(num1,num2) {
    var result=num1>num2?num1:num2;
    console.log(`Given no's are: ${num1} and ${num2} --->Greater no.is :${result}`);
}   
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("==========Even/Odd Number function=========");
function isEvenOrOddNum(num) {
    var result=num%2==0?true:false;
    return result;
    
}
var returnValue=isEvenOrOddNum(29);
console.log(`Is 29 number even: ${returnValue}`);
var returnValue=isEvenOrOddNum(44);
console.log(`Is 44  number even: ${returnValue}`);
var returnValue=isEvenOrOddNum(0);
console.log(`Is 0  number even: ${returnValue}`);
var returnValue=isEvenOrOddNum(101);
console.log(`Is 101 number even: ${returnValue}`);

console.log("==========Word Length Even/Odd function=========");

function wordLength(word) {
   var result= word.length%2==0?
    `Word length is even`:
    `Word length is Odd`;
    var length=word.length;
    console.log(`Given word: ${word} and Length of word is: ${length}`);
    return result;
    
}
var returnValue=wordLength("Javascript");
console.log(`${returnValue}`);
var returnValue=wordLength("developer");
console.log(`${returnValue}`);
var returnValue=wordLength("Google");
console.log(`${returnValue}`);