//Allison Sosebee
//Functions_Industry
//November 21, 2013
//WPF-02

Calculator Use:

var final = salesGoal;

function salesGoal (goal, sales){
    //var difference = goal - sales;
    //var answer;

    answer = (sales < goal || sales >= goal) ? "Keep it up, you haven't met your goal yet!" : "Congratulations! You met your goal for the day!"
    alert (answer);
    return answer;
}

var goal = prompt ("What is you sales goal for today?");
var sales = prompt ("How much have you sold so far?");
salesGoal (goal, sales);

alert (final);