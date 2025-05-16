// 1 to 7
// 1 Monday
// 2 Tuesday

// 7 Sunday
// 8 Invalid
// 1000 Invalid 
// 0 Invalid
// "My love"
// null
// undefined

var day = function(dayNum){
  switch (dayNum) {
    case 1:
        console.log(`${dayNum} - Monday`);
        break;
    case 2:
        console.log(`${dayNum} - Tuesday`);
        break;
    case 3:
        console.log(`${dayNum} - Wed`);
        break;
    case 4:
        console.log(`${dayNum} - Thur`);
        break; 
    case 5:
        console.log(`${dayNum} - Friday`);
        break;
    case 6:
        console.log(`${dayNum} - Sat`);
        break;
    case 7:
        console.log(`${dayNum} - Sunday`);
        break;
    default:
        console.log(`Invalid Data: ${dayNum}`);
        break;
  }
}
day(2);
day(4);
day(null);
day(0);
day("My Love");