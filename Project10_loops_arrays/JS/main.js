
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}


    var Instruments = ["Guitar", "Drums", "Piano", "Base", "Violin"];
    var Content = "";
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
            Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }


    function cat_pics() {
        var Cat_Picture = [];
        Cat_Picture[0] = "sleeping";
        Cat_Picture[1] = "playing";
        Cat_Picture[2] = "eating";
        Cat_Picture[3] = "purring";
        document.getElementById("Cat").innerHTML = "In this picture, that cat is " + Cat_Picture[2] + ".";
    }

    var X = 83;
    document.write(X)
    {
        let X = 33;
        document.write("<br>" + X);
    }

    function return_Function() {
        return Math.Pi;
    }

    function break_test() { 
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i == 3) { break; }
        text += "The number is " + i + "<br>";
    }
}

    function continue_break () {
    var text = "";
    var i;
    for (i = 0; i < 11; i++) {
        if (i === 3) { continue; }
        if (i == 9) { break; }
        text += "The number is " + i + "<br>";
      }
    document.getElementById("demo2").innerHTML = text;
}
