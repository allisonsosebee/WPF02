//Allison Sosebee
//Functions_Wacky
//November 21, 2013
//WPF-02

//Calculator Use:
//Use this calculator to see how you should dress for the weather today


var avgTemp = temperature;

function temperature (hi, lo){

    avgTemp = ((hi + lo)/2);
    //conditional if statement
    if (avgTemp < 45){
        //response displayed to user
        var result = ("Wear a coat and gloves, it's going to be chilly.");
        //alert to display response
        alert (result);
    }else if (avgTemp >= 45 && avgTemp <= 65){
        //response displayed to user
        var result = ("Be sure to pack a light jacket, you might need it.");
        //alert to display response
        alert (result);
    }else{
        //response displayed to user
        var result = ("The weather should be nice today, no jacket needed!");
        //alert to display response
        alert (result);
    }
}

//user input #1 - highest temperature
var hi = prompt("What is the highest temperature predicted for today?");
//user input #2 - lowest temperature
var lo = prompt("What is the lowest temperature predicted for today?");
//arguments to link to function
temperature (hi, lo);



