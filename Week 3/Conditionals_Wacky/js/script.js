//Allison Sosebee
//Conditionals_Wacky
//November 14, 2013
//WPF-02

//Calculator Use:
//Do you qualify for heath benefits or retirement?

//the first variable used in the equation- the age of the user
var age = prompt("To find if you're eligible for retirement or \nhealth benefits, Please enter your age:");
//the second variable used in the equation- the number of years working for the company
var time = prompt("Please enter the number of years you have worked for your employer:");
//the third variable used in the equation-whether or not the employee is eligible
var answer;

//ternary used to decide if employee qualifies
answer = (age >= 65 || time>= 5) ? "Congratulations! You qualify!" : "Sorry, you do not yet qualify."
alert (answer);