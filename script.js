let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const CHOICES = ['rock', 'paper', 'scissors']
    let choiceInt;
    
    choiceInt = Math.floor(Math.random() * CHOICES.length);
    
    return CHOICES[choiceInt];
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

const score = document.querySelector('.score');
const resultBoard = document.querySelector('.round-result');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanSelection = button.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);

        score.textContent = 'Player ' + humanScore + ' - Computer ' + computerScore;
        resultBoard.textContent = roundResult;

        if (humanScore === 5 || computerScore === 5) {
            buttons.forEach((button) => {
                button.style.display = 'none';
            })
        }
    });
});
