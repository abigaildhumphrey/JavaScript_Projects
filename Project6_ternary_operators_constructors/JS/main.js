
function Ride_Function() { //Names are case sensitive! 
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML= Can_ride + "to ride.";
}

function Vote_Function() { //Names are case sensitive! 
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young ":"You are old enough ";
    document.getElementById("Vote").innerHTML= Can_Vote + "to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " +Erik.Vehicle_Model + " manufactures in " + Erik.Vehicle_Year;

}


