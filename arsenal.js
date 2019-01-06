window.onload=function() {
	var table=document.getElementById("tabel");
	var tr=document.createElement("tr");
	var td=document.createElement("td");
	var text=document.createTextNode("Record: " + Math.max(57,47,42) +"m£");

	td.appendChild(text);
	tr.appendChild(td);
	table.appendChild(text);
 var x=document.getElementById("nm");
 x.onmousedown=function(e) { if(e.button==0) x.style.color="red";}

 
	
}
