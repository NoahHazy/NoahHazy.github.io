function Maths(a, b)
{
	var addme = a + b;
	var subme = a - b;
	var multme = a * b;
	var divime = a / b;

	var me = [addme, subme, multme, divime];
	return me
}

function Rand(me)
{

return me[Math.floor(Math.random() * me.length)];

}

var Calc = Maths(9 , 6);
var a = document.getElementById("First");
	a.textContent = Rand(Calc);
var a = document.getElementById("Second");
	a.textContent = Rand(Calc);
var a = document.getElementById("Third");
	a.textContent = Rand(Calc);
var a = document.getElementById("Fourth");
	a.textContent = Rand(Calc);