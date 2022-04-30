const resultDisplay = document.querySelector('.result-wrapper'),
      gameButtons = document.querySelector('.game-buttons').querySelectorAll('button');

let player1 = '',
    player2 = '';



function gameLogic (p1Choice, p2Choice) {
    let winner = '';
    
    if (p1Choice == 'paper' && p2Choice == 'rock') {
        return winner = "p1";
    }
    if (p1Choice == 'scissor' && p2Choice == 'paper') {
        return winner = "p1";
    }
    if (p1Choice == 'rock' && p2Choice == 'scissor') {
        return winner = "p1";
    }
    if (p1Choice == 'rock' && p2Choice == 'paper') {
        return winner = "p2";
    }
    if (p1Choice == 'paper' && p2Choice == 'scissor') {
        return winner = "p2";
    } 
    if (p1Choice == 'scissor' && p2Choice == 'rock') {
        return winner = "p2";
    }
    if (p1Choice == 'rock' && p2Choice == 'rock') {
        return winner = "draft";
    }
    if (p1Choice == 'paper' && p2Choice == 'paper') {
        return winner = "draft";
    } 
    if (p1Choice == 'scissor' && p2Choice == 'scissor') {
        return winner = "draft";
    } 
 

}

function p2Choice () {
    const rps = ['rock', 'paper', 'scissor'];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return rps[getRandomInt(3)]
}

function winnerDisp(winner) {

    if (winner === 'p1') {
        resultDisplay.innerHTML = `
        <div class="result won">
           <div class="result-value">
             <p>You Win</p>
          </div>    
        </div>
       `
    }
    if (winner === 'p2') {
        resultDisplay.innerHTML = `
        <div class="result lost">
           <div class="result-value">
             <p>You Lost</p>
          </div>    
        </div>
       `
    }
    if (winner === 'draft') {
        resultDisplay.innerHTML = `
        <div class="result draft">
           <div class="result-value">
             <p>Draft</p>
          </div>    
        </div>
       `
    }
    
} 


gameButtons[0].addEventListener('click', () => {
    player1 = 'rock';
    player2 = p2Choice();

    winner = gameLogic(player1, player2);

    winnerDisp(winner);
});
gameButtons[1].addEventListener('click', () => {
    player1 = 'paper';
    player2 = p2Choice();

    winner = gameLogic(player1, player2);

    winnerDisp(winner);
})
gameButtons[2].addEventListener('click', () => {
    player1 = 'scissor';
    player2 = p2Choice();

    winner = gameLogic(player1, player2);

    winnerDisp(winner);
})







