//Allison Sosebee
//Functions_Personal
//November 21, 2013
//WPF-02

//Calculator Use:
//Use this calculator to figure out gratuity at a restaurant

//function and 3 parameters used within
function tipCalc (entrees, drinks, percent){
    //calling out variable "tip"
    var tip;
    //equation used to determine answer
    tip = ((entrees + drinks) * percent);
    //response displayed to user
    var result = ("You should leave $" + tip + "for gratuity.");
    //alert to display response
    alert (tip);

}
//user input #1 - total cost of entrees
var entrees = prompt ("What was the total cost of entrees?");
//user input #2 - total cost of drinks
var drinks = prompt ("What was the total cost of drinks?");
var percent = prompt ("What percent would you like to leave for gratuity? \n     (.15 = poor, .20 = average, .25 = excellent)");
tipCalc (entrees, drinks, percent);


