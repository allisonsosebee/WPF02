//Allison Sosebee
//Functions_Industry
//November 21, 2013
//WPF-02

//Calculator Use:
//Use this calculator to see if you've met your sales goal for the day


//anonymous function with parameters
var salesGoal = function (goal, sales){
    //calling out the variable "answer"
    var answer;
    //ternary used to determine correct response
    answer = (goal > sales || goal <= sales) ? "Keep it up, you haven't met your goal yet!" : "Congratulations! You met your goal for the day!"
    //displaying response to user
    alert (answer);
    //function spitting out info
    return answer;
}
//user input #1 - sales goal
var goal = prompt ("What is your sales goal for today?");
//user input #2 - amount sold
var sales = prompt ("How much have you sold so far?");
salesGoal (goal, sales);

