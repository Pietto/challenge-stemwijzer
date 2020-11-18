parties[22].name = '';									//if parties need to be deleted, change the name to '' like shown here

var answers = [];										//array to push given answers in. format: ["pro", "none", "contra", "skip"]
for(i=0; i<subjects.length; i++){
	answers.push('');
}

var status = 'all';										//later, this var can be changed in order to filter the parties

function backButton(){ 									//functionality of the button to go back
	if(count == 0){ 
		window.open('index.php','_self'); 
	}else{
		goToLastQuestion(); 
	}
}

var button1 = document.getElementById('yes');			//defining main buttons in variable
var button2 = document.getElementById('none');
var button3 = document.getElementById('no');
var button4 = document.getElementById('skip');

var btn1;												//declaring buttons for the filtering of parties
var btn2;
var btn3;
var btn4;

button1.className = "buttons";							//giving classnames to the main buttons
button2.className = "buttons";
button3.className = "buttons";
button4.className = "buttons";
var buttons = document.getElementsByClassName('buttons');
var buttonDiv = document.getElementById('button-div');
console.log(buttonDiv);

function move(x) { 										//animation of the button which allowes you to go back
	x.style.position = 'relative'; 
	x.style.left = '-1vw'; 
} 
function moveBack(x) { 
	x.style.left = '0px'; 
}

let count = 0; 											//reference to check which question is currently displayed

var titleContent = '1. ' + subjects[0].title;			//giving the title and subtitle the correct content
var statementContent = subjects[0].statement;

var PartyMatches = [];									//reference of how many points eacht party gets
for(p=0; p<parties.length; p++){
	PartyMatches[parties[p].name] = 0;
}

var h1 = document.getElementById('main-content-content-h1');
var h2 = document.getElementById('main-content-content-h2');

h1.innerHTML = titleContent; 
h2.innerHTML = statementContent; 

//giving the progressbar at the top the correct width for the start of the page
//this gives a simple smooth animation when the form has been started
setTimeout(function(){ 
	document.getElementById('progress').style.width = 1/30*100+'%'; 
},500);

//function when the statement has been agreed upon
function eens(){ 
	answers[count] = 'pro';
	count++
	updateItems();
}

//function when no choice has been made
function geenKeuze(){ 
	answers[count] = 'none';
	count++
	updateItems();
}

//function when the statement has been rejected
function oneens(){
	answers[count] = 'contra';
	count++
	updateItems();
}

//function when the statement has been skipped
function skip(){
	answers[count] = 'skip';
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
			document.getElementById('backbutton-div').style.display = 'none';
			document.getElementById('main-content-content-h1').style.display = 'none';
			document.getElementById('main-content-content-h2').style.display = 'none';
			document.getElementById('button-div').style.display = 'none';
			document.getElementById('endscreen').style.display = 'block';
		}else{}
	}else{
		removeHighlights();												//remove all highlights on buttons first
		updateText(); 													//display new text
		updateProgressBar(); 											//update progressbar
		checkAnswer();													//check whether answer has been given before
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

//if statement has been answered before, this will project the given answer
function checkAnswer(){
	if(answers[count] != ""){
		removeHighlights();
		switch(answers[count]){
			case 'pro':
				button1.classList.add("activeButton");
			break;
			case 'none':
				button2.classList.add("activeButton");
			break;
			case 'contra':
				button3.classList.add("activeButton");
			break;
			case 'skip':
				button4.classList.add("activeButton");
			default:
				console.log('error on line ->');				//dev tool
		}
	}
}

function removeHighlights(){									//removes highlights from buttons
	button1.classList.remove('activeButton');
	button2.classList.remove('activeButton');
	button3.classList.remove('activeButton');
	button4.classList.remove('activeButton');
}

//some errors were in the give titles and explanations, so i defined my own here
var titles = ['Bindend referendum', 'Maatschappelijke dienstplicht', 'Anoniem solliciteren', 'Groepsbelediging', 'Teelt en verkoop wiet', 'Vervroegde vrijlating', 'Vennootschapsbelasting', 'Belasting hoogste inkomens', 'Tijdelijke arbeidscontracten', 'AOW-leeftijd 65', 'Verzekering zzp\'ers',' Leenstelsel studenten', 'Geld cultuur', 'Islamitische immigranten', 'Kinderpardon', 'Onderdak illegalen', 'Hypotheekrente', 'Verhuurdersheffing', 'Schiphol', 'Kilometerheffing', 'Nieuwe wegen', 'Kolencentrales', 'Btw-tarief vlees', 'Voltooid leven', 'Afschaffing eigen risico', 'Landelijk zorgfonds', 'Defensie-uitgaven', 'Europees leger', 'Ontwikkelingshulp', 'EU-lidmaatschap'];
var explanations = ['"Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden."',
'"Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg."',
'"Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden."',
'"Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn."',
'"De teelt en verkoop van wiet moet legaal worden."',
'"De vervroegde vrijlating onder voorwaarden van gevangenen moet stoppen. Zij moeten hun straf helemaal uitzitten."',
'"De belasting over de winst van ondernemingen (vennootschapsbelasting) moet omlaag."',
'"De hoogste inkomensgroepen moeten meer belasting gaan betalen."',
'"De periode waarbinnen je meerdere tijdelijke arbeidscontracten na elkaar kunt afsluiten, moet langer worden dan twee jaar."',
'"De AOW-leeftijd moet weer 65 jaar worden."',
'"Er moet een verplichte verzekering tegen arbeidsongeschiktheid en ziekte komen voor alle zelfstandigen zonder personeel (zzp\'ers)."',
'"Het leenstelsel voor studenten moet worden afgeschaft. De basisbeurs moet weer terugkomen."',
'"Er moet meer geld naar kunst en cultuur."',
'"Nederland moet de grenzen sluiten voor islamitische immigranten."',
'"In Nederland opgegroeide kinderen van asielzoekers moeten hier kunnen blijven (kinderpardon)."',
'"De regering moet gemeenten verbieden illegale vreemdelingen onderdak te geven."',
'"De regeling voor de aftrek van de hypotheekrente moet niet verder worden aangetast."',
'"Woningcorporaties moeten meer goedkope huurwoningen bouwen. Daarom moet de belasting die zij betalen over huurwoningen (verhuurdersheffing) worden afgeschaft."',
'"Luchthaven Schiphol moet kunnen uitbreiden."',
'"De regering moet niet het bezit van de auto, maar het aantal gereden kilometers belasten."',
'"Er moet meer geld naar de aanleg van nieuwe wegen."',
'"Alle kolencentrales mogen voorlopig open blijven."',
'"Voor vlees moet het hoge btw-tarief van 21 procent gaan gelden."',
'"Ouderen die vinden dat hun leven voltooid is moeten hulp kunnen krijgen om een einde aan hun leven te maken."',
'"Het eigen risico in de zorg moet worden afgeschaft, ook als dat betekent dat de premies omhoog gaan."',
'"Er moet een landelijk zorgfonds komen, zodat het stelsel van particuliere zorgverzekeraars kan verdwijnen."',
'"De uitgaven voor defensie moeten de komende jaren fors omhoog naar 2 procent van het nationale inkomen (de NAVO-norm)."',
'"Er moet een Europees leger komen."',
'"Nederland moet meer geld uitgeven voor de ontwikkeling van arme landen."',
'"Nederland moet uit de Europese Unie (EU) stappen."'];

var items = '';
var titleCopy = [];										//maked a copy of the title, without spaces
for(i = 0; i < 30; i++){
    titleCopy[i] = titles[i].replace(' ', '');
}


//making the forum to add weight for specific subjects
//extra weight will be instantly added or removed
for(i=0; i<subjects.length; i++){
	items = items + '<li class="opinions__item"> <input type="checkbox" id="checkbox'+ i +'" value="'+ titleCopy[i] +'" onclick="weight('+ i +')"> <label></label><div class="tooltip"><span id="toolipHover" class="tooltip">'+ titles[i] +'<span class="tooltiptext">'+ explanations[i] +'</span></span></div></li>';
}
document.getElementById('push-list-items').innerHTML = items;

//function when submitting the questions
function submit(){
	var results = [];
	endscreen_subjects.innerHTML = '';
	h1_2.innerHTML = 'Wilt u nog sorteren op partijen?';
	h2_2.innerHTML = '';

	btn1 = document.createElement('BUTTON');				//creates buttons to filter the parties
	btn1.innerHTML = 'alle partijen';
	btn1.style.backgroundColor = "rgb(1,180,220)";
	btn2 = document.createElement('BUTTON');
	btn2.innerHTML = 'seculaire partijen';
	btn3 = document.createElement('BUTTON');
	btn3.innerHTML = 'grote partijen';
	h2_2.appendChild(btn1);
	h2_2.appendChild(btn2);
	h2_2.appendChild(btn3);

	btn1.onclick = function(){
		status='all';
		btn1.style.backgroundColor = "rgb(1,180,220)";
		btn2.style.backgroundColor = "black";
		btn3.style.backgroundColor = "black";
	};
	btn2.onclick = function(){
		status='secularOnly';
		btn1.style.backgroundColor = "black";
		btn2.style.backgroundColor = "rgb(1,180,220)";
		btn3.style.backgroundColor = "black";
	};
	btn3.onclick = function(){
		status='bigOnly';
		btn1.style.backgroundColor = "black";
		btn2.style.backgroundColor = "black";
		btn3.style.backgroundColor = "rgb(1,180,220)";
	};

	btn4 = document.createElement('BUTTON');
	btn4.innerHTML = 'naar de berekening';
	btn4.onclick = function(){
		calculateResults(status);
		h2_2.remove();
	};
	h2_2.appendChild(btn4);
}

var h1_2 = document.getElementById('main-content-content-h1-2');
var h2_2 = document.getElementById('main-content-content-h2-2');

var realPartyNames = [];
for(i=0; i<subjects[0].parties.length; i++){
	realPartyNames.push(subjects[0].parties[i].name);
}

//calculate results
function calculateResults(status){
	//part 1: comparing the given results with the opinions of the political parties, and giving them point accordingly
		for(p=0; p<parties.length; p++){
			for(s=0; s<subjects.length; s++){
				for(m=0; m<subjects[s].parties.length; m++){
					if(subjects[s].parties[m].name == parties[p].name){
						if(subjects[s].parties[m].position == answers[s]){
							PartyMatches[parties[p].name]++;
						}
					}
				}
			}
		}
		console.table(PartyMatches);

		//extra points should already be added by now

		//final percentage will be calculated later

		//small time out to prevent weird buggs from happening
	setTimeout(function(){displayResults(status);},1);
}

function displayResults(status){

	//	c = count, pn = party number, ps = party score

	var PartyScoreInOrder = [];									//array which contains all scores of the parties, in order from highest to lowest

	for(c=100; c>=0; c--){										//gives parties in order
		for(pn=0; pn<parties.length; pn++){
			if(PartyMatches[parties[pn].name] == c && PartyMatches[parties[pn].name] != ''){
				if(status == 'secularOnly'){
					if(parties[pn].secular == true){
						PartyScoreInOrder.push(parties[pn].name);
					}
				}else if(status == 'bigOnly'){
					if(parties[pn].size > 8){
						PartyScoreInOrder.push(parties[pn].name);
					}
				}else{
					PartyScoreInOrder.push(parties[pn].name);
				}
			}
		}
	}
	h1_2.innerHTML = '';
	buttonDiv.style.marginTop = '-17.5vh';

	buttonDiv.style.display = 'block';							//display div and hide buttons 
	button1.style.display = 'none';
	button2.style.display = 'none';
	button3.style.display = 'none';
	button4.style.display = 'none';

	buttonDiv.innerHTML = '<h1>Overeenkomsten: </h1>';
	var partyPercentages = [];
	for(i=0; i<PartyScoreInOrder.length; i++){										
		partyPercentages.push(100/60*PartyMatches[PartyScoreInOrder[i]]);
		partyPercentages[i] = Math.trunc(partyPercentages[i]);
		if(partyPercentages[i] > 100){									//if score is higher than 100%, it will still be displayed as 100% in order to prevent the end-user from seeing my terribly coded mistake
			partyPercentages[i] = 100;
			console.log('ERROR: party percentage higher than 100%')
		}
	}
	//creates the list with parties in <h3> tag, % score
	for(i=0; i<PartyScoreInOrder.length; i++){
		buttonDiv.innerHTML = buttonDiv.innerHTML + '<h3>' + PartyScoreInOrder[i] + ', ' + partyPercentages[i] + '%</h3>' +
		'<div class="PBPS"><div class="PBPSI" id="PBPSI' + i + '" style="width:1%";></div></div>';
		console.log('reached');
	}
	//progressbar fills after 1/2 second to desired %. progressbar displays from 0% to 100%
	setTimeout(function(){
		for(i=0; i<PartyScoreInOrder.length; i++){
			document.getElementById('PBPSI'+i).style.width=partyPercentages[i] + '%';
		}
	},500);
}


//function adds weight to statements that are more important to the player
function weight(number){
	for(i=0; i<subjects[number].parties.length; i++){
		if(subjects[number].parties[i].position == answers[number]){
			PartyMatches[subjects[number].parties[i].name] = PartyMatches[subjects[number].parties[i].name] + 1;
		}
	}
}


/*   dev notes:


-remove devtools
-Libertarische Partij shows up twice in the results


*/