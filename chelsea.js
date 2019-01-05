var canv;
var ctx;
 
window.onload=function()
{
	 canv=document.getElementById("joc");
	 ctx=canv.getContext("2d");
	document.addEventListener("keydown", keyPush);
	
	setInterval(game,1000/15);

	
}
var xv= 0;
var yv=0;
var px=10;
var py=10;
 var gs=20; 
 var tc=20;
 var ax=15; 
 var ay=15;
 var trail=[];
 var tail=5;


function game()
{ 
	px+=xv;
	py+=yv;
	if(px<0) { px=tc-1;}
	if(px>tc-1) { px=0;}
	if(py<0) { py=tc-1;}
	if(py>tc-1) { px=0;}
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canv.width, canv.height);

	ctx.fillStyle="white";
	ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
	ctx.fillStyle="blue";
	for(var i=0; i<trail.length; i++)
		{ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2,gs-2);
			if(trail[i].x==px && trail[i].y==py) { tail=5;}
		}
		trail.push({x:px,y:py});  
		while(trail.length>tail) {trail.shift();}
if(ax==px && ay==py)
	{tail++;
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);
	}
	 
}

function keyPush(ev)
{
	switch(ev.keyCode)
	{ case 37:
		xv=-1; yv=0;  
	  break;
	  case 38:
		xv=0; yv=-1;
	  break;
	  case 39:
		xv=1; yv=0;
	  break;
	  case 40:
		xv=0; yv=1;
	  break;
	}

}

