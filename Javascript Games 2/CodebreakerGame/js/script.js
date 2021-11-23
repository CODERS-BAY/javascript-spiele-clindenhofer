    let randomNum1 = Math.floor(Math.random() *9) +1;
    let randomNum2 = Math.floor(Math.random() *9) +1;
    let randomNum3 = Math.floor(Math.random() *9) +1;

    let rounds = 0;
    let counter = 12;

function getInputValue() {

    console.log(randomNum1, randomNum2, randomNum3);
    rounds ++;

    let userPick1 = document.getElementById("number1-btn").value.charAt(0);
    let userPick2 = document.getElementById("number2-btn").value.charAt(1);
    let userPick3 = document.getElementById("number3-btn").value;

    let correct_digits = 0
    let correct_positions = 0

    if (rounds > counter){
        result = "Out of Rounds! <br>You lost! <br>Attempt nr: "+rounds;
        document.getElementById("h3").innerHTML=result;
        return;
    }
    if(userPick1 == randomNum1){
        correct_positions++;
        correct_digits++;
    }
    else if(randomNum1 == userPick2 || randomNum1 == userPick3){
        correct_digits++;
    }
    if(userPick2 == randomNum2){
        correct_positions++;
        correct_digits++;
    }
    
    else if(randomNum2 == userPick1 || randomNum2 == userPick3){
        correct_digits++;
    }
    if(userPick3 == randomNum3){
        correct_positions++;
        correct_digits++;
    }
    
    else if(randomNum3 == userPick1 || randomNum3 == userPick2){
        correct_digits++;
    }
    result = "<br>Attempt nr: "+rounds+"<br>correct positions: "+correct_positions+"<br>correct number: "+correct_digits;
    
    document.getElementById("h3").innerHTML += result;
}