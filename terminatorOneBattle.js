// ==============================================================================
// Terminator One Battle
// ==============================================================================

const playerHealth = document.querySelector('.playerHealth');
const terminatorOneHealth = document.querySelector('.terminatorOneHealth');
const terminatorTwoHealth = document.querySelector('.terminatorTwoHealth');

const terminatorOneBattleControlsRock = document.querySelector('.terminatorOneBattleControlsRock');
const terminatorOneBattleControlsPaper = document.querySelector('.terminatorOneBattleControlsPaper');
const terminatorOneBattleControlsScissors = document.querySelector('.terminatorOneBattleControlsScissors');

const terminatorPlayOutput = document.querySelector('.terminatorPlayOutput');
const playerPlayOutput = document.querySelector('.playerPlayOutput');



// Global Variables | Terminator One
let terminatorOneDamageAmount = 40;
let terminatorTwoDamageAmount = 10;
let playerDamageAmount = 40;

let playerHealthPoints = 100;
playerHealth.innerText = playerHealthPoints;

let terminatorOneHealthPoints = 100;
terminatorOneHealth.innerText = terminatorOneHealthPoints;

let terminatorTwoHealthPoints = 100;
terminatorTwoHealth.innerText = terminatorTwoHealthPoints;


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
        }, 2000);
    });
};




async function playerSelectionOutput (playerSelection) {

    const getTerminatorSelection = await terminatorMove();

    // Player Health System
    const playerSustainDamage = () => {
        playerHealthPoints = playerHealthPoints - terminatorOneDamageAmount;
        playerHealth.innerText = playerHealthPoints;
    }

    // Terminator Health System
    const terminatorSustainDamage = () => {
        terminatorOneHealthPoints = terminatorOneHealthPoints - playerDamageAmount;
        terminatorOneHealth.innerText = terminatorOneHealthPoints;
    }

    // Terminator One Chooses Rock
    if (getTerminatorSelection === "Rock" && playerSelection === "Rock") {
        // Terminator One and Player Draw
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
    } else if (getTerminatorSelection === "Rock" && playerSelection === "Paper") {
        // Terminator One Rock Loses to Player Paper
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        terminatorSustainDamage();
    } else if (getTerminatorSelection === "Rock" && playerSelection === "Scissors") {
        // Terminator One Rock Beats Player Scissors
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        playerSustainDamage();
    }

    // Terminator One Chooses Paper
    if (getTerminatorSelection === "Paper" && playerSelection === "Rock") {
        // Terminator One Paper Beats to Player Rock
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        playerSustainDamage();
    } else if (getTerminatorSelection === "Paper" && playerSelection === "Paper") {
        // Terminator One and Player Draw
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
    } else if (getTerminatorSelection === "Paper" && playerSelection === "Scissors") {
        // Terminator One Paper Loses to Player Scissors
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        terminatorSustainDamage();
    }

    // Terminator One Chooses Scissors
    if (getTerminatorSelection === "Scissors" && playerSelection === "Rock") {
        // Terminator One Scissors Loses to Player Rock
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        terminatorSustainDamage();
    } else if (getTerminatorSelection === "Scissors" && playerSelection === "Paper") {
        // Terminator One Scissors Beats Player Paper
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
        playerSustainDamage();
    } else if (getTerminatorSelection === "Scissors" && playerSelection === "Scissors") {
        // Terminator One and Player Draw
        terminatorPlayOutput.innerText = `Terminator has picked ${getTerminatorSelection}`;
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



// ==============================================================================
// Terminator Two Battle
// ==============================================================================

const playerGuessForm = document.querySelector('#playerGuessForm');
const terminatorTwoRandomNumberOutput = document.querySelector('.terminatorTwoRandomNumberOutput');
const terminatorTwoPlayOutput = document.querySelector('.terminatorTwoPlayOutput');
const playerNumberGuess = document.querySelector('.playerNumberGuess');

let terminatorCode;

playerGuessForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let playerGuess = playerGuessInput.value;
    playerVsTerminatorLogic(playerGuess);
});

const randomNumberGenerator = () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

// T-1000 Random Number Generate
async function terminatorTwoRandomNumberGenerate () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(randomNumberGenerator());
        }, 3000);
    });
};

async function terminatorRandomNumber () {
    const terminatorRandomNumber = await terminatorTwoRandomNumberGenerate();
    terminatorTwoRandomNumberOutput.innerText = "###";
    terminatorCode = terminatorRandomNumber;
    return terminatorRandomNumber;
}

terminatorRandomNumber();

async function playerVsTerminatorLogic (playerGuess) {
    if (playerGuess < terminatorCode) {
        terminatorTwoPlayOutput.innerHTML = "Terminator Code is greater than Player Guess";
    } else if (playerGuess > terminatorCode) {
        terminatorTwoPlayOutput.innerHTML = "Terminator Code is less than Player Guess";
    } else if (playerGuess = terminatorCode) {
        terminatorTwoPlayOutput.innerHTML = "Terminator HACKED! Terminator Code is " + terminatorCode + "!";
    }
}