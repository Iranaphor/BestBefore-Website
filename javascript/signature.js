var mousePressed = false;
var canvas = document.getElementById("canvas");
var crayonTextureImage = new Image();
crayonTextureImage.src = "../img/basket/dot.png";

var ctx = canvas.getContext("2d");

function Init() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

    canvas.addEventListener("mousedown",	(function (e) 	{mousePressed = true;}));
    canvas.addEventListener("mouseup",		(function (e) 	{mousePressed = false;}));
    canvas.addEventListener("mousemove",	(function (e) 	{if (mousePressed){Draw(e.clientX, e.clientY)}}));
}

function Draw(x, y) {ctx.drawImage(crayonTextureImage,x-(0.5*crayonTextureImage.width),y-(0.5*crayonTextureImage.height));}

Init();