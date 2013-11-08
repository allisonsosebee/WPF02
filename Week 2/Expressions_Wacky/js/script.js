//Allison Sosebee
//Expressions_Wacky
//November 7, 2013
//WPF-02

//Calculator Use:
//Use this calculator to determine the number of points a hockey player has earned during a game.

//the first variable in the equation- the number of goals scored while player was on the ice
var regularGoals = prompt ("");
//the second variable in the equation- the number of power play goals scored while player was on the ice
var powerPlayGoals = prompt ("");
var opposingPowerPlay = prompt ("");

var points = regularGoals + (powerPlayGoals*2) - (opposingPowerPlay*2)
