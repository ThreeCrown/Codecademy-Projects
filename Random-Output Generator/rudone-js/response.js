/* This project is not complete.
    In lieu of manual entry to calculate score, a random score is generated each refresh for both task inputs.
    Planned Functionality: 
    -Entering in tasks completed manually.
    -Refreshing automatically after hitting the done button.
*/

//Random Score Generator
function gennyScore() {
    //Generates hardShit score
    var rando1 = Math.floor(Math.random() * 2) + 1;
    var hardShitScore = rando1 * 30;

    //Generates basicShit score
    var rando2 = Math.floor(Math.random() * 10) + 1;
    var basicShitScore = rando2 * 10;

    return hardShitScore + basicShitScore;
}

//Response Engine Object
var fullSend = {
    

}