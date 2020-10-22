
function addition_Function () {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;

}

function subtraction_Function () {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML="5 - 2 = " + subtraction;

}

function multip_Function () {
    var multip = 2 * 2;
    document.getElementById("Math3").innerHTML = "2 x 2 = " + multip;

}

function divide_Function () {
    var divide = 5 / 2;
    document.getElementById("Math4").innerHTML="5 / 2 = " + divide;
    
}

function bigmath_Function () {
    var bigmath = (5 / 2) + (3 * 4);
    document.getElementById("Math5").innerHTML=" if (5 / x) + (3 x 4) = " + bigmath + " then what is x?";
    
}

function modulus_op () {
    var modmath = 12 % 6; //what is computed 
    document.getElementById("Math6").innerHTML = "The remained of 12/6 is " + modmath  //In the quotes is what will display when the button is clicked 


}

function negation () {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

function increment () {
var x = 5;
x++;
document.getElementById("incr").innerHTML = + x;
}

function decrement () { 
var Y = 5.25;
Y--;
document.getElementById("dec").innerHTML = + Y;
}


function random () { 
    z= Math.random ( );
    document.getElementById("ran").innerHTML = + z;
    }