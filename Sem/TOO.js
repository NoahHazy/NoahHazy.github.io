var gif = ["LG.jpg", "LG2.jpg", "LG3.jpg", "LG4.jpg", "LG5.jpg", "LG6.jpg" ];

function pi ()
{
	var im = Math.floor(Math.random()* gif.length);
	return im;
}


var c = document.getElementById("Tut").src = = gif[pi()];

/*
var lion = ["LionC1.jpg", "LionC2.jpg", "LionC3.jpg", "LionC4.jpg", "LionC5.jpg", "LionC6.jpg", "LionC7.jpg", "LionC8.jpg" ];

function cycle ()
{
	var pic = Math.floor(Math.random()* lion.length);
	return pic;
}


var a = document.getElementById("Pic").src = lion[cycle()];
