var number = document.getElementById("number");
var newNumber;

var dice = document.getElementById("dice");
var total = document.getElementById("total")


function rollDice(){
    newNumber = Math.ceil(Math.random() * 6)
    number.innerHTML = newNumber;
    total.innerHTML = parseInt(total.innerHTML) + newNumber;

    if(newNumber == 1){
        dice.src = "1.jpg"
    }
    if(newNumber == 2){
        dice.src = "2.jpg"
    }
    if(newNumber == 3){
        dice.src = "3.jpg"
    }
    if(newNumber == 4){
        dice.src = "4.jpg"
    }
    if(newNumber == 5){
        dice.src = "5.jpg"
    }
    if(newNumber == 6){
        dice.src = "6.jpg"
    }
   
}




