//Allison Sosebee
//Conditionals_Industry
//November 14, 2013
//WPF-02

//Calculator Use:
//Determine the total cost after discount depending on number of items sold.

var numItems = prompt("To find the discounted price of your purchase, \nPlease enter the number of items you purchased:");
var cost = prompt("Please enter the total cost of your items before tax:");

if (numItems <= 1){
    var total = cost * 0.90;
    var result = "Your total is $" + total;
    alert (result);
}else if (numItems > 1 && numItems <= 2){
    