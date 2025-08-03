let promiseMarriage = new Promise( function(success, reject ){
    console.log(`After few years`);
    console.log(`Boy became very big and rich`);
    success("I am going to marry you..");
    // reject("No, I don't want to marry with you...");
});
promiseMarriage.then(function(msg){
    console.log("====== then =======");
    console.log(msg); 
    console.log(`Yeahhhh and she started dancing`);
}).catch(function(msg){
    console.log("====== catch =======");
    console.log(msg);
    console.log(`She started crying...`); 
}).finally(function(){
    console.log("====== finally =======");
    console.log("She will work for her food");
})