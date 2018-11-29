function Doo (hm, vis) 
{
    this.home = hm;
    this.visitor = vis;
    this.getSummary = function()
	{
		var myArray = new Array();
		myArray[0] = this.home;
		myArray[1] = Math.floor(Math.random() * 20 + 70);
		myArray[2] = this.visitor;
		myArray[3] = Math.floor(Math.random() * 20 + 70);
		
		return myArray;
	}
}


var game1 = new Doo("Yoyer", "Ohyer");
var game2 = new Doo("HYERS", "YEARS");
var game3 = new Doo("Bollu", "Bagheery");
var game4 = new Doo("Chicken", "Turkey");
var game5 = new Doo("Fishy", "Birdy");
var game6 = new Doo("Ticky", "Vikiych");


var element1 = document.getElementById("Character1");
var r1 = game1.getSummary();
element1.textContent = " Home Team: " + r1[0] + " Home Score: " + r1[1] + " Visitor Team: " + r1[2] + " Visitor Score: " + r1[3];

var element2 = document.getElementById("Character2");
var results2 = game2.getSummary();
element2.textContent = " Home Team: " + results2[0] + " Home Score: " + results2[1] + " Visitor Team: " + results2[2] + " Visitor Score: " + results2[3];

var element3 = document.getElementById("Character3");
var results3 = game3.getSummary();
element3.textContent = " Home Team: " + results3[0] + " Home Score: " + results3[1] + " Visitor Team: " + results3[2] + " Visitor Score: " + results3[3];

var element4 = document.getElementById("Character4");
var results4 = game4.getSummary();
element4.textContent = " Home Team: " + results4[0] + " Home Score: " + results4[1] + " Visitor Team: " + results4[2] + " Visitor Score: " + results4[3];

var element5 = document.getElementById("Character5");
var results5 = game5.getSummary();
element5.textContent = " Home Team: " + results5[0] + " Home Score: " + results5[1] + " Visitor Team: " + results5[2] + " Visitor Score: " + results5[3];

var element6 = document.getElementById("Character6");
var results6 = game6.getSummary();
element6.textContent = " Home Team: " + results6[0] + " Home Score: " + results6[1] + " Visitor Team: " + results6[2] + " Visitor Score: " + results6[3];
/*

var element7 = document.getElementById("Character7");
element7.textContent = "Visitor Team: " + getSummary2.visitor;

var element8 = document.getElementById("Character8");
element8.textContent = "Visitor Score: " + vS;


var element9 = document.getElementById("Character9");
element9.textContent = "Home Team: " + getSummary3.home;

var element10 = document.getElementById("Character10");
element10.textContent = "Home Score: " + hS;

var element11 = document.getElementById("Character11");
element11.textContent = "Visitor Team: " + getSummary3.visitor;

var element12 = document.getElementById("Character12");
element12.textContent = "Visitor Score: " + vS;



var element13 = document.getElementById("Character13");
element13.textContent = "Home Team: " + getSummary4.home;

var element14 = document.getElementById("Character14");
element14.textContent = "Home Score: " + hS;

var element15 = document.getElementById("Character15");
element15.textContent = "Visitor Team: " + getSummary4.visitor;

var element16 = document.getElementById("Character16");
element16.textContent = "Visitor Score: " + vS;



var element17 = document.getElementById("Character17");
element17.textContent = "Home Team: " + getSummary5.home;

var element18 = document.getElementById("Character18");
element18.textContent = "Home Score: " + hS;

var element19 = document.getElementById("Character19");
element19.textContent = "Visitor Team: " + getSummary5.visitor;

var element20 = document.getElementById("Character20");
element20.textContent = "Visitor Score: " + vS;



var element21 = document.getElementById("Character21");
element21.textContent = "Home Team: " + getSummary6.home;

var element22 = document.getElementById("Character22");
element22.textContent = "Home Score: " + hS;

var element23 = document.getElementById("Character23");
element23.textContent = "Visitor Team: " + getSummary6.visitor;

var element24 = document.getElementById("Character24");
element24.textContent = "Visitor Score: " + vS;
*/