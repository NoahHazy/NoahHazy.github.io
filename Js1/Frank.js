function random(The)
{

return The[Math.floor(Math.random() * The.length)];

}

var The = ["Iron", "Steel", "Tungsten", "Silver", "Titanium", "Lead", "Gold", "Copper", "Platinum", " Nickel", "Zinc", "Tin", "Beryllium", "Cobalt", "Mercury", "Lithium", "Iridium", "Osmium", "Calcium", "Scandium" ];

var a = document.getElementById("First");
a.textContent = random(The);
var b = document.getElementById("Second");
b.textContent = random(The);
var c = document.getElementById("Third");
c.textContent = random(The);
var d = document.getElementById("Fourth");
d.textContent = random(The);


