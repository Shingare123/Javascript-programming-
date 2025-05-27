const professor = {
    name: "Mr. Sudeep Kumar",
    age: 40,
    subject: "Computer Science",
    college: "JSPM",
    isPermanent: true,
   
    degrees: {
        engineering: "CSC",
        masters: "Software Engineering",
        PHD: "Adv Computing",
        diploma: "Machine learning"
    },

    certificates: [
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming"
    ]
};

console.log(`=============================================Print Professor Details===========================================`);
console.log( professor);
console.log(`=============================================add new property totalExperience=14 years===========================================`);
professor.totalExperience ="14 years";
console.log("After adding totalExperience:", professor);


console.log(`================================================Modify any exixting property=====================================================`);
professor.age = 45;
console.log("After modifying age:", professor);


console.log(`============================================Add one new certificate-->"Oracle Certified"=========================================`);
professor.certificates.splice(2, 0, "Oracle Certified");
console.log("After inserting certificate:", professor.certificates);

console.log(`=========================================log the last elementof the array-->"Certificates"=======================================`);
const lastCertificate = professor.certificates[professor.certificates.length - 1];
console.log("Last certificate:", lastCertificate);


console.log(`=================================================log complete object using for in loop===========================================`);
console.log("Logging full object using for in loop:");
for (let key in professor) {
    console.log(`${key}: ${JSON.stringify(professor[key])}`);
}