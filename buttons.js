var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var image = document.getElementById("numberImage");
var core = document.getElementById("core");

var button1Clicks = 0;
var button2Clicks = 0;
var button3Clicks = 0;

button1.addEventListener("click", function(){
	button1Clicks++;
	image.src = "images/1.jpg";
	core.style.backgroundImage = "url('images/bg1.jpg')";
	button1.innerHTML = button1Clicks;
});

button2.addEventListener("click", function(){
	button2Clicks++;
	image.src = "images/2.jpg";
	core.style.backgroundImage = "url('images/bg2.jpg')";
	button2.innerHTML = button2Clicks;
});

button3.addEventListener("click", function(){
	button3Clicks++;
	image.src = "images/3.jpg";
	core.style.backgroundImage = "url('images/bg3.jpg')";
	button3.innerHTML = button3Clicks;
});