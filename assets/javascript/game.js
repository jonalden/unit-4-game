//Make variables for win/loss counters

let wins = 0;
let losses = 0;
let goalNumber = randomNumber();

//assign each button a different random number, 1 - 12
const akuma = document.getElementById("akuma");
const ken = document.getElementById("ken");
const chunLi = document.getElementById("chun-li");
const bison = document.getElementById("bison");

function randomButtonNumber() {
    return(Math.floor(Math.random() * 12) + 1);
}

ken.setAttribute("value", randomButtonNumber());
akuma.setAttribute("value", randomButtonNumber());
chunLi.setAttribute("value", randomButtonNumber());
bison.setAttribute("value", randomButtonNumber());

//create an onClick event listener for each button 
    
//make the id=total-score display the sum of all button presses 

//assign the id=random-number a random number, 19 - 120 and display it

const randomNumberHTML = document.getElementById("random-number");

function randomNumber() {
    return(Math.floor(Math.random() * 101) + 19);
}

console.log(goalNumber);

randomNumberHTML.textContent = goalNumber;


//if id=total-score equals random number, alert winner, wins++, and assign new random numbers
   
/*if id=total-score is higher than random number, alert loser, losses++, 
    and assign new random numbers*/

    



