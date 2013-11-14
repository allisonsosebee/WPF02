//Allison Sosebee
//Conditionals_Personal
//November 14, 2013
//WPF-02

//Calculator Use:
//This calculator will determine a driver's commute time with construction traffic

//the first variable used in the equation- the number of items to be purchased
var commute = prompt("Enter your usual commute time in minutes:");
//the second variable used in the equation- the total cost of items to be purchased before tax
var time = prompt("Enter time of day you will be driving");
//the third variable used in the equation- the new drive time with construction traffic
var driveTime;

//the commute will take longer during rush hour
if (time >= 4 && time < 6){
