function showCoords(event) 
{
    var x = event.clientX;
    var y = event.clientY;
    var coords1 = "X coords: " + x;
    var coords2 = "Y coords: " + y;
    document.getElementById("f").innerHTML = coords1;
    document.getElementById("s").innerHTML = coords2;
}

document.addEventListener('mousemove', showCoords, false);


function clearCoor()
{
	document.getElementById("demo").innerHTML = "";
}


function clear(event)
{
	

	if(event.keyCode == 67)
	{
		document.getElementById("f").innerHTML = 0;
    	document.getElementById("s").innerHTML = 0;
    }
}

document.addEventListener('keydown', clear, false);
