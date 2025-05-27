var sum=0;
for(var i=1;i<=10;i++){
    sum=sum+i;
}
console.log("Sum of 1 to 10 number is= "+sum);

var sum=0;
for(var i=1;i<=10;i++){

    sum=sum+(i*i*i);
}
console.log("Sum of 1 to 10 number cube is= "+sum);

var str="I am good developer";
for(var i=0;i<str.length-1;i++){
if (i%2!=0 && str.charAt(i)!=' ') {
   var ch= str.charAt(i);
}
 console.log(ch);  
}


 