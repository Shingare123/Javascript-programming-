console.log("==========Male Marriage Eligibility================");

function maleMarriageEligibility(gender,age,boyName) {
   var result= gender=="Male"&& age>=21?
    `Hey ${boyName} you are eligible for marriage`:
    `Hey ${boyName} you are not eligible for marriage`;
    return result;
}
var returnValue=maleMarriageEligibility("Male",25,"Billgates");
console.log(returnValue);
var returnValue=maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(returnValue);

console.log("==========Female Marriage Eligibility================");
function femaleMarriageEligibility(gender,age,girlName) {
   var result= gender=="Female"&& age>=18?
    `Hey ${girlNameName} you are eligible for marriage`:
    `Hey ${girlName} you are not eligible for marriage`;
    return result;
}
var returnValue=femaleMarriageEligibility("female",16,"Jenifer");
console.log(returnValue);
var returnValue=femaleMarriageEligibility("female",27,"Malinda Gates");
console.log(returnValue);
