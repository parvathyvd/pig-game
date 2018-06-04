/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores = [0, 0];

var roundScore = 0;

var activePlayer = 0;

document.querySelector('.dice').style.display = "none";
document.getElementById('score-0').innerHTML = 0;
document.getElementById('score-1').innerHTML = 0;
document.getElementById('current-0').innerHTML = 0;
document.getElementById('current-1').innerHTML = 0;



var rolldice = document.querySelector('.btn-roll');

rolldice.addEventListener('click', function(){

    var dice = Math.floor(Math.random()*6) + 1;

    console.log(dice);

    document.querySelector('.dice').style.display = "block";


    var diceImage = document.querySelector('.dice');

    diceImage.src = 'dice-'+dice+'.png';



    if(dice!== 1){

    roundScore += dice;

    document.getElementById('current-'+activePlayer).innerHTML = dice;


    }
    else{
        
        setActivePlayer();

    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){


    scores[activePlayer] += roundScore;

    document.getElementById('score-'+activePlayer).innerHTML = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        document.querySelector('#name-'+activePlayer).textContent = "Winner";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');

    }
    else{
        setActivePlayer();

    }





});

function setActivePlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;

    document.getElementById('current-0').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}