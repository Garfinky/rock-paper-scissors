function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let answer = prompt("Choose rock, paper or scissors: ");
    return answer;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    function playRound(humanChoice, computerChoice){
        const clean = humanChoice.toLowerCase();
        if (clean === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (clean === "scissors" && computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (clean === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else if (clean === "rock" && computerChoice === "paper"){
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else if (clean === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beat Paper!");
            computerScore++;
        } else if (clean === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beat Paper!");
            humanScore++;
        } else if (clean === computerChoice) {
            console.log("It's a draw!");
        } else {
            console.log("Invalid choice. Round forfeited.");
            computerScore++;
        }
    }

    for(let i = 1; i <= rounds; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`\nRound ${i}:`);
        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("\nFinal Results:");
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
