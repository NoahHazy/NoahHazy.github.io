var lion = ["LionC1.jpg", "LionC2.jpg", "LionC3.jpg", "LionC4.jpg", "LionC5.jpg", "LionC6.jpg", "LionC7.jpg", "LionC8.jpg" ];

function cycle ()
{
	var pic = Math.floor(Math.random()* lion.length);
	return pic;
}


var a = document.getElementById("Pic").src = lion[cycle()];




/*
var lionk = ["LK1.jpg", "LK2.jpg", "LK3.jpg", "LK4.jpg", "LK5.jpg", "LK6.jpg" ];

function circle ()
{
	var image = Math.floor(Math.random()* lionk.length);
	return image;
}


var b = document.getElementById("Simba").src = lionk[circle()];
*/

/*
var la = document.getElementByTagName("table");
la.addEventListener('mouseover', Lion, false);
*/

/*
function addme (a, b)
{
	var sum = a + b;
	return sum;
}
var r = function calcR (n)
{
	var t = Math.floor(Math.random() * n);
	return t;
}
var s = addme (m, m2);
var a = document.getElementById("First");
	a.textContent = "Addition: " + s;
*/