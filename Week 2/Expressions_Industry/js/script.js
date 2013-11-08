//Allison Sosebee
//Expressions_Industry
//November 7, 2013
//WPF-02

//Calculator Use:
//How to calculate initial payment for monitoring services at Stealth Monitoring Company

//the first variable in the equation- the number of IP Cameras to be installed on premises
var iCameras = prompt ("To find the initial down payment of your order, please enter the number of IP Cameras to be installed on-site:");
//the second variable in the equation- the number of PTZ Cameras to be installed on premises
var pCameras = prompt ("Next, enter the number of PTZ Cameras to be installed on-site:");
//the third variable in the equation- the number of months using Stealth Monitoring
var month = prompt ("Lastly, enter the number of months you will be using Stealth Monitoring services on your property:");

//the equation used to determine down payment
var cost = (iCameras * 500) + (pCameras * 1000) + (month * 5000)
//message to be displayed to user
var result = "Your initial down payment will be $" + cost;
//alert to display the message to the user
alert (result);


