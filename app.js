let userChoice = prompt(`Select Rock, Paper, or Scissors`);
userChoice = userChoice.toLowerCase();
userChoice = userChoice[0].toUpperCase() + userChoice.slice(1);

let computerChoice = Math.floor(Math.random() * 3) + 1;


if (computerChoice === 1) {
    computerChoice = 'Rock';
} else if (computerChoice === 2) {
    computerChoice = 'Paper';
} else {
    computerChoice = 'Scissors';
}


if (userChoice === 'Rock' && computerChoice === 'Paper') {
    console.log(`User lost! ${userChoice} doesn't beat ${computerChoice}`);
} else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
    console.log(`User wins! ${userChoice} beats ${computerChoice}`);
} else if (userChoice === 'Paper' && computerChoice === 'Rock') {
    console.log(`User wins! ${userChoice} beats ${computerChoice}`);
} else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
    console.log(`User lost! ${userChoice} doesn't beat ${computerChoice}`);
} else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
    console.log(`User lost! ${userChoice} does not beat ${computerChoice}`);
} else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
    console.log(`User wins! ${userChoice} beats ${computerChoice}`);
} else {
    console.log(`It's a tie! ${userChoice} and ${computerChoice} are equal!`);
}

