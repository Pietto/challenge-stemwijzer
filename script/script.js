//backbutton mouseover event 
 
function backButton(){ 
	if(count == 0){ 
		window.open('index.php','_self'); 
	}else{ 
		goToLastQuestion(); 
	} 
} 


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
	console.log(count); 
	count++ 
	updateItems();
} 

//function when no choice has been made
function geenKeuze(){ 
	console.log(count); 
	count++ 
	updateItems();
}

//function when the statement has been rejected
function oneens(){ 
	console.log(count); 
	count++
	updateItems();
}

//function when the statement has been skipped
function skip(){ 
	console.log(count); 
	count++ 
	updateItems();
} 

//function to go the the last question
function goToLastQuestion(){ 
	count-- 
	updateText(); 
	updateProgressBar(); 
} 

//defines all functions that should update/change content
function updateItems(){
	updateText(); 
	updateProgressBar(); 
	updateOpinions();
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
	document.getElementById('eensExplanationHeader').parentElement.innerHTML = '<h4 id="eensExplanationHeader">Eens</h4>';
	document.getElementById('geenExplanationHeader').parentElement.innerHTML = '<h4 id="geenExplanationHeader">Eens</h4>';
	document.getElementById('oneensExplenationHeader').parentElement.innerHTML = '<h4 id="oneensExplenationHeader">Oneens</h4>';

	//add new content
	Object.keys(subjects[count].parties).forEach(function(key) {
		if(subjects[count].parties[key].position == 'pro'){
			var eeh = document.getElementById('eensExplanationHeader');
			eeh.parentElement.innerHTML += '<detail><summary>title</summary><p>opinions</p></detail>';
		}else if(subjects[count].parties[key].position == 'none'){
			var geh = document.getElementById('geenExplanationHeader');
			geh.parentElement.innerHTML += '<p class="opinions">'+subjects[count].parties[key].name+'</p>';
		}else if(subjects[count].parties[key].position == 'contra'){
			var geh = document.getElementById('oneensExplenationHeader');
			geh.parentElement.innerHTML += '<p class="opinions">'+subjects[count].parties[key].name+'</p>';
		}
	});
}