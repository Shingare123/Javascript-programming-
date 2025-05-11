var str="   Hey you are doing good, keep it up  ";
console.log(`given string: ${str}`);
console.log(`Length of string before trim: ${str.length}`);

var strAfterTrim=str.trim();
console.log(`Length of string after trim: ${strAfterTrim.length}`);
console.log(`Total removed spaces: ${str.length-strAfterTrim.length}`);
console.log(`String after trim:${strAfterTrim}`);

strAfterTrim.charAt(0);
console.log(`First char: ${strAfterTrim.charAt(0)} and last char : ${strAfterTrim.charAt(strAfterTrim.length-1)}`);

var words=strAfterTrim.split(" ");
console.log(`Count of total words:${words.length}`);

console.log(`Index of word "good":${strAfterTrim.indexOf("good")}`);
console.log(`Substring from index22: ${strAfterTrim.substring(22)}`);
console.log(`Is string ends with "up":${strAfterTrim.includes("up")}`);
console.log(`Is string starts with "Hey":${strAfterTrim.includes("Hey")}`);




