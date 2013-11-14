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
    //the equation used to find the discount based on number of items
    var driveTime = commute * 1.89;
    //result prompt to let user know total cost after discount
    var result = "Your commute will take " +driveTime+ " minutes, better leave early!"
    //alert that will display result to user
    alert (result);
//the commute should be the same without rush hour traffic
}else{
    