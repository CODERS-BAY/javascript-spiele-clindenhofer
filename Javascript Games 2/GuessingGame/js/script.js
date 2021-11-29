let upperLimit=0;
let guessNumber=0;
let counter=0;
let attempts=0;

document.getElementById('generate-btn').addEventListener('click', e =>{
    upperLimit= document.getElementById('upperLimit').value;
    counter= document.getElementById('attempts').value;
    console.log(upperLimit);
    guessNumber = Math.floor(Math.random()* upperLimit) +1;
    console.log(guessNumber);
});

document.getElementById('check-btn').addEventListener('click', e =>{
    counter--;
    if(counter < 0 ){
        document.getElementById('h3').innerHTML="TOO MANY ATTEMPTS! THE NUMBER WAS " +guessNumber+ "!";
        return;
    }
    var guess= document.getElementById('guess').value;
    console.log(guess)
    if(guess < guessNumber){
        
    document.getElementById('h3').innerHTML=guess+" IS TOO LOW!"
    }
    if(guess == guessNumber){
        
    document.getElementById('h3').innerHTML=guess+" IS CORRECT!"
    }
    if(guess > guessNumber){
        
    document.getElementById('h3').innerHTML=guess+" IS BIGGER!"
    }
});
document.getElementById('check-btn').addEventListener('click', e =>{
    console.log("test2")
});


