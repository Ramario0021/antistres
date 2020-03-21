function Clear(){
	red.style.background = "none";
	yellow.style.background = "none";
	green.style.background = "none";
}

function Set(){
	red.style.background = "red";
	yellow.style.background = "yellow";
	green.style.background = "green";
}

red.onclick = function(){
	Clear();
	red.style.background = "red";
}

yellow.onclick = function(){
	Clear();
	yellow.style.background = "yellow";
}

green.onclick = function(){
	Clear();
	green.style.background = "green";
}