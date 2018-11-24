//This is the array of colours to choose from
var x = ["BLUE", "GREEN", "RED", "YELLOW"];
var colred = "RED";
var colgreen = "GREEN";
var colblue = "BLUE";
var colyellow = "YELLOW";
//This gets a random colour and displays it
var randNum = Math.floor(Math.random()*4);
var col = x[randNum];
function colour(){
document.getElementById("colour").innerHTML= col
setTimeout(byecolour,100);
//This will delete the colour
function byecolour() {
var bye = ""
document.getElementById("colour").innerHTML= bye
}
}
//This will take their inputs for colour
function red(){
if (colred == col){
document.getElementById("colour").innerHTML= "You got the answer correct"
} else {
document.getElementById("colour").innerHTML= "You got the answer incorrect" }
}
function green(){
if (colgreen == col){
document.getElementById("colour").innerHTML= "You got the answer correct"
} else {
document.getElementById("colour").innerHTML= "You got the answer incorrect" }
}
function blue(){
if (colblue == col){
document.getElementById("colour").innerHTML= "You got the answer correct"
} else {
document.getElementById("colour").innerHTML= "You got the answer incorrect" }
}
function yellow(){
if (colyellow == col){
document.getElementById("colour").innerHTML= "You got the answer correct"
} else {
document.getElementById("colour").innerHTML= "You got the answer incorrect" }
}
/*
function answer(){
var pick = document.getElementById("pick").value;
document.getElementById("colour").innerHTML= pick
if (pick == x[randNum]){
document.getElementById("colour").innerHTML= "You picked the right colour"
}
}
*/