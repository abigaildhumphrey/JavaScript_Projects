
alert("Hello!"); //This is the pop up that opens first 

var guest2 = "nerd", guest = "friend"; //This sets the variables for buttons

document.write("<h3>Hello and welcome " + guest + "!</h3>" ); //note that variables must be above whatever code you want it to refernce!

function myFunction() {             //This is button 1
  alert('Whats up ' + guest);
}

function myFunction2() {
    alert('What did I say ' + guest2);       //This is button 2
  }

  var blues = " I have the blues";       //This sets the text
  var blues = blues.fontcolor("blue");      //This makes it blue
  document.write(blues);            //This displays the text