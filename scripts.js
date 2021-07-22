/*
function resetGame() {
	playerScore = 0;
	computerScore = 0;
}
*/

function create_image(src, alt, where) {
	var img = document.createElement("img");
	img.alt = alt;
	img.src = src;
	img.setAttribute('style', 'max-height: 600px; max-width: 400px; margin: 0 0 10px 0;');
	where.appendChild(img);

	document.querySelector(".score-board").style.margin = '0';
}

let playerScore = 0;
let computerScore = 0;
const cScoreText = document.querySelector('#cScore');
const pScoreText = document.querySelector('#pScore');
const winnerImg = document.querySelector('#winner-img');
const startGame = document.querySelector('#start-game');

const RPSARRAY = ['Rock','Paper','Scissors'];

function computerPlay() {
	return RPSARRAY[Math.floor((Math.random() * RPSARRAY.length))];
} 


function playGame() {
	
	playerScore = 0;
	computerScore = 0;

	const buttons = document.querySelectorAll(".btn");
	buttons.forEach(btn => btn.addEventListener('click', playRound));
	
		if ( playerScore == 5 || computerScore == 5 ) {
			buttons.forEach(btn => btn.removeEventListener('click', playRound));
			document.querySelector('.btn').style.cursor = 'not-allowed';

			if (playerScore > computerScore) {
				create_image('./media/GANASTE.png', "You're the MF winner", winnerImg);
			} else {
				create_image('./media/PERDISTE.png', "We lost the battle", winnerImg);
			}
		startGame.innerText = "Play again?";
	}
	
}

function getWinner(pSelect, cSelect) {
	if (( pSelect == 'rock' && cSelect == 'scissors') || 
            ( pSelect == 'scissors' && cSelect == 'paper') || 
	    ( pSelect == 'paper' && cSelect == 'rock' )) {
		return 'player'
	} else if (pSelect == cSelect) {
		return 'tie'
	} else {
		return 'computer'
	}
}


function playRound() {
	computerSelection = computerPlay().toLowerCase();
	playerSelection = this.dataset.play;

	roundWinner = getWinner(playerSelection, computerSelection);
	
	/*
	const winnerMsg = document.createElement('p');
	if ( roundWinner == 'player' ) {
		winnerMsg.innerText = `YOU win this round! ${playerSelection} beats ${computerSelection}`;
	} else {
		winnerMsg.innerText = `That machine has played us fools! ${computerSelection} beats ${playerSelection}`
	}
	*/
	

	updateScore(roundWinner);
}

function updateScore(winner) {
	if (winner == 'player') { playerScore++; pScoreText.innerText = `YOU - ${playerScore}`; }
	else if (winner == 'computer') { computerScore++; cScoreText.innerText = `COMPUTER - ${computerScore}`; }
	else return;
}


startGame.addEventListener('click', playGame());
