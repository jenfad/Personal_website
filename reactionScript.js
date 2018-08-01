var shapeDiv = document.getElementById("clickHere");
var resultsDiv = document.getElementById("results");
var speedSpan = document.getElementById("speed");

var start = new Date().getTime();
function makeShapeAppear (){
	shapeDiv.style.display = "block";
	start = new Date().getTime();
}
function delayAppear (){
	setTimeout(makeShapeAppear, Math.random()*2000); //vary amount of milliseconds before restart
}
var startButton = document.getElementById("startGame")

startButton.onclick = function () {
    startButton.innerHTML = "Restart";
    document.getElementById("elapsed").innerHTML = "";
    resultsDiv.style.display = "none";
    speedSpan.style.animationDuration = "0s";
    tries = 0;
	var timeArray = new Array ();
	delayAppear ();
	
	
	shapeDiv.onclick = function () {
		if (tries < 9) {
			var end = new Date().getTime();
			var elapsed = (end - start)/1000; //give seconds not ms
			timeArray.push(elapsed);
			document.getElementById("elapsed").innerHTML = elapsed.toFixed(2) + " seconds"
			
			shapeSize = Math.random ()* 180 + 35
			shapeDiv.style.width = shapeSize + "px"
			shapeDiv.style.height = shapeDiv.style.width
			
			function randomFloor (ceiling) { return Math.floor(Math.random()*ceiling)}
			
			shapeDiv.style.borderRadius = randomFloor(2)*50 + "%"
			//to be able to give either 0 or 50 (%)
			
			//can also do with position:relative in  css up there, then change top and left style
            shapeDiv.style.marginTop = Math.random() * 18 + 5 + "%";
            shapeDiv.style.marginLeft = Math.random() * 60 + 6 + "%";
			
			shapeDiv.style.backgroundColor = "rgb(" + randomFloor(256) + "," + randomFloor(256) + "," + randomFloor(256) + ")";
			/* Another way to randomly generate colors:
			function getRandomColor() {
				var letters = '0123456789ABCDEF'; //break into array what the color strings are composed of
				var color = '#';
				for (var i = 0; i < 6; i++ ) {
					color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
			*/
			
			shapeDiv.style.display = "none";
			tries++
			delayAppear();
		} else {
			var end = new Date().getTime();
			var elapsed = (end - start)/1000; //get 10th time
			timeArray.push(elapsed);
			var total = 0;
			for(var i = 0; i < timeArray.length; i++) {
				total += timeArray[i];
			}
			var avg = total / timeArray.length;
			
			shapeDiv.style.display = "none";
			resultsDiv.style.display ="block";
			resultsDiv.innerHTML = "<h3>Average Time: " + avg.toFixed(2) + " seconds!</h3>";
            speedSpan.style.animationDuration = "1.5s";
		}
		
	}
}