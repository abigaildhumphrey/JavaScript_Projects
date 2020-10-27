
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into ";
    var part_4 = "a full sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;

}

function caps_test(){
    var str = "What a sentence"; //Have to assign the string here or make it global var?
    var res = str.toUpperCase();
    document.getElementById("caps test").innerHTML = res;
}

function myFunction() {
    var str = "Testing search function"; 
    var n = str.search("search");
    document.getElementById("searchin").innerHTML = n;

}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_testing() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("fixed string").innerHTML = n;
}

function value_of_test(){
    var str = "Hello World!";
    var res = str.valueOf(); 
    document.getElementById("valuetest").innerHTML = res;   
}
