var scores, roundScore, activePlayer, gamePlaying;
init();

// ROLL DICE
document.querySelector('.btn-roll').addEventListener('click', function() {
   if (gamePlaying) {
        // 1. random number
        var dice = Math.floor(Math.random() * 6) + 1;
 
        // 2. display result
        var diceDOM =  document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'images/dice-' + dice + '.png';

        // 3. update the round score if the rolled number is not a 1
        if (dice == 1 ) {
            nextPlayer();
        }
        if (dice !== 1 ) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
   }    
});

// HOLD SCORE
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // check if score => 100
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.btn-roll').style.display = 'none';
            document.querySelector('.btn-hold').style.display = 'none';

            gamePlaying = false;
        }

        if (scores[activePlayer] < 20) {
            nextPlayer();
        }
    }
});
 
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // current score into red square
    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';

    // move active state in the another player - VERSION 2 -
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide the dice
    document.querySelector('.dice').style.display = 'none';
}

// HOLD SCORE
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    activePlayer = 0;
    roundScore = 0;
    scores = [0,0];
    gamePlaying = true;

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
}
