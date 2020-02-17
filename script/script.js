//backbutton mouseover event

function backButton(){
	if(count == 0){
		window.open('index.php','_self');
	}else{
		goToLastQuestion();
	}
}

console.log(subjects);

function move(x) {
	x.style.position = 'relative';
	x.style.left = '-1vw';
}
function moveBack(x) {
	x.style.left = '0px';
}

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

var titleContent = '1. ' + subjects[0].title;
var statementContent = subjects[0].statement;

var h1 = document.getElementById('main-content-content-h1');
var h2 = document.getElementById('main-content-content-h2');

h1.innerHTML = titleContent;
h2.innerHTML = statementContent;

setTimeout(function(){
	document.getElementById('progress').style.width = 1/30*100+'%';
},500);

function eens(){
	console.log(count);
	count++
	updateText();
	updateProgressBar();
}
function geenKeuze(){
	console.log(count);
	count++
	updateText();
	updateProgressBar();
}
function oneens(){
	console.log(count);
	count++
	updateText();
	updateProgressBar();
}
function skip(){
	console.log(count);
	count++
	updateText();
	updateProgressBar();
}

function goToLastQuestion(){
	count--
	updateText();
	updateProgressBar();
}

function updateText(){
	h1.innerHTML = count+1 + '. ' + subjects[count].title;
	h2.innerHTML =  subjects[count].statement;
}

function updateProgressBar(){
	document.getElementById('progress').style.width = [count+1]/30*100+'%';
}

function openOpinions(){
	alert('opinions');
}