window.onload=function() {
	var name=prompt("Cum va numiti?");
	if(name!=null)
		{document.getElementById("Hello").innerHTML="Buna ziua " + name + ", aici ai datele cu care ne poti contacta";
	     document.getElementById("Hello").style.color="white";
      localStorage.setItem("name" , name);
	console.log(localStorage.getItem(localStorage.key(0)));
        }
    else { 
    while(name==null)
   {alert("Va rugam introduceti un nume");
       name=prompt("Cum va numiti?");
    document.getElementById("Hello").innerHTML="Buna ziua " + name + ", aici ai datele cu care ne poti contacta";
	     document.getElementById("Hello").style.color="white";}
}
document.body.onkeydown=function(ev)
{ if(ev.key=="Backspace") window.history.back();
}
}