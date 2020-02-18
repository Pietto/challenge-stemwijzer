//backbutton mouseover event

function backButton(){
	if(count == 0){
		window.open('index.php','_self');
	}else{
		goToLastQuestion();
	}
}

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