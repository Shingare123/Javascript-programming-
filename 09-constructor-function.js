function Student(firstName, age, city){
    this.firstName = firstName;
    this.age = age;
    this.city = city;
}
const stdJenny = new Student("Jenny", 23, "Pune");
console.log(stdJenny);

const stdStew = new Student("Stew", 20, "Mumbai");
console.log(stdStew);

const stdElon = new Student("Elon", 24, "LA");
console.log(stdElon);

// Prototype
Student.prototype.country = "India";
console.log(stdElon.country);
console.log(`StdJEnny: ${stdJenny.country}`);