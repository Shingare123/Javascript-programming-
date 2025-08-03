var globalVariable = 10;
function outer(){
    let outerVariable = 20;
    let inner = function(){
        let innerVariable = 30;
        console.log(`Inside inner function...`);
        console.log(globalVariable);
        console.log(outerVariable);
        console.log(innerVariable); 
    };
    return inner;
}
let result = outer();
result();