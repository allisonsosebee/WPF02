//Allison Sosebee
//Functions_Personal
//November 21, 2013
//WPF-02

//Calculator Use:


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



/* 2nd attempt

var total = converter (1);

function converter (dollars){
    var euros = dollars * 0.74;
    return euros;
}
console.log (total);
*/



/* 3rd attempt

var euros;

function convert (){
    var dollars = prompt ("Enter the amount of U.S. Dollars you would like to convert:");
    euros = dollars * 0.74;
    return (euros);
}
console.log (euros);
*/



/*
converter = prompt ("Enter the amount of U.S. Dollars you would like to convert:");
var final = converter;

function converter (dollars){
    var euros = dollars * 0.74;
    return euros;
}

alert (final);
*/