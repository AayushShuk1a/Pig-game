'use strict';

//selecting elements
const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const dice=document.querySelector('.dice');
const diceroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');
const currentscore0=document.querySelector('#current--0');
const currentscore1=document.querySelector('#current--1');
const section0=document.querySelector('.player--0');
const section1=document.querySelector('.player--1');
const btnnew=document.querySelector('.btn--new');

//game start
let sum,totalscore=[0,0],activeplayer,playing;
const init=function(){
    score0.textContent=Number(0);
score1.textContent=Number(0);
dice.classList.add('hidden');
sum=0;totalscore[0,0];
playing=true;activeplayer=0;
section0.classList.add('player--active');
    section1.classList.remove('player--active');
    currentscore0.textContent=0;
    currentscore1.textContent=0;
    section0.classList.remove('player--winner');
    section1.classList.remove('player--winner');

}
init();




const playerchange=function(){
    section0.classList.toggle('player--active');
    section1.classList.toggle('player--active');
        document.getElementById(`current--${activeplayer}`).textContent=0;
        activeplayer=activeplayer===0?1:0;
        sum=0;

}
const rolldice=function(){
    
    const random=Math.floor(Math.random()*6+1);
    dice.src='dice-'+random+'.png';
    dice.classList.remove('hidden');
    
    if(random===1){  playerchange(); }
    else{
        sum=Number(sum+random);
        document.getElementById(`current--${activeplayer}`).textContent=sum;
    }


}

diceroll.addEventListener('click',function(){
    if(playing)
    rolldice();
    
});

btnhold.addEventListener('click',function(){
    if(playing)
    {
    totalscore[activeplayer]=Number(totalscore[activeplayer])+sum;
        document.getElementById(`score--${activeplayer}`).textContent=totalscore[activeplayer];
        if(totalscore[activeplayer]>=100){
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
            playing=false;   
        }
        else{
            playerchange(); 
        }
    }
      
});

btnnew.addEventListener('click',init);





