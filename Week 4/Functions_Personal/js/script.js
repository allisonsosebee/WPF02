//Allison Sosebee
//Functions_Personal
//November 21, 2013
//WPF-02

//Calculator Use:


function tipCalc (entrees, drinks, percent){
    var tip;
    tip = ((entrees + drinks) * percent);
    var result = ("You should leave $" + tip + "for gratuity.")
    alert (tip);

}

var entrees = prompt ("What was the total cost of entrees?");
var drinks = prompt ("What was the total cost of drinks?");
var percent = prompt ("What percent would you like to leave for gratuity? \n     (.15 = poor, .20 = average, .25 = excellent)");
tipCalc (entrees, drinks, percent);


