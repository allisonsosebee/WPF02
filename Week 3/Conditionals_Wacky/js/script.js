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

//ternary used to decide if employee qualifies and alert
answer = (age >= 65 || time >= 5) ? "Congratulations! You qualify!" : "Sorry, you do not yet qualify."
//alert that will display result to user
alert (answer);


/*
 var final = dollarsToEuros;

 function dollarsToEuros (dollars){
 var euros = dollars * 0.74;
 var result = ("You have " + euros + " Euros.");
 alert (result);
 return euros;
 }

 var dollars = prompt ("Enter the amount of U.S. Dollars you would like to convert:");
 dollarsToEuros (dollars);

 alert (final);


 //needs 3 parameters
 */