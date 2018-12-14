var lionnew = ["LG.jpg", "LG2.jpg", "LG3.jpg", "LG4.jpg", "LG5.jpg"];

function radius ()
{
	var vad = Math.floor(Math.random()* lionnew.length);
	return vad;
}


var ep = document.getElementById("Claw").src = lionnew[radius()];
