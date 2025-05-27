console.log("====== Get the Keys ============");
const keys = Object.keys(personStew);
console.log(keys);

console.log("====== Get the Values ============");
const values = Object.values(personStew);
console.log(values);

console.log("========= Check whether property exists or not ====== ");
const isAvailable = "age" in personStew;
console.log(isAvailable);

console.log("==== Deep clone using Object.assign() ======");
const clonedPerson = Object.assign({} ,personElon);
console.log(clonedPerson);
clonedPerson.country = "India";
console.log(personElon);

console.log("==== Deep clone using spread Operator ======");
const copyPerson = {...personElon};
console.log(copyPerson);

console.log("====== Merge Object ======");
let personJenny = {
    firstName: "Jenny",
    lastName: "Taro",
    age: 49,
    city: "LA",
    isMarried: true
};
const address = {
    street: "Wakad",
    city: "Pune",
    country : "India"
}

Object.assign(personJenny, address);
console.table(personJenny);