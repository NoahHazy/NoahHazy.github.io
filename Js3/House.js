var h = {};

	h.home = "Yoyers";
	h.visitor = "Ohyers";
	


var hScore = ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];

var vScore = ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];


var rand1 = hScore[Math.floor(Math.random() * hScore.length)];

var rand2 = vScore[Math.floor(Math.random() * vScore.length)];

	


var element1 = document.getElementById("Character1");
element1.textContent = "Home Team: " + h.home;

var element2 = document.getElementById("Character2");
element2.textContent = "Home Score: " + rand1;

var element3 = document.getElementById("Character3");
element3.textContent = "Visitor Team: " + h.visitor;

var element4 = document.getElementById("Character4");
element4.textContent = "Visitor Score: " + rand2;