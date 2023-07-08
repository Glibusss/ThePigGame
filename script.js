'use strict';
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('score--0');
const current1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let playerOneEntity = document.querySelector('.player--0');
let playerTwoEntity = document.querySelector('.player--1');

let playerScore = 0;
let whoPlays = 0;
const totalScores = [0,0];
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');


btnRoll.addEventListener('click',function(){
    if(totalScores[whoPlays]>=100)
    return;
    
const diceNumber = Math.trunc(Math.random()*6)+1;

diceElement.classList.remove('hidden');
diceElement.src = `dice${diceNumber}.png`
let currentPlayersScore = document.getElementById(`current--${whoPlays}`);
if(diceNumber!==1){
playerScore+=diceNumber;
currentPlayersScore.textContent=playerScore;
}
else
{
    currentPlayersScore.textContent=0;
    playerScore=0;
    document.getElementById;
    whoPlays=whoPlays===1? 0:1;
    playerOneEntity.classList.toggle('player--active');
    playerTwoEntity.classList.toggle('player--active');

}
});

btnNew.addEventListener('click', function(){
document.querySelector(`.player--${whoPlays}`).classList.remove('player--winner');
document.querySelector(`.player--0`).classList.toggle('player--active');
totalScores[0]=0;
totalScores[1]=0;
whoPlays=0;
playerScore=0;
document.getElementById(`current--0`).textContent = 0;
document.getElementById(`current--1`).textContent = 0;
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

});

btnHold.addEventListener('click', function(){

    if(totalScores[whoPlays]>=100)
    return;

    document.getElementById(`current--${whoPlays}`).textContent = 0;
    let currentTotal = document.getElementById(`score--${whoPlays}`);
    totalScores[whoPlays]=Number(playerScore)+Number(totalScores[whoPlays]);
    currentTotal.textContent = totalScores[whoPlays];
    if(totalScores[whoPlays]>=100){
    document.querySelector(`.player--${whoPlays}`).classList.add('player--winner');
    document.querySelector(`.player--${whoPlays}`).classList.remove('player--active');
    return;
    }
    whoPlays = whoPlays===1? 0:1;
    playerOneEntity.classList.toggle('player--active');
    playerTwoEntity.classList.toggle('player--active');
    playerScore=0;

})