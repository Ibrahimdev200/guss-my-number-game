'use strict';

// console.log(document.querySelector(".message").
// textContent);
// document. querySelector(".message").textContent ='Correct Number';

//how to generate a random number, always not the number start from 0
//and if you want it to end at 20 as bellow you add +1
let secretNunber = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore=0;


//this is how to add an instruct to a function on what to do
document.querySelector('.check').addEventListener
('click', function () {
const guess = Number(document.querySelector('.guess').value);



//if the is no input number
    if(!guess){
    document. querySelector(".message").textContent ='No number!';

    }
    

    //if the number is correct
    else if (guess === secretNunber) {
        document. querySelector(".message").textContent =
        'Correct Number, YOU WON!!!';
        document. querySelector('.number').textContent = 
        secretNunber;
        document.querySelector('body').style.backgroundColor=
        '#60b347';
        document.querySelector('.number').style.width=
        '30rem'

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').
            textContent = highscore;
        }

    }


    //if the number is high
    else if (guess > secretNunber){
        if (score >1){
        document.querySelector('.message').textContent=
        'too high!!';
        score--;
        document.querySelector('.score').textContent=
        score;
        }else{
            document.querySelector('.message').textContent=
        'You have lost the Game!!';
        document.querySelector('.score').textContent=
        0;
        }
    }
    
    //if the number is low
    else if (guess < secretNunber){
        if (score >1){
            document.querySelector('.message').textContent=
            'too low!!';
            score--;
            document.querySelector('.score').textContent=
            score;
            }else{
                document.querySelector('.message').textContent=
            'You have lost the Game!!';
            document.querySelector('.score').textContent=
               0;
            }
    } 

    document.querySelector('.again').addEventListener
    ('click', function(){
        score =20;
        secretNunber = Math.trunc(Math.random()*20)+1;
        document.querySelector('.message').textContent=
        'Start guessing...';
        document.querySelector('.score').textContent=
        score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';

        document.querySelector('body').style.backgroundColor=
        '#222';
        document.querySelector('.number').style.width=
        '15rem'
    })
    
    
});
