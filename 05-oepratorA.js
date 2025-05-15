console.log("====================First Task===============");

function squareOfWordLength(str) {
    var word=str.split(" ");
    var wordLength=word.length;
    console.log(`Given word: ${str}`);
    console.log(`Length of word: ${wordLength}`);
    
    
    var result=wordLength*wordLength;
    return result;
    //console.log(`Square of word length: ${result}`);
}
console.log("=======First word========");

console.log(`Square of word length: ${squareOfWordLength("Javascript")}`);
console.log("=======Second word========");
console.log(`Square of word length: ${squareOfWordLength("Google chrome")}`);
console.log("=======Third word========");
console.log(`Square of word length: ${squareOfWordLength("Web developer smart")}`);

console.log("==================Second Task===================");


function StringLogicalProg(params) {
    var str="I am MERN stack Developer";
    var strLength=str.length;
    console.log(`Length of string: ${strLength}`);
    var word=str.split(" ");
    var wordLength=word.length;
    console.log(`Length of words: ${wordLength}`);
    
    var result1=strLength/wordLength;
    var result2=strLength*wordLength;

    console.log(`String length/Total no. of words in string=: ${result1}`);
    console.log(`String length*Total no. of words in string=: ${result2}`);

}
StringLogicalProg();

