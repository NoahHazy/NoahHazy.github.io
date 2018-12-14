var gif = ["LG.jpg", "LG2.jpg", "LG3.jpg", "LG4.jpg", "LG5.jpg", "LG6.jpg" ];

function pi ()
{
	var im = Math.floor(Math.random()* gif.length);
	return im;
}


var c = document.getElementById("Tut").src = = gif[pi()];
