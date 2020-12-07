var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var image = document.getElementById("numberImage");
var core = document.getElementById("core");

var button1Clicks = 0;
var button2Clicks = 0;
var button3Clicks = 0;

var lastpress;

button1.addEventListener("click", function(){
	if(lastpress != 1)
	{
		button1Clicks++;
		image.src = "images/1.jpg";
		core.style.backgroundImage = "url('images/bg1.jpg')";
		button1.innerHTML = button1Clicks;
		lastpress = 1;
		button1.style.backgroundColor = "red";
		button2.style.backgroundColor = "#4CAF50";
		button3.style.backgroundColor = "#4CAF50";
	}
	
});

button2.addEventListener("click", function(){
	if(lastpress != 2)
	{
		button2Clicks++;
		image.src = "images/2.jpg";
		core.style.backgroundImage = "url('images/bg2.jpg')";
		button2.innerHTML = button2Clicks;
		lastpress = 2;	
		button1.style.backgroundColor = "#4CAF50";
		button2.style.backgroundColor = "red";
		button3.style.backgroundColor = "#4CAF50";	
	}

});

button3.addEventListener("click", function(){
	if(lastpress != 3)
	{
		button3Clicks++;
		image.src = "images/3.jpg";
		core.style.backgroundImage = "url('images/bg3.jpg')";
		button3.innerHTML = button3Clicks;	
		lastpress = 3;	
		button1.style.backgroundColor = "#4CAF50";
		button2.style.backgroundColor = "#4CAF50";
		button3.style.backgroundColor = "red";
	}

});