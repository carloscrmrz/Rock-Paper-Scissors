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
const buttons = document.querySelectorAll(".btn");
const RPSARRAY = ['Rock','Paper','Scissors'];
const winnerMsg = document.createElement('p');

document.querySelector(".header").appendChild(winnerMsg);


function computerPlay() {
	return RPSARRAY[Math.floor((Math.random() * RPSARRAY.length))];
} 



buttons.forEach(btn => 
	{btn.addEventListener('click', () => {

		playRound(btn.dataset.play);
		if ( computerScore === 5 || playerScore === 5 ) {
			declareWinner();
			startGame.innerText = "Play again?";
			startGame.addEventListener('click', () => {
				computerScore = 0;
				playerScore = 0;
				winnerImg.removeChild(winnerImg.getElementsByTagName("img")[0]);
				pScoreText.innerText = `YOU - ${playerScore}`;
				cScoreText.innerText = `COMPUTER - ${computerScore}`;
				startGame.innerText = "Let's do this";
				winnerMsg.innerText = '';
			});
		}
	
	})
	});


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


function playRound(playerSelection) {
	computerSelection = computerPlay().toLowerCase();

	roundWinner = getWinner(playerSelection, computerSelection);
	
	if ( roundWinner == 'player' ) {
		winnerMsg.innerText = `YOU win this round! ${playerSelection} beats ${computerSelection}`;
	} else if ( roundWinner == 'computer' ) {
		winnerMsg.innerText = `That machine has played us fools! ${computerSelection} beats ${playerSelection}`;
	} else {
		winnerMsg.innerText = `That was a tie`;
	}
	
	

	updateScore(roundWinner);
}

function updateScore(winner) {
	if (winner == 'player') { playerScore++; pScoreText.innerText = `YOU - ${playerScore}`; }
	else if (winner == 'computer') { computerScore++; cScoreText.innerText = `COMPUTER - ${computerScore}`; }
	else return;
}

function declareWinner() {
	if (playerScore > computerScore) {
		create_image('./media/GANASTE.png', "You saved the human race", winnerImg);
	} else {
		create_image('./media/PERDISTE.png', "Well, we've lost", winnerImg);
	}
}


