//Allison Sosebee
//Conditionals_Wacky
//November 14, 2013
//WPF-02

//Calculator Use:
//Do you qualify for heath benefits or retirement?

var age = prompt("To find if you're eligible for retirement or \nhealth benefits, Please enter your age:");
var time = prompt("Please enter the number of years you have worked for your employer:");
var answer;

answer = (age >= 65 || time>= 5) ? "Congratulations! You qualify!" : "Sorry, you do not yet qualify."