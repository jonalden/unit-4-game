//Make variables for win/loss counters

let wins = 0;
let losses = 0;
let goalNumber = randomNumber();
let userScore = 0;
let clicked;

// assign random mumber to each character input 
let ken = randomButtonNumber();
let akuma = randomButtonNumber();
let chunLi = randomButtonNumber();
let bison = randomButtonNumber();

// reset function to reset to defaults after win/loss
function reset() {
    goalNumber = randomNumber();
    randomNumberHTML.innerText = "GoalNumber: " + goalNumber;
    userScore = 0;
    winsDisplay.innerText = "Wins: " + wins;
    lossesDisplay.innerText = "Losses: " + losses;
    userScoreDisplay.innerText = userScore;
    clicked;

    ken = randomButtonNumber();
    akuma = randomButtonNumber();
    chunLi = randomButtonNumber();
    bison = randomButtonNumber();
};

//grabbing the HTML element and assigning each button a click function to call that value
let kenButton = document.getElementById("ken").addEventListener("click", function () {
    clicked = "ken";
    totalScore(clicked);
});

let chunLiButton = document.getElementById("chun-li").addEventListener("click", function () {
    clicked = "chunLi";
    totalScore(clicked);
});

let akumaButton = document.getElementById("akuma").addEventListener("click", function () {
    clicked = "akuma";
    totalScore(clicked);
});

let bisonButton = document.getElementById("bison").addEventListener("click", function () {
    clicked = "bison";
    totalScore(clicked);
});

// creating random number for each button
function randomButtonNumber() {
    return (Math.floor(Math.random() * 12) + 1);
};

// creating random number for goal score
function randomNumber() {
    return (Math.floor(Math.random() * 101) + 19);
};

// adding the sum of the button presses to the userScore
function totalScore(clicked) {


    if (clicked === "ken") {

        userScore += ken;
        console.log(userScore);
        userScoreDisplay.textContent = userScore;
        checkWin();


    }
    else if (clicked === "akuma") {

        userScore += akuma;
        console.log(userScore);
        userScoreDisplay.textContent = userScore;
        checkWin();
    }
    else if (clicked === "chunLi") {

        userScore += chunLi;
        console.log(userScore);
        userScoreDisplay.textContent = userScore;
        checkWin();

    }
    else if (clicked === "bison") {

        userScore += bison;
        console.log(userScore);
        userScoreDisplay.textContent = userScore;
        checkWin();
    }

};

//grabbing the HTML elements to display on the page
const userScoreDisplay = document.getElementById("user-score");
const randomNumberHTML = document.getElementById("random-number");
const winsDisplay = document.getElementById("wins");
const lossesDisplay = document.getElementById("losses");
console.log(goalNumber);

//assigns text to the goal number div
randomNumberHTML.textContent = "Goal Number: " + goalNumber;


//setting the win / loss conditions
function checkWin() {

    if (userScore === goalNumber) {
        wins++;
        alert("You Win!");
        reset();

    }
    else if (userScore > goalNumber) {
        losses++;
        alert("You Lose");
        reset();
    }
};







