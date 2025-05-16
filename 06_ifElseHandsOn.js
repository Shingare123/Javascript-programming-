// 1. Check EVEN or ODD
var checkEvenOdd = function(num) {
  if (num % 2 === 0) {
    console.log(`${num} is EVEN`);
  } else {
    console.log(`${num} is ODD`);
  }
};

checkEvenOdd(45);
checkEvenOdd(70);
checkEvenOdd(67);
checkEvenOdd(98);

// 2. Check voting eligibility
var checkVotingEligibility = function(age) {
  if (age > 18) {
    console.log(`${age} --> Eligible for vote`);
  } else {
    console.log(`${age} --> Not eligible for vote`);
  }
};

checkVotingEligibility(18);
checkVotingEligibility(20);
checkVotingEligibility(17);
checkVotingEligibility(40);

// 3. String > 10 characters
var checkStringLength = function(str) {
  if (str.length > 10) {
    console.log(`"${str}" --> More than 10 characters`);
  } else {
    console.log(`"${str}" ---> 10 or less than 10 characters`);
  }
};

checkStringLength("JavaScript - ES6");

// 4. Check if string starts with "Java"
var startsWithJava = function(str) {
  if (str.startsWith("Java")) {
    console.log(`"${str}" --> Starts with "Java"`);
  } else {
    console.log(`"${str}" --> Does not start with "Java"`);
  }
};

startsWithJava("JavaScript Language");
startsWithJava("Programming Language");
