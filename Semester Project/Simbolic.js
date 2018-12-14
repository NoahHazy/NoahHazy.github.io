var lionk = ["LK1.jpg", "LK2.jpg", "LK3.jpg", "LK4.jpg", "LK5.jpg", "LK6.jpg" ];

function circle ()
{
	var image = Math.floor(Math.random()* lionk.length);
	return image;
}


var b = document.getElementById("Simba").src = lionk[circle()];
