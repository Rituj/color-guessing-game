var n=6;
var colors=colorarray(n);
var pickedcolor=colors[pickcolor()];
var colordisplay=document.getElementById("colordisplay");
var squares=document.querySelectorAll(".square");
colordisplay.textContent=pickedcolor;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

mainfunc();

resetbutton.addEventListener("click",function(){
	resetbutton.textContent="New Colors";
	setting();
	mainfunc();
});

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	resetbutton.textContent="New Colors";
	n=3;
	setting();
	for(var i=0;i<squares.length;i++)
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.display="none";
});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	resetbutton.textContent="New Colors";
	n=6;
	setting();
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
});

function setting(){
	colors=colorarray(n);
	pickedcolor=colors[pickcolor()];
	colordisplay.textContent=pickedcolor;
	h1.style.backgroundColor="steelblue";
	message.textContent="";
}

function mainfunc(){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].addEventListener("click",function(){
			var clickedcolor=this.style.backgroundColor;
			if(clickedcolor === pickedcolor){
				message.textContent="Correct";
				resetbutton.textContent="Play Again?";
				selected();
			}
			else{
				this.style.backgroundColor= "#232323";
				message.textContent="Try Again";
			}
		});
	}
}

function selected(){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=pickedcolor;
	}
	h1.style.backgroundColor=pickedcolor;
}

function pickcolor(){
	return Math.floor(Math.random()*colors.length);
}

function colorarray(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(arrayelement());
	}
	return arr;
}

function arrayelement(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	var col= "rgb("+r+", "+g+", "+b+")";
	return col;
}

