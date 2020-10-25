function my_Dictionary () { //Function name needs to match what's in quotes in HTML after onclick
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Lab",
        Age: 5,
        Sound: "Bark!"
    } ;
delete Animal.Sound;
document.getElementById("Dictionary").innerHTML = Animal.Sound; //Quotes in green matches id=
}