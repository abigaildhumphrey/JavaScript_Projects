
//local variable 
/*
function Add_numbers_1(){
    var X = 10;
    document.write(20 + X + "<br>");

}

function Add_numbers_2(){
    document.write(X + 100);

}

Add_numbers_1();
Add_numbers_2();

*/
//global variable 

var X = 10;
function Add_numbers_3() {
    document.write(20 + X + "<br>");

}
function Add_numbers_4() {
    document.write (X + 100);

}
Add_numbers_3();
Add_numbers_4();


//Y wont be defined in this one because the x declared at the top is a lower case not a capital 
var y = 10;
function Add_numbers_5() {
    document.write(20 + Y + "<br>");

}
function Add_numbers_6() {
    document.write (Y + 100);

}
Add_numbers_5();
Add_numbers_6();


function get_Date(){
    if (new Date() .getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function drink_Age () {
    var age = document.getElementById("Please enter your age").value;
    if (age==21) {
        alert ("You can have a drink!");
    } else if (age < 21) {
        alert ("no drinks for you");

}
}

function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good morning!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "Good afternoon";
    }
    else {
        Reply = "Good evening";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

