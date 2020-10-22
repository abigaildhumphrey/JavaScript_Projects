function changeColor(newColor) {        //Red Button
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }
  function changeColor2(newColor) {     //Blue Button
    var elem = document.getElementById('para2'); 
    elem.style.color = newColor;
  }

  function myFunction() {
      var sentence = "I am learning";
      sentence += " a lot from this book!";
      document.getElementById("Concatenate").innerHTML=sentence;
  }