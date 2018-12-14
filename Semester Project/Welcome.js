var aslan = ["Welcome.jpg", "AS.jpg", "AS3.jpg"];

function mane ()
{
	var vader = Math.floor(Math.random()* aslan.length);
	return vader;
}


var episode = document.getElementById("John").src = aslan[mane()];