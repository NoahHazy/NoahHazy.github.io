function addme (a, b)
{
	var sum = a + b;
	return sum;
}

function subme (c, d)
{
	var difference = c - d;
	return difference;
}

function multme (e, f)
{
	var product = e * f;
	return product;
}

function divime (g, h)
{
	var quotient = g / h;
	return quotient;
}

var r = function calcR (n)
{
	var t = Math.floor(Math.random() * n);
	return t;
}

var m = r (100);

var r2 = function calcR2 (n)
{
	var t2 = Math.floor(Math.random() * n);
	return t2;
}

var m2 = r2 (100);

var s = addme (m, m2);
var d = subme (m, m2);
var p = multme (m, m2);
var q = divime (m, m2);

var a = document.getElementById("First");
	a.textContent = "Addition: " + s;
var a = document.getElementById("Second");
	a.textContent = "Subtraction: " + d;
var a = document.getElementById("Third");
	a.textContent = "Multiplication: " + p;
var a = document.getElementById("Fourth");
	a.textContent = "Division: " + q;
