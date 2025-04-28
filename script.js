let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const CHOICES_AMOUNT = 3;
    let choiceInt;
    
    choiceInt = Math.floor(Math.random() * CHOICES_AMOUNT);
    
    switch (choiceInt) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            break;
    }
}
                
function getHumanChoice() {
    let humanChoice;
    
    humanChoice = prompt('Please enter your choice: rock, paper, or scissors').toLowerCase();
    
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')) {
        humanScore++;
        return 'Player wins!';
    };
    
    if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'rock')) {
        computerScore++;
        return 'Computer wins!';
    }
    
    return 'Error';
}

// console.log(playGame());

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanSelection = button.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);

        console.log(`Player chose ${humanSelection}`);
        console.log(`Computer chose ${computerSelection}`);
        console.log(roundResult);
        console.log(`Current score: Player ${humanScore} - Computer ${computerScore}`);
    });
});