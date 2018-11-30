var element1 =  document.querySelector("h1.first");
element1.firstChild.nodeValue = "Hello Yellow";
element1.innerHTML = "<b><i>Hello Yellow</i></b>";


var newt = document.createElement("li");
var someText = document.createTextNode("euro");
newt.appendChild(someText);


var listItems = document.getElementsByTagName("li");
var item = listItems[0];
var parent = item.parentNode;

parent.appendChild(newt);
 

function P()
{
	this.setAttribute('class','first');
}
var el = document.getElementsByClassName('third');
el.addEventListener('click', P, false);



/*
function process1()
{
	this.textContent = "  >:/";
}
var el = document.getElementById("special");
el.addEventListener('click', process1, false);
*/