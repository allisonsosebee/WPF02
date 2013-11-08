//Allison Sosebee
//Expressions_Personal
//November 7, 2013
//WPF-02

//Calculator Use:
//How many bags of salt will you need to cover your icy sidewalk?

//the first variable used in the equation- the amount of square feet each bag will cover
var salt = prompt ("To find the amount of salt you'll need for your sidewalk, please enter the amount of square feet each bag will cover:");
//the second variable used in the equation- the width of the sidewalk that needs to be covered
var width = prompt ("Next, how wide is your sidewalk in feet?");
//the third variable used in the equation- the length of the sidewalk that needs to be covered
var length = prompt ("Lastly, please enter the length of your sidewalk in feet:");

//the equation used to find the number of bags needed
var bags = width*length/salt;
//result prompt to let user know how many bags of salt they will need
var result = "You will need " + bags + " bags of salt to cover your sidewalk.";
//alert that will display result to user
alert (result);