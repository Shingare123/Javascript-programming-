
var tcsInterview = function(gradScore, hscScore, sscScore, candidateName ){
    if (gradScore>=70 || hscScore>=80 || sscScore > 90) {
        console.log(`Congrats ${candidateName} you are eligible for TCS interview`);
        
    } else {
         console.log(`Sorry. ${candidateName} you are not eligible for TCS interview`);
    }
}
tcsInterview(80, 86, 90, "Stew");   