function bWork(callback){
    console.log(`Bharati went home had tea`);
    console.log(`She started her assignment`);
    console.log(`She completed it.`);
    callback();
}

let jWork = function(){
    console.log(`Once Jenny  will call back she will start copying assignments`);
    console.log(`She copied all assignments`);
}

bWork(jWork);

console.log(`===== setTimeout() ==========`);

setTimeout(function(){
    console.log(`Hey buddy, I am here.....`);
} , 5000);

console.log(`===== callback hell  ==========`);
setTimeout(function(){
    console.log("2000");
    setTimeout(function(){
        console.log("3000");
        setTimeout(function(){
            console.log("4000");
            setTimeout(function(){
                console.log("5000");
            }, 5000);
        }, 4000);
    }, 3000);
}, 2000);