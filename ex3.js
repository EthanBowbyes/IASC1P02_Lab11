//
//document.getElementById("border").style.border = "thick solid #D0D0D0";
function loop(){
var num = document.getElementById("num").value;
var output = ""
for (i=0; i<=num; i++)
{
	output += i + "<br/>" + "<br/>";
	document.getElementById("output").innerHTML = output 
}
colsole.log(output);
}
