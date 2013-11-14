//Allison Sosebee
//Conditionals_Industry
//November 14, 2013
//WPF-02

//Calculator Use:
//Determine the total cost after discount depending on number of items sold.

//the first variable used in the equation- the number of items to be purchased
var numItems = prompt("To find the discounted price of your purchase, \nPlease enter the number of items you purchased:");
//the second variable used in the equation- the total cost of items to be purchased before tax
var cost = prompt("Please enter the total cost of your items before tax:");

//one item or less gets a discount of 10% off the total before tax
if (numItems <= 1){
    //the equation used to find the discount based on number of items
    var total = cost * 0.90;
    //result prompt to let user know total cost after discount
    var result = "Your total is $" + total;
    //alert that will display result to user
    alert (result);
//two items get a discount of 20% off the total before tax
}else if (numItems > 1 && numItems <= 2){
    //the equation used to find the discount based on number of items
    var total = cost * 0.80;
    //result prompt to let user know total cost after discount
    var result = "Your total is $" + total;
    //alert that will display result to user
    alert (result);
//three items get a discount of 30% off the total before tax
}else{
    //the equation used to find the discount based on number of items
    var total = cost * 0.70;
    //result prompt to let user know total cost after discount
    var result = "Your total is $" + total;
    //alert that will display result to user
    alert (result);
}


