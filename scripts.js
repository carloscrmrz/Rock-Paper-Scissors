let playerScore = 0;
let computerScore = 0;


const RPSARRAY = ['Rock','Paper','Scissors'];

function computerPlay() {
	return RPSARRAY[Math.floor((Math.random() * RPSARRAY.length))];
}


/* Here we create a function to see who wins the game, to separate and encapsulate the various cases so the round function is easier to read */

function getWinner(selectionP, selectionC) {
	if (( selectionP == 'rock' && selectionC == 'scissors' ) || 
	    ( selectionP == 'scissors' && selectionC == 'paper' ) ||
	    ( selectionP == 'paper' && selectionC == 'rock' ) ) {
		return 'player'
	} else if ( selectionP == selectionC ) {
		return 'tie'
	} else {
		return 'computer'
	}
}


function playRound(playerSelection, computerSelection) {
	computerSelection = computerPlay().toLowerCase();
	playerSelection = prompt('Write out your play to win against the evil computer!').toLowerCase();
	let roundWinner = getWinner(playerSelection, computerSelection);

	if ( roundWinner == 'player' ) {
		console.log(`${playerSelection} beats ${computerSelection}.`);
	} else if ( roundWinner == 'computer' ) {
		console.log(`${computerSelection} beats ${playerSelection}`);
	}
	updateScore(roundWinner);
}



function updateScore(winner) {
	if ( winner == 'player' ) {
		playerScore++;
		console.log('You won this round!');
	} else if ( winner == 'computer' ) {
		computerScore++;
		console.log('That MF won this round, but not the war!');
	} else {
		console.log('No one won, but we will get that bunch of transistors next time!');
	}
}

function game() {
	for ( let i = 1; i < 6; i++ ) { 
		playRound();	
	}
	

	if ( playerScore > computerScore ) { 
		return "WE'RE THE MF CHAMPIONS!!!!!"
	} else {
		return "Well, we did what we could, we'll do it better next time"
	}
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
}

