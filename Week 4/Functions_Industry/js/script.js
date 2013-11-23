//Allison Sosebee
//Functions_Industry
//November 21, 2013
//WPF-02

//Calculator Use:



//anonymous function with parameters
var salesGoal = function (goal, sales){
    var answer;

    answer = (goal > sales || goal <= sales) ? "Keep it up, you haven't met your goal yet!" : "Congratulations! You met your goal for the day!"
    alert (answer);
    return answer;
}

var goal = prompt ("What is your sales goal for today?");
var sales = prompt ("How much have you sold so far?");
salesGoal (goal, sales);

