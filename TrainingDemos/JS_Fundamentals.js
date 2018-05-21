
function Hello(todayDate)
{
  document.write("Good Morning Dhana! Current Date Time is " + todayDate );
}

var Hello2=function()
{
		document.write("I am from a anonymous function!!!");
}


window.onload = function(){
var LoadTime = new Date();
document.getElementById("btnClick").onclick= function(){
		alert("I am from button click!!! Load time is:" + LoadTime);
	}	
}