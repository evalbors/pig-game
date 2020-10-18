var scores, roundScore, activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

// hide dice at the beggining: changing into css property
document.querySelector('.dice').style.display = 'none';

// EVENT HANDLER
// addEventListener('first put the event type', 'second, the funtion we need as soon this event happens -without ()-, the callback function')
// callback, call a fun inside another fun
// anonimus fun will be put function() { //do st here} - without name - 
// It's perfect if ypu only use this function only once, like our dice

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// ROLL DICE
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. display result
    var diceDOM =  document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';
    
    // 3. updte the round score if the rolled number is not a 1

    if (dice == 1 ){
        nextPlayer();
    }

    if (dice !== 1 ){
        roundScore += dice;
        // in other code: roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
});

// HOLD SCORE
document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    // in other code: score[activePlayer] = scores[activePlayer] + roundScore

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // check if score => 100
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
    }
    
    if (scores[activePlayer] < 20) {
        nextPlayer();
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


// SETTER
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<strong>' + dice + '</strong>';

// GETTER
// var x = document.querySelector('#score-0').textContent;
// console.log(x);