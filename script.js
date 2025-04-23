
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

function playGame() {
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
    
    let humanScore = 0;
    let computerScore = 0;
                    
    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
                        
        console.log(`Player chose ${humanSelection}`);
        console.log(`Computer chose ${computerSelection}`);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Current score: Player ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore === computerScore) {
        return "It's a tie!";
    }

    if (humanScore > computerScore) {
        return 'Player wins!';
    }

    if (computerScore > humanScore) {
        return 'Computer wins!';
    }
}

console.log(playGame());