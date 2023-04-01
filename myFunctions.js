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
    /*Attempting to break code. 
    The parameter dicates the call function. 
    Parameter needs to be number value. 
    If value is anything other than 6 or 10. 
    Invalid output is retrieved. 
    Solution: Force entry as 6 or 10. If not then display error. I've never made a case if value is other than 6 or 10*/
    
    //diceRollDisplay(8); //Display Undefined
    //diceRollDisplay("!"); //Displayed Undefined 
    //diceRollDisplay("-"); //Displayed Undefined
}



