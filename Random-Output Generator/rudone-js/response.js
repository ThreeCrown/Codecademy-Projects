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
    //Array Storage
    sendIt: {
        /* Commented out the intro section until prompting is worked out.
        introPrompt: {
            welcomeArray: [

            ],
            questionPrompt: [

            ]
        },*/
        response1: { //This contains the initial reaction text to the scores.
            lazyFuck: [ //Scores between 0-20
                'Oh wow... Are you depressed?',
                'Ok, maybe do less? Ya know, cause fuck it?',
                `If you don't move soon I think you will die...`,
                'At LEAST exercise, fuck.',
                'Well if you give up here, I might as well.'
            ],
            distracted: [ //Scores between 20-40
                'Yo, my guy! Are you a fuckin squirrel?',
                'If you zone out more, a hunter might mistake you for a deer...',
                `If you're just going to look at rabbit holes, be productive and go look at finance shit or something.`,
                `You could have written 5 pages worth of fiction for all the frolicing you're doing.`,
                'How does this make you feel about next week? Progress comfortable?'
            ],
            goodNufClub: [ //Scores between 40-60
                'Well well, looks like you can not hate yourself at least.',
                'And on the 3rd day, god rested... Wait...',
                `There's like, 63 bottles of beer left on the wall, but you know, good enough?`,
                'If no one calls you lazy, does that mean your not lazy?',
                `You're like a sub shop. Satisfying, yet unimpressive.`
            ],
            goodDay: [ //Scores between 60-80
                `Got damn, alright man. Well, there's always days where it's good to call it a day and just appreciate everything.`,
                `If you stop now, you could MOST likely be happy.`,
                `Tomorrow will be EVEN BETTER!`,
                `Setting trendlines are we? ;)`,
                `Your wife would be happy.`
            ],
            holyHellLG: [ //Scores between 80-100
                `Well got damn, guess you should just play War Thunder all night!`,
                `That's how we do it, a week in a day!`,
                `A male authority figure would approve of you today.`,
                `If male authority figure would approve of you today.`,
                `If you keep this up, you'll be important.`,
                `Ok ok, let's just chill now! Nice though.`
            ]
        },
        response2: { //This contains the comprimise response text.
            hardBall: [ //Scores between 0-30 have a 60% chance for this response, and 30-100 have a 20% chance.
                `Bro, for the love of fuck at least go exercise!`,
                `Did you even brush your teeth? Just go do 4 small tasks, MAYBER it'll equal a big task.`,
                `Does someone like this survive the apocolypse? Or even just survive at all? I mean fuck dude. Go chop down a tree, or like, take a load to the dump.`,
                `For the love of fuck, get fucking moto, and get that ONE fucking thing done.`,
                `Cool no yeah, you did the shopping at least or KNOW what you need to do for the big thing... Just fucking do it? Or maybe do another thing?`
            ],
            softBall: [ //Scores between 0-30 have a 40% chance for this response, and 30-100 have ann 80% chance.
                `Alright, Alright. Now, you SEE the finish line? Just 2 more things, and you're there baby!`,
                `You're here so you might be thinking about giving up. Stay here, cause you want to be here, but do something big while you're here.`,
                `You're here so you might be thinking about giving up. Stay here, cause you want to be here, but do a couple small things before you veg.`,
                `You're here so you might be thinking about giving up. GO AWAY! Quickly before you rot! Do a couple things around the house for the wife!`,
                `You're here so you might be thinking about giving up. Man, do it. Give up, call it a day. But maybe.....?? One more big thing?.... You wont have to do much else for a few days?`
            ]
        }
    },
    getResponse: function (gennyScore) {
        if (typeof score !== "number") {
            return "Error: Shit broke.";}
        
            var response1;
            var response2;

            switch(true) {
                case (gennyScore > 0 && gennyScore <= 19):
                    response1 = this.sendIt.response1.lazyFuck[Math.floor(Math.random() * this.sendIt.response2.lazyFuck.length)];
                    response2 = Math.random() < 0.6 ?
                        this.sendIt.response2.hardBall[Math.floor(Math.random() * this.sendIt.response2.hardBall.length)]
                        : this.sendIt.response1.softBall[Math.floor(Math.random() * this.sendIt.response2.softBall)];
                    break;
                case (gennyScore >= 20 && gennyScore <= 39):
                    response1 = this.sendIt.response1.distracted[Math.floor(Math.random() * this.sendIt.response1.distracted.length)];
                    response2 = Math.random() < 0.8 ?
                        this.sendIt.response2.hardBall[Math.floor(Math.random() * this.sendIt.response2.hardBall.length)]
                        : this.sendIt.response1.softBall[Math.floor(Math.random() * this.sendIt.response2.softBall)];
                    break;
                case (gennyScore >= 40 && gennyScore <= 59):
                    response1 = this.sendIt.response1.goodNufClub[Math.floor(Math.random() * this.sendIt.response1.goodNufClub.length)];
                    response2 = Math.random() < 0.8 ?
                        this.sendIt.response2.hardBall[Math.floor(Math.random() * this.sendIt.response2.hardBall.length)]
                        : this.sendIt.response1.softBall[Math.floor(Math.random() * this.sendIt.response2.softBall)];
                    break;
                case (gennyScore >= 60 && gennyScore <= 79):
                    response1 = this.sendIt.response1.goodDay[Math.floor(Math.random() * this.sendIt.response1.goodDay.length)];
                    response2 = Math.random() < 0.8 ?
                        this.sendIt.response2.hardBall[Math.floor(Math.random() * this.sendIt.response2.hardBall.length)]
                        : this.sendIt.response1.softBall[Math.floor(Math.random() * this.sendIt.response2.softBall)];
                    break;
                case (gennyScore >= 80 && gennyScore <= 100):
                    response1 = this.sendIt.response1.holyHellLG[Math.floor(Math.random() * this.sendIt.response1.holyHellLG.length)];
                    response2 = Math.random() < 0.8 ?
                        this.sendIt.response2.hardBall[Math.floor(Math.random() * this.sendIt.response2.hardBall.length)]
                        : this.sendIt.response1.softBall[Math.floor(Math.random() * this.sendIt.response2.softBall)];
                    break;
                default: 
                    return "Error: Score generator spit out a number beyond the generation parameters"
            };

            return response1 + " " + response2;
        }
};

function runResponse() {
        console.log(fullSend.getResponse())
  };
runResponse();


