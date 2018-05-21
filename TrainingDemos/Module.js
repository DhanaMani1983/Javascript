
//var x = new Object();

var ModuleCodeSample = (
	function(){
		var name, age, salary
		
		function init(Name, Age){
			name = Name;
			age = Age;
			salary = Age * 100;
		}
		
		function display(){
			document.getElementById("pModule").innerHTML = "Name: " + name + " | " + "Age: " + age + " | " + "Salary: " + salary
			}
		
		return {
			 Init:init, Display:display
		};
	}
)();

function ShowList()
{
Groceries = ["Milk","Sugar","Rice","Meat","Oil"];

var res =[];

res.push("<ul>");	

for(i=0;i<Groceries.length;i++)
{
	res.push("<li>" + Groceries[i] + "</li>");
}

res.push("</ul>");
document.getElementById("pGroceries").innerHTML = res.join("");

}

var Collectiva = window.Collectiva || {};

Collectiva.array = (
	function(){
		function ShowConcat()
		{
			GroceriesList1 = ["Milk","Sugar","Rice","Meat","Oil"];
			GroceriesList2 = ["Washing Powder","Softener","RinseAid","Harpic","Dettol"];
			var Groceries = GroceriesList1.concat(GroceriesList2)
			document.getElementById("pGroceriesConcat").innerHTML = Groceries.join(", ");;
		}
		
		function ShowSlice()
		{
			GroceriesList1 = ["Milk","Sugar","Rice","Meat","Oil","Washing Powder","Softener","RinseAid","Harpic","Dettol"];
			var Groceries = GroceriesList1.slice(2,5);
			document.getElementById("pGroceriesSlice").innerHTML = Groceries.join(", ");;
		}
		function ShiftUnshift()
		{
				GroceriesList = ["Milk","Sugar","Rice","Meat","Oil","Washing Powder","Softener","RinseAid","Harpic","Dettol"];
				var shift = GroceriesList.shift();
			    Gr.unshift("Condensed Milk");
		}
		return{
			ShowConcat:ShowConcat,
			ShowSlice:ShowSlice
		};
	}
)();