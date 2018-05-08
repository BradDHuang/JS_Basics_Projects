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

var lastDice; // the dice before current one.

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
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        // console.log(dice);
    
        var diceDOM = document.querySelector(".dice");
        var diceDOM2 = document.querySelector(".dice2");
        diceDOM.style.display = "block";
        diceDOM2.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png"; // img src="dice-5.png" // Loading the pic. takes "some" time!
        diceDOM2.src = "dice-" + dice2 + ".png"; 
    
        if (lastDice === 6 && dice === 6) {
            
            scores[activePlayer] = 0;
            
            document.querySelector("#score-" + activePlayer).textContent = "0";
            switchToNextPlayer();
        // } else if (dice !== 1) {
        } else if (dice !== 1 && dice2 !== 1) {
            
            // roundScore += dice;
            roundScore += (dice + dice2);
            
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            
            // console.log(dice);
            
            switchToNextPlayer();
        }   
        
        lastDice = dice;
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
        var input = document.querySelector(".winning-score").value; 
        // console.log(input);
        var winningScore;
        // undefined, 0, null or "" are coerced to false!
        if (input) {
            winningScore = input;
        } else {
            winningScore = 20;
        }
        
        // if (scores[activePlayer] >= 20) {
        if (scores[activePlayer] >= winningScore) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".dice2").style.display = "none";
            
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
    
    lastDice = 0;
    
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
    document.querySelector(".dice2").style.display = "none";
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
    
    lastDice = 0;
    
    document.querySelector(".dice").style.display = "none"; // class="dice", the dice will not be displayed.
    document.querySelector(".dice2").style.display = "none"; 
    
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

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player loses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
   (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. 
   (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player loses his current score when one of them is a 1. 
   (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/








