/*
GAME RULES:

- The game has 2 players, playing in rounds.
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score.
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. 
- After that, it's the next player's turn.
- The first player to reach 20 points on GLOBAL score wins the game.
*/



var scores, roundScore, activePlayer;

var gamePlaying; // State var.

// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;
init();

// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// var x = document.querySelector("#score-0").textContent; // id="score-0"
// console.log(x);

// https://developer.mozilla.org/en-US/docs/Web/Events

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        
        // console.log(dice);
    
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png"; // img src="dice-5.png" // Loading the pic. takes "some" time!
    
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            
            // console.log(dice);
            
            switchToNextPlayer();
        }    
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= 20) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        
            document.querySelector(".dice").style.display = "none";
            
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            
            gamePlaying = false;
        
        } else {
            switchToNextPlayer();
        }
    }
});

// DRY
function switchToNextPlayer() {
    // ternary operator.
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    
    // class="player-0-panel active"
    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active"); 
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
}

// document.querySelector(".btn-new").addEventListener('click', function() {
//     init();
// });
document.querySelector(".btn-new").addEventListener("click", init); // Callback func.

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    
    gamePlaying = true;
    
    document.querySelector(".dice").style.display = "none"; // class="dice", the dice will not be displayed.
    
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}








