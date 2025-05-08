console.log("==============Function============");

// func declaration
function dayOfTheWeek(){
   console.log("todays is the thursday");
}
// Call func
dayOfTheWeek();


function addition(n1,n2,n3) {
    var result=n1+n2+n3;
    console.log(result);
    
}
// call func
addition(10,20,30);

function addition(n1,n2,n3) {
    var result=n1*n2+n3;
    console.log(result);
    
}
addition(10,10,10);
addition(10,20,20);

console.log("======== Function with arguments and return value ============");
function square(num){
    var result = num * num;
    return result;
}
var squareValue =  square(15);
console.log("Square is: ", squareValue);

var returnValue = square(11);
console.log("Square is: ", returnValue);