var giphy = ["Aslan.gif", "Aslan2.jpg", "Simba.gif", "Alex.jpg", "Simba2.gif" ];

function move ()
{
	var vaderer = Math.floor(Math.random()* giphy.length);
	return vaderer;
}


var episodeds = document.getElementById("Yes").src = giphy[move()];