function diceRoll10(a){
    if(a == 6){
        diceRoll6Display();
    }
    else if (a == 10){
        diceRoll10(Display());
    }
    else{
        
    }
}

function diceRoll6(){
    return numberGenerator(1, 7);
}

function diceRoll10(){
    return numberGenerator(1,11);
}

function numberGenerator(min,max){
    return Math.floor(Math.random() * (max - min)+ min);
}

function diceRoll6Display(){
    //console.log(diceRoll6()); Display to verify functionality
    document.getElementById("roll").innerHTML = diceRoll6(); //For displaying in HTML using Button 
}
function diceRoll10Display(){
    //console.log(diceRoll10()); Display to verify functionality
    document.getElementById("roll2").innerHTML = diceRoll10(); //For displaying in HTML using Button
}
