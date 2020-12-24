const terminatorOneHealth = document.querySelector('.terminatorOneHealth');
const terminatorOneBattleControlsRock = document.querySelector('.terminatorOneBattleControlsRock');
const terminatorOneBattleControlsPaper = document.querySelector('.terminatorOneBattleControlsPaper');
const terminatorOneBattleControlsScissors = document.querySelector('.terminatorOneBattleControlsScissors');
const playerHealth = document.querySelector('.playerHealth');



// Global Variables
let playerHealthPoints = 100;
playerHealth.innerText = playerHealthPoints;

let terminatorOneHealthPoints = 100;
terminatorOneHealth.innerText = terminatorOneHealthPoints;



// Randomiser
const randomiser = () => {
    let randomiser = Math.floor(Math.random() * 3) + 1;
    if (randomiser === 1) {
        return 1;
    } else if (randomiser === 2) {
        return 2;
    } else if (randomiser === 3) {
        return 3;
    }
};



// T-800 Model 101 Rock Paper Scissors Element
const terminatorMove = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(randomiser());
        }, 3000);
    });
};



async function playerSelectionOutput () {
    const getTerminatorOutput = await terminatorMove();
    if (getTerminatorOutput === 1) {
        console.log("Terminator has picked ROCK!");
    } else if (getTerminatorOutput === 2) {
        console.log("Terminator has picked PAPER!");
        playerHealthSystem();
    } else if (getTerminatorOutput === 3) {
        console.log("Terminator has picked SCISSORS!");
        terminatorHealthSystem();
    }
}



// Player VS T-100 Move
terminatorOneBattleControlsRock.addEventListener('click', () => {
    playerSelectionOutput();
});




// Player Health System
const playerHealthSystem = () => {
    playerHealthPoints = playerHealthPoints - 40;
    playerHealth.innerText = playerHealthPoints;
}



// Terminator Health System
const terminatorHealthSystem = () => {
    terminatorOneHealthPoints = terminatorOneHealthPoints - 40;
    terminatorOneHealth.innerText = terminatorOneHealthPoints;
}


