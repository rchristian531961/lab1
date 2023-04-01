function diceRoll(a){
    if(a == 6){
        return diceRoll6();
    }
    else if (a == 10){
        return diceRoll10();
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
    document.getElementById("roll").innerHTML = diceRoll(6); //For displaying in HTML using Button 
}
function diceRoll10Display(){
    //console.log(diceRoll10()); Display to verify functionality
    document.getElementById("roll2").innerHTML = diceRoll(10); //For displaying in HTML using Button
}

function diceRollDisplay(a){
    if (a == 6){
        diceRoll6Display();
    }
    else if (a == 10){
        diceRoll10Display();
    }
    
}

function testing(){
    
}
