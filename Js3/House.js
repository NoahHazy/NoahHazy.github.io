function Doo (home, visitor, homeScore, visitorScore) 
{
    this.home = home;
    this.visitor = visitor;
    this.homeScore = homeScore;
    this.visitorScore = visitorScore;
}

	
var h = ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];

var v = ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];


var hS = h[Math.floor(Math.random() * h.length)];
var vS = v[Math.floor(Math.random() * v.length)];

var hS2 = h[Math.floor(Math.random() * h.length)];
var vS2 = v[Math.floor(Math.random() * v.length)];

var hS3 = h[Math.floor(Math.random() * h.length)];
var vS3 = v[Math.floor(Math.random() * v.length)];

var hS4 = h[Math.floor(Math.random() * h.length)];
var vS4 = v[Math.floor(Math.random() * v.length)];

var hS5 = h[Math.floor(Math.random() * h.length)];
var vS5 = v[Math.floor(Math.random() * v.length)];

var hS6 = h[Math.floor(Math.random() * h.length)];
var vS6 = v[Math.floor(Math.random() * v.length)];


var getSummary1 = new Doo("Yoyer", "Ohyer", hS, vS);
var getSummary2 = new Doo("HYERS", "YEARS", hS2, vS2);
var getSummary3 = new Doo("Bollu", "Bagheery", hS3, vS3);
var getSummary4 = new Doo("Chicken", "Turkey", hS4, vS4);
var getSummary5 = new Doo("Fishy", "Birdy", hS5, vS5);
var getSummary6 = new Doo("Ticky", "Vikiych", hS6, vS6);


var element1 = document.getElementById("Character1");
element1.textContent = "Home Team: " + getSummary1.home;

var element2 = document.getElementById("Character2");
element2.textContent = "Home Score: " + hS;

var element3 = document.getElementById("Character3");
element3.textContent = "Visitor Team: " + getSummary1.visitor;

var element4 = document.getElementById("Character4");
element4.textContent = "Visitor Score: " + vS;



var element5 = document.getElementById("Character5");
element5.textContent = "Home Team: " + getSummary2.home;

var element6 = document.getElementById("Character6");
element6.textContent = "Home Score: " + hS2;

var element7 = document.getElementById("Character7");
element7.textContent = "Visitor Team: " + getSummary2.visitor;

var element8 = document.getElementById("Character8");
element8.textContent = "Visitor Score: " + vS2;



var element9 = document.getElementById("Character9");
element9.textContent = "Home Team: " + getSummary3.home;

var element10 = document.getElementById("Character10");
element10.textContent = "Home Score: " + hS3;

var element11 = document.getElementById("Character11");
element11.textContent = "Visitor Team: " + getSummary3.visitor;

var element12 = document.getElementById("Character12");
element12.textContent = "Visitor Score: " + vS3;



var element13 = document.getElementById("Character13");
element13.textContent = "Home Team: " + getSummary4.home;

var element14 = document.getElementById("Character14");
element14.textContent = "Home Score: " + hS4;

var element15 = document.getElementById("Character15");
element15.textContent = "Visitor Team: " + getSummary4.visitor;

var element16 = document.getElementById("Character16");
element16.textContent = "Visitor Score: " + vS4;



var element17 = document.getElementById("Character17");
element17.textContent = "Home Team: " + getSummary5.home;

var element18 = document.getElementById("Character18");
element18.textContent = "Home Score: " + hS5;

var element19 = document.getElementById("Character19");
element19.textContent = "Visitor Team: " + getSummary5.visitor;

var element20 = document.getElementById("Character20");
element20.textContent = "Visitor Score: " + vS5;



var element21 = document.getElementById("Character21");
element21.textContent = "Home Team: " + getSummary6.home;

var element22 = document.getElementById("Character22");
element22.textContent = "Home Score: " + hS6;

var element23 = document.getElementById("Character23");
element23.textContent = "Visitor Team: " + getSummary6.visitor;

var element24 = document.getElementById("Character24");
element24.textContent = "Visitor Score: " + vS6;
