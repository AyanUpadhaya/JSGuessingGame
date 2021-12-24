// requirements
let btn = document.getElementById('input-btn');
let preGuess =document.querySelector('.pre-guess');
let preGuessList =[];
let resultText =document.querySelector('.result');

// new game button
const newGame = document.querySelector('.new-game'); 

/**
 * Guessing game in vanila Javascript
 * My youtube channel: Code Tech
 * url: https://www.youtube.com/channel/UCsjnvE4i5Z-VR-lWhODX99w
 **/
 
//Generating random number 
let computer = Math.floor((Math.random()*20)+1);

//prevents useer submitting form by Enter click
function checkEnter(e){
 e = e || event;
 var txtArea = /textarea/i.test((e.target || e.srcElement).tagName);
 return txtArea || (e.keyCode || e.which || e.charCode || 0) !== 13;
}
document.querySelector('form').onkeypress = checkEnter;
//-----------------------------------------

//click to start the game
btn.addEventListener('click',game);

//game logic
function game(){
    let guess = document.getElementById('input-guess');

    if(isNaN(guess.value) || guess.value.length == 0 ||guess.value>20){
        document.querySelector('.new-game').style.display='block';

        return resultText.innerText = "Wrong Answer, Try Again";
        
    }else{
        newGame.style.display='none';
        preGuessList.push(guess.value);
        preGuess.innerText= preGuessList.join(',');
         if (guess.value==computer){
            guess.style.display='none';
            btn.style.display='none';
            newGame.style.display='block';
            return resultText.innerText = "You are correct, Game Over";
        }

        if (preGuessList.length==5){
            guess.style.display='none';
            btn.style.display='none';
            newGame.style.display='block';

            return resultText.innerText = `Out of moves, Game Over, Number was ${computer}`;
        }

        if (guess.value>computer){
            return resultText.innerText = `Too High, Moves Left: ${5-preGuessList.length}`;
        }

        if (guess.value<computer){
            return resultText.innerText = `Too low, Moves Left: ${5-preGuessList.length}`;
        }

        
            
        
    }

}
