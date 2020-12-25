const playerHealth = document.querySelector('.playerHealth');
const terminatorOneHealth = document.querySelector('.terminatorOneHealth');

const terminatorOneBattleControlsRock = document.querySelector('.terminatorOneBattleControlsRock');
const terminatorOneBattleControlsPaper = document.querySelector('.terminatorOneBattleControlsPaper');
const terminatorOneBattleControlsScissors = document.querySelector('.terminatorOneBattleControlsScissors');

const terminatorPlayOutput = document.querySelector('.terminatorPlayOutput');
const playerPlayOutput = document.querySelector('.playerPlayOutput');



// Global Variables | Terminator One
let terminatorOneDamage = 40;
let playerDamage = 40;

let playerHealthPoints = 100;
playerHealth.innerText = playerHealthPoints;

let terminatorOneHealthPoints = 100;
terminatorOneHealth.innerText = terminatorOneHealthPoints;




// Randomiser
const randomiser = () => {
    let randomiser = Math.floor(Math.random() * 3) + 1;
    if (randomiser === 1) {
        return "Rock";
    } else if (randomiser === 2) {
        return "Paper";
    } else if (randomiser === 3) {
        return "Scissors";
    }
};



// T-800 Model 101 Rock Paper Scissors Element
async function terminatorMove () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(randomiser());
        }, 0);
    });
};



async function playerSelectionOutput (playerSelection) {
    const getTerminatorSelection = await terminatorMove();

    // Terminator One Chooses Rock
    if (getTerminatorSelection === "Rock" && playerSelection === "Rock") {
        // Terminator One and Player Draw
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        console.log("Draw!");
    } else if (getTerminatorSelection === "Rock" && playerSelection === "Paper") {
        // Terminator One Rock Loses to Player Paper
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        console.log("Terminator Loses To Player");
    } else if (getTerminatorSelection === "Rock" && playerSelection === "Scissors") {
        // Terminator One Rock Wins Player Scissors
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        console.log("Terminator Defeats Player");
    }

    // Terminator One Chooses Paper
    if (getTerminatorSelection === "Paper" && playerSelection === "Rock") {
        // Terminator One Rock Loses to Player Paper
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        console.log("Terminator Defeats Player");
    } else if (getTerminatorSelection === "Paper" && playerSelection === "Paper") {
        // Terminator One Rock Loses to Player Paper
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        console.log("Draw!");
    } else if (getTerminatorSelection === "Paper" && playerSelection === "Scissors") {
        // Terminator One Rock Loses to Player Paper
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        console.log("Terminator Loses To Player");
    }

    // Terminator One Chooses Scissors
    if (getTerminatorSelection === "Scissors" && playerSelection === "Rock") {
        // Terminator One Rock Loses to Player Paper
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        console.log("Terminator Loses To Player");
    } else if (getTerminatorSelection === "Scissors" && playerSelection === "Paper") {
        // Terminator One Rock Loses to Player Paper
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        console.log("Terminator Defeats Player");
    } else if (getTerminatorSelection === "Scissors" && playerSelection === "Scissors") {
        // Terminator One Rock Loses to Player Paper
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        console.log("Draw!");
    }
}



// Player VS T-100 Move | Rock
terminatorOneBattleControlsRock.addEventListener('click', () => {
    const playerSelection = "Rock";
    playerPlayOutput.innerText = "ROCK!"
    playerSelectionOutput(playerSelection);
});

// Player VS T-100 Move | Paper
terminatorOneBattleControlsPaper.addEventListener('click', () => {
    const playerSelection = "Paper";
    playerPlayOutput.innerText = "PAPER!"
    playerSelectionOutput(playerSelection);
});

// Player VS T-100 Move | Scissors
terminatorOneBattleControlsScissors.addEventListener('click', () => {
    const playerSelection = "Scissors";
    playerPlayOutput.innerText = "SCISSORS!"
    playerSelectionOutput(playerSelection);
});




// Player Health System
const playerHealthSystem = () => {
    playerHealthPoints = playerHealthPoints - terminatorOneDamage;
    playerHealth.innerText = playerHealthPoints;
}



// Terminator Health System
const terminatorHealthSystem = () => {
    terminatorOneHealthPoints = terminatorOneHealthPoints - playerDamage;
    terminatorOneHealth.innerText = terminatorOneHealthPoints;
}


