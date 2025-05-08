console.log("====func with no arguments and no return type===");

function multi() {
    var result=10*10;
   console.log("multiplication of 10*10= ",result); 
}
multi();

function division(params) {
    var result=100/5;
    console.log("division of 100/5= ",result);
}
division();

console.log("==Func with args but no return type==");

function personalDetails(firstName,lastName,collegeName) {
    console.log("My first name is : ",firstName);
    console.log("My last name is : ",lastName);
    console.log("My college name is : ",collegeName);
}
personalDetails("Swapnil","shinagare","JSPM");

function addThreeValues(n1,n2,n3) {
    var result=n1+n2+n3;
    console.log("Addition of three values:",result);
    
}

console.log("==functiion with three arguments====");

addThreeValues(10.23,600,40);
addThreeValues("Hello"," Good"," Morning");

