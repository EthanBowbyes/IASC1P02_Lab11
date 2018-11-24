//
var x = ["idiot", "sandwich", "kitty", "legend", "knife"];
var y = ["hairless", "slimy", "unholy", "naked", "sticky"];

//
function randNum(){
var num1 = Math.floor(Math.random()*5);
var num2 = Math.floor(Math.random()*5);
document.getElementById("output").innerHTML+= "What a " + y[num1] + " " + x[num2] + "!" + "<br\>" + "<br\>"
}