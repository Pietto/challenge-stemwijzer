var jack = document.getElementById("start-page-icon-1");
var interval;
jack.onmouseover = function(){
	interval = setInterval(function(){
		jack.src="img/person-circle-jack.png";
		setTimeout(function(){
			jack.src="img/person-circle.png";
		},250);
	},500);
	jack.src="img/person-circle-jack.png";
}
jack.onmouseout = stopInterval

function stopInterval(){
	clearInterval(interval);
}


var lock = document.getElementById("start-page-icon-2");
var interval;
lock.onmouseover = function(){
	interval = setInterval(function(){
		lock.src="img/lock_open.png";
		setTimeout(function(){
			lock.src="img/lock.png";
		},250);
	},500);
	lock.src="img/lock.png";
}
lock.onmouseout = stopInterval