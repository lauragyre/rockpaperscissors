let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let announce = document.querySelector('#announce');


let computerPlay = function () {
    let computerPick = Math.floor(Math.random()*3);
    if (computerPick === 0) {
        computerPick = 'rock';
    } else if (computerPick === 1) {
        computerPick = 'paper';
    } else {
        computerPick = 'scissors';
    }
    return computerPick;
}

/*let playerPlay = function() {
    let temp = window.prompt('Please enter rock, paper, or scissors!');
    return temp.toLowerCase();
} */

let computerScore = 0;
let playerScore = 0;

let winner = function (computerPlay, playerSelection) {
    announce.innerHTML = `Computer played ${computerPlay}, you played ${playerSelection}.`;
    if (computerPlay === playerSelection) {
        explain.innerHTML = 'Tie! Try again.'
    }
    else if (computerPlay === 'rock') {
        if (playerSelection === 'paper') {
            playerScore ++;
            explain.innerHTML = 'You win! Paper beats rock!'
        }
        else {
            computerScore ++;    
            explain.innerHTML = 'Computer wins! Rock beats scissors!'
        }
    }
    else if (computerPlay === 'paper') {
        if (playerSelection === 'scissors') {
            playerScore ++;
            explain.innerHTML = 'You win! Scissors beat paper!';
        }
        else {
            computerScore ++;
            explain.innerHTML = 'Computer wins! Paper beats rock!';
        }
    }
    else {
        if (playerSelection === 'rock') {
            playerScore ++;
            explain.innerHTML = 'You win! Rock beats scissors!'
        }
        else {
            computerScore ++;
            explain.innerHTML = 'Computer wins! Scissors beat paper!'
        }
    }

}



/* let game = function () {
    for (let i = 0; i < 5; i++) {
        console.log(winner(computerPlay(), playerPlay()));
    }
    if (playerScore > computerScore) {
        console.log('Player won ' + playerScore + ', computer won ' + computerScore + '. Player wins the tournament!' );
    }
    else if (computerScore > playerScore) {
        console.log('Computer won ' + computerScore + ', player won ' + playerScore + '. Computer wins the tournament!' );
    }
    else {
        console.log('Five games played, but due to ties there is no clear tournament winner.');
    }
} */

rock.addEventListener('click', ()=> {winner(computerPlay(), 'rock');});
rock.addEventListener('click', () => {rock.style.opacity = "65%";
paper.style.opacity = "100%"; scissors.style.opacity = "100%";
});

paper.addEventListener('click', ()=> {winner(computerPlay(), 'paper');});
paper.addEventListener('click', () => {paper.style.opacity = "65%";
rock.style.opacity = "100%"; scissors.style.opacity = "100%";
});

scissors.addEventListener('click', ()=> {winner(computerPlay(), 'scissors');});
scissors.addEventListener('click', () => {scissors.style.opacity = "65%";
paper.style.opacity = "100%"; rock.style.opacity = "100%";
});
//game();

