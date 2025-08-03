function add(n1, n2, ...n3){
    console.log(n1, n2);
    console.log(n3);
}
add(10, 20, 30, 40);

console.log(`Function with default parameter`);
function division(n1, n2=1){
    console.log(n1/n2); 
}
division(10);
division(20, 5);