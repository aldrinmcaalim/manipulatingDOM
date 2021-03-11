playGame(userPlay(), computerPlay());

function userPlay() {
    let userChoice = prompt(`Select Rock, Paper, or Scissors`);
    userChoice = userChoice.toLowerCase();
    userChoice = userChoice[0].toUpperCase() + userChoice.slice(1);
    return userChoice;
}

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        computerChoice = 'Rock';
    } else if (computerChoice === 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

function playGame(user, computer) {
    if (user === 'Rock' && computer === 'Paper') {
        console.log(`User lost! ${user} doesn't beat ${computer}`);
    } else if (user === 'Rock' && computer === 'Scissors') {
        console.log(`User wins! ${user} beats ${computer}`);
    } else if (user === 'Paper' && computer === 'Rock') {
        console.log(`User wins! ${user} beats ${computer}`);
    } else if (user === 'Paper' && computer === 'Scissors') {
        console.log(`User lost! ${user} doesn't beat ${computer}`);
    } else if (user === 'Scissors' && computer === 'Rock') {
        console.log(`User lost! ${user} does not beat ${computer}`);
    } else if (user === 'Scissors' && computer === 'Paper') {
        console.log(`User wins! ${user} beats ${computer}`);
    } else {
        console.log(`It's a tie! ${user} and ${computer} are equal!`);
    }
}

// if (userPlay() === 'Rock' && computerPlay() === 'Paper') {
//     console.log(`User lost! ${userPlay()} doesn't beat ${computerPlay()}`);
// } else if (userPlay() === 'Rock' && computerPlay() === 'Scissors') {
//     console.log(`User wins! ${userPlay()} beats ${computerPlay()}`);
// } else if (userPlay() === 'Paper' && computerPlay() === 'Rock') {
//     console.log(`User wins! ${userPlay()} beats ${computerPlay()}`);
// } else if (userPlay() === 'Paper' && computerPlay() === 'Scissors') {
//     console.log(`User lost! ${userPlay()} doesn't beat ${computerPlay()}`);
// } else if (userPlay() === 'Scissors' && computerPlay() === 'Rock') {
//     console.log(`User lost! ${userPlay()} does not beat ${computerPlay()}`);
// } else if (userPlay() === 'Scissors' && computerPlay() === 'Paper') {
//     console.log(`User wins! ${userPlay()} beats ${computerPlay()}`);
// } else {
//     console.log(`It's a tie! ${userPlay()} and ${computerPlay()} are equal!`);
// }

// let userChoice = prompt(`Select Rock, Paper, or Scissors`);
// userChoice = userChoice.toLowerCase();
// userChoice = userChoice[0].toUpperCase() + userChoice.slice(1);

// let computerChoice = Math.floor(Math.random() * 3) + 1;


// if (computerChoice === 1) {
//     computerChoice = 'Rock';
// } else if (computerChoice === 2) {
//     computerChoice = 'Paper';
// } else {
//     computerChoice = 'Scissors';
// }


// if (userChoice === 'Rock' && computerChoice === 'Paper') {
//     console.log(`User lost! ${userChoice} doesn't beat ${computerChoice}`);
// } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
//     console.log(`User wins! ${userChoice} beats ${computerChoice}`);
// } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
//     console.log(`User wins! ${userChoice} beats ${computerChoice}`);
// } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
//     console.log(`User lost! ${userChoice} doesn't beat ${computerChoice}`);
// } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
//     console.log(`User lost! ${userChoice} does not beat ${computerChoice}`);
// } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
//     console.log(`User wins! ${userChoice} beats ${computerChoice}`);
// } else {
//     console.log(`It's a tie! ${userChoice} and ${computerChoice} are equal!`);
// }

