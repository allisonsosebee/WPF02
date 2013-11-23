//Allison Sosebee
//Functions_Wacky
//November 21, 2013
//WPF-02

//Calculator Use:


var avgTemp = temperature;

function temperature (hi, lo){

    avgTemp = ((hi + lo)/2);

    if (avgTemp < 45){
        var result = ("Wear a coat and gloves, it's going to be chilly.");
        console.log (result);
    }else if (avgTemp >= 45 && avgTemp <= 65){
        var result = ("Be sure to pack a light jacket, you might need it.");
        alert (result);
    }else{
        var result = ("The weather should be nice today, no jacket needed!");
        alert (result);
    }
}

var hi = prompt("What is the highest temperature predicted for today?");
var lo = prompt("What is the lowest temperature predicted for today?");
//arguments to link to function
temperature (hi, lo);



