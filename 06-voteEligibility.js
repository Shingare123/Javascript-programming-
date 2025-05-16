var voteEligible = function(age) {
  if (age === null || age <= 0 || age > 130) {
    console.log(`Given Input age: ${age} --> Invalid data`);
  } else if (age < 18) {
    console.log(`Given Input age: ${age} --> Not eligible for vote`);
  } else if (age >= 18) {
    console.log(`Given Input age: ${age} --> Eligible for vote`);
  }
};

voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
