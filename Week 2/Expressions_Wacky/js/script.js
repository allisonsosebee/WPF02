//Allison Sosebee
//Expressions_Wacky
//November 7, 2013
//WPF-02

//Calculator Use:
//Use this calculator to determine the number of points a hockey player has earned during a game.

//the first variable in the equation- the number of goals scored while player was on the ice
var regularGoals = prompt ("To find your total points, please enter the number  of regular \ngoals scored by your team while you were on the ice:");
//the second variable in the equation- the number of power play goals scored while player was on the ice
var powerPlayGoals = prompt ("Next, enter the number of Power Play goals \nscored by your team while you were on the ice:");
//the third variable in the equation- the number of power play goals scored by the opposing team while player was on the ice
var opposingPowerPlay = prompt ("Lastly, please enter the number of Power Play goals \nscored against your team while you were on the ice:");

//the equation used to calculate players' points
var points = regularGoals + (powerPlayGoals*2) - (opposingPowerPlay*2)
//output message to user
var result = "You earned a total of " + points + " points during your game.";
//alert used to make message display
alert (result);
