var answers = [];										//array to push given answers in. format: ["pro", "none", "contra", "skip"]
for(i=0; i<subjects.length; i++){
	answers.push('');
}

function backButton(){ 									//functionality of the button to go back
	if(count == 0){ 
		window.open('index.php','_self'); 
	}else{ 
		goToLastQuestion(); 
	} 
}

var button1 = document.getElementById('yes');			//defining buttons in variable
var button2 = document.getElementById('none');
var button3 = document.getElementById('no');
var button4 = document.getElementById('skip');


button1.className = "buttons";
button2.className = "buttons";
button3.className = "buttons";
button4.className = "buttons";
var buttons = document.getElementsByClassName('buttons');
var buttonDiv = document.getElementById('button-div');

//developer tool to check the subjects object, should be deleted in the final product
console.log(subjects); 

//animation of the button that allows you to go to the last question
function move(x) { 
	x.style.position = 'relative'; 
	x.style.left = '-1vw'; 
} 
function moveBack(x) { 
	x.style.left = '0px'; 
}

let count = 0; 											//hold a reference

var titleContent = '1. ' + subjects[0].title;			//giving the title and subtitle the correct content
var statementContent = subjects[0].statement;

var PartyMatches = [];									//reference of how many points eacht party gets


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
	answers[count]='pro';
	count++
	updateItems();
}

//function when no choice has been made
function geenKeuze(){ 
	answers[count]='none';
	count++
	updateItems();
}

//function when the statement has been rejected
function oneens(){
	answers[count]='contra';
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
			document.getElementById('backbutton-div').style.display='none';
			document.getElementById('main-content-content-h1').style.display='none';
			document.getElementById('main-content-content-h2').style.display='none';
			document.getElementById('button-div').style.display='none';
			document.getElementById('endscreen').style.display='block';
		} else {}
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
var titleCopy = [];
for(i = 0; i < 30; i++){
    titleCopy[i] = titles[i].replace(' ', '');
}

for(i=0; i<30; i++){
	items = items + '<li class="opinions__item"> <input type="checkbox" id="'+titleCopy[i]+'" value="'+titleCopy[i]+'"><label><span>'+titles[i]+'  </span></label><div class="tooltip"><span class="tooltip">?<span class="tooltiptext">'+explanations[i]+'</span></span></div></li>';
}

document.getElementById('push-list-items').innerHTML = items;

//function when submitting the questions
function submit(){
	var results = [];
	for(i=0; i<30; i++){
		results[i]=document.getElementById(titleCopy[i]).checked;
	}
	Results();
}

var h1_2 = document.getElementById('main-content-content-h1-2');
var h2_2 = document.getElementById('main-content-content-h2-2');

//displays correct text, then proceeds to go to the calculate function
function Results(){
	calculateResults();
	h1_2.innerHTML = 'Uw mening komt het best overeen met:';
	h2_2.innerHTML = '';
	document.getElementById('endscreen-subjects').innerHTML = '';
}

var realPartyNames = [];
for(i=0; i<subjects[0].parties.length; i++){
	realPartyNames.push(subjects[0].parties[i].name);
}

//calculate results
function calculateResults(){
	//part 1: comparing the given results with the opinions of the political parties, and giving them point accordingly
		for(p=0; p<parties.length; p++){								//0:VVD
			PartyMatches[parties[p].name] = 0;
			for(s=0; s<subjects.length; s++){							//0:bindend referendum
				for(m=0; m<subjects[s].parties.length; m++){
					if(subjects[s].parties[m].name == parties[p].name){
						if(subjects[s].parties[m].position == answers[s]){
						PartyMatches[parties[p].name]++;
						}else{
							//do nothing
						}
					}
				}
			}
		}
		console.table(PartyMatches);

		//part 2: extra points for opinions that are, according to the player, more important

		//part 3: returning a percentage of common answers/total amount of questions

		

		//part 4: displaying results
	setTimeout(function(){displayResults();},1);
}

function displayResults(){
	h2_2.innerHTML = 'ERROR';

	//	c = count, pn = party number, ps = party score

	var PartyScoreInOrder = [];

	for(c=100; c>0; c--){
		for(pn=0; pn<parties.length; pn++){
			if(PartyMatches[parties[pn].name] == c){
				PartyScoreInOrder.push(parties[pn].name);		//+'['+pn+']'
			}
		}
	}
	console.log(PartyScoreInOrder);

	h2_2.innerHTML = PartyScoreInOrder[0];

	//display div and hide buttons
	buttonDiv.style.display='block'; 
	button1.style.display='none';
	button2.style.display='none';
	button3.style.display='none';
	button4.style.display='none';

	buttonDiv.innerHTML = '<h1>Overeenkomsten: </h1>';
	var partyPercentages = [];
	for(i=0; i<PartyScoreInOrder.length; i++){
		partyPercentages.push(100/30*PartyMatches[PartyScoreInOrder[i]]);
		partyPercentages[i] = partyPercentages[i];
		/*Math.trunc*/
	}

	for(i=0; i<PartyScoreInOrder.length; i++){
		buttonDiv.innerHTML = buttonDiv.innerHTML + '<h3>'+PartyScoreInOrder[i]+', '+partyPercentages[i]+'%</h3>'+
		'<div class="PBPS"><div class="PBPSI" id="PBPSI'+i+'" style="width:1%";></div></div>';
	}
	// setTimeout(function(){for(i=0; i<PartyScoreInOrder.length; i++){document.getElementById('PBPSI'+i).+'%';}},500);
}				/*must use partyPercentages, developer tool*/