//backbutton mouseover event 

var answers = [];
for(i=0; i<subjects.length; i++){
	answers.push('');
}
 
function backButton(){ 
	if(count == 0){ 
		window.open('index.php','_self'); 
	}else{ 
		goToLastQuestion(); 
	} 
}

var button1 = document.getElementById('yes');
var button2 = document.getElementById('none');
var button3 = document.getElementById('no');
var button4 = document.getElementById('skip');


//developer tool to check the subjects object
console.log(subjects); 

//moves the button (and back) when hovered
function move(x) { 
	x.style.position = 'relative'; 
	x.style.left = '-1vw'; 
} 
function moveBack(x) { 
	x.style.left = '0px'; 
}

//hold a reference
let count = 0;

// var score = [{}] 
 
// console.log('length: ' + subjects[0].parties.length); 
 
// for(i=0;i<subjects.length;i++){ 
// 	score.push({party: subjects[0].parties[i].name, score: 0}); 
// } 
// console.log(score); 
 
/*var score = [{party: 'vvd', points: 0},{party: 'pvda', points: 0}]; 
score.push({party: '50plus', score: 0});*/ 
 
/*var titleElement = document.getElementById('main-content-content-h1');*/ 
 

 //giving the title+subtitle the correct content
var titleContent = '1. ' + subjects[0].title; 
var statementContent = subjects[0].statement; 
 
var h1 = document.getElementById('main-content-content-h1'); 
var h2 = document.getElementById('main-content-content-h2'); 
 
h1.innerHTML = titleContent; 
h2.innerHTML = statementContent; 

//giving the progressbar at the top the correct width for the start of the page
//(this gives a simple smooth animation when the form has been started)
setTimeout(function(){ 
	document.getElementById('progress').style.width = 1/30*100+'%'; 
},500); 

//function when the statement has been agreed upon
function eens(){ 
	answers[count]='eens';
	count++ 
	updateItems();
} 

//function when no choice has been made
function geenKeuze(){ 
	answers[count]='geenKeuze';
	count++ 
	updateItems();
}

//function when the statement has been rejected
function oneens(){
	answers[count]='oneens';
	count++
	updateItems();
}

//function when the statement has been skipped
function skip(){
	answers[count]='skip';
	count++ 
	updateItems();
} 

//function to go the the last question
function goToLastQuestion(){ 
	count--
	updateItems();
} 

//defines all functions that should update/change content
function updateItems(){
	if(count>=30){
		var txt;
		var r = confirm("Weet u zeker dat u naar de resultaten wilt gaan?");
		if (r == true) {
			alert("You pressed OK!");
		} else {
			alert("You pressed Cancel!"); 
		}
		document.getElementById("demo").innerHTML = txt;
	}else{
		updateText(); 
		updateProgressBar(); 
		// updateOpinions();
		checkAnswer();
	}
}

//updates the title+subtitle
function updateText(){ 
	h1.innerHTML = count+1 + '. ' + subjects[count].title; 
	h2.innerHTML =  subjects[count].statement; 
}

//updates the progressbar at the top of the screen
function updateProgressBar(){ 
	document.getElementById('progress').style.width = [count+1]/30*100+'%'; 
}

updateOpinions();
function updateOpinions(){
	//wipe all content first
	var eeh = document.getElementById('eensExplanationHeader');
	var geh = document.getElementById('geenExplanationHeader');
	var oeh = document.getElementById('oneensExplenationHeader');
	eeh.parentElement.innerHTML = '<h4 id="eensExplanationHeader">Eens</h4>';
	geh.parentElement.innerHTML = '<h4 id="geenExplanationHeader">Geen van beide</h4>';
	oeh.parentElement.innerHTML = '<h4 id="oneensExplenationHeader">Oneens</h4>';

	//add new content
	
}

function checkAnswer(){
	console.log(count);
	if(answers[count] != ""){
		removeHighlights();
		switch(answers[count]){
			case 'eens':
			button1.classList.add("activeButton");
			break;
			case 'geenKeuze':
			button2.classList.add("activeButton");
			break;
			case 'oneens':
			button3.classList.add("activeButton");
			break;
			case 'skip':
			button4.classList.add("activeButton");
		}
	}
}

function removeHighlights(){
	button1.classList.remove('activeButton');
	button2.classList.remove('activeButton');
	button3.classList.remove('activeButton');
	button4.classList.remove('activeButton');
}