
function a_Function () {
    document.getElementById("Math").innerHTML = isNaN('007');

}

function b_Function () {
    document.getElementById("Math2").innerHTML = isNaN('This is a string');

}

function c_Function () {
    document.getElementById("Math3").innerHTML = 0/0;

}

function d_Function () {
    document.write(2E310);

}

function e_Function () {
    document.write(-2E310);

}

function f_Function () {
    document.write(10<2);

}

function g_Function () {
    document.write(10>2);

}

function h_Function () {
    document.write("10"+5);

}

function i_Function () {
    document.write((5+5) == 10);

}

function j_Function () {
    document.write(3 == 10);

}

function k_Function () {
    x = 10;
    y = 10;
    document.write(x===y);

}

function l_Function () {
    A = "Sam"; //Dont forget to put strings in quotes 
    B = "Sam";
    document.write(A === B);

}


function n_Function () {
    A = 5; //integers n numbers dont go in quotes 
    B = "Sam";
    document.write(A === B);

}

function o_Function () {
    A = "5"; //Dont forget to put strings in quotes 
    B = 5;
    document.write(A === B);

}

function p_Function () {
    A = 0; //Dont forget to put strings in quotes 
    B = 1;
    document.write(A === B);

}

function q_Function () {
    document.write(5 > 10 && 10 > 4);

}

function r_Function () {
    document.write(5 > 10 || 10 > 20);

}

function s_Function () {
    document.write(5 > 2 && 10 > 4);

}

function t_Function () {
    document.write(5 > 10 || 10 < 20);

}

function not_Function () {
    document.getElementById("Not").innerHTML = ! (5>10);
}

function not_Function2 () {
    document.getElementById("Not2").innerHTML = ! (5<10); //dont forget to rename function and ID 
}

console.log(1>2)