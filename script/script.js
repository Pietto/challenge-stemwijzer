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
		updateText(); 
		updateProgressBar(); 
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

function checkAnswer(){
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

// var titleCopy = titles.replace(/\s/g, '');
for(i = 0; i < 30; i++)
{
    titleCopy[i] = titles[i].replace(' ', '');
}

for(i=0; i<30; i++){
	items = items + '<li class="opinions__item"> <input type="checkbox" id="'+titleCopy[i]+'" value="'+titleCopy[i]+'"><label><span>'+titles[i]+'  </span></label><div class="tooltip"><span class="tooltip">?<span class="tooltiptext">'+explanations[i]+'</span></span></div></li>';
}

document.getElementById('push-list-items').innerHTML = items;

function submit(){
	var results = [];
	for(i=0; i<30; i++){
		results[i]=document.getElementById(titleCopy[i]).checked;
	}
	Results();
}

var h1_2 = document.getElementById('main-content-content-h1-2');
var h2_2 = document.getElementById('main-content-content-h2-2');

function Results(){
	calculateResults();
	h1_2.innerHTML = 'Uw mening komt het best overeen met:';
	h2_2.innerHTML = '';
	document.getElementById('endscreen-subjects').innerHTML = '';
}
var partyResults = [];

function calculateResults(){
	for(i=0; i<parties.length; i++){
		partyResults.push({name: parties[i].name, match: 0})
	}
	for(z=0; z<subjects.length; z++){
		for(i=0; i<subjects[z].parties.length; i++){
			if(subjects[z].parties[i].position == answers[z]){
				for(y=0; y<partyResults.length; y++){
					if(subjects[z].parties[i].name == partyResults[y].name){
						partyResults[i].match = partyResults[i].match+1;
					}
				}
			}
		}
	}
	setTimeout(function(){
		displayResults();
	},1);	
}

function displayResults(){
	h2_2.innerHTML = 'aaa';
}

var partyAnswers = {PVV: [], SP: [], D66: [], GroenLinks: [], Partij_voor_de_Dieren: [], _50Plus: [], VNL: [], Nieuwe_Wegen: [], Forum_voor_Democratie: [], De_Burger_Beweging: [], Vrijzinnige_Partij: [], Piratenpartij: [], Libertarische_Partij: [], Lokaal_in_de_Kamer: [], Niet_Stemmers: [], VVD: [], PvdA: [], CDA: [], ChristenUnie: [], SGP: [], OndernemersPartij: [], DENK: [], Artikel_1: []}

var parties = ['PVV', 'SP', 'D66', 'GroenLinks', 'Partij_voor_de_Dieren', '_50Plus', 'VNL', 'Nieuwe_Wegen',
				'Forum_voor_Democratie', 'De_Burger_Beweging', 'Vrijzinnige_Partij', 'Piratenpartij',
				'Libertarische_Partij', 'Lokaal_in_de_Kamer', 'Niet_Stemmers', 'VVD', 'PvdA', 'CDA',
				'ChristenUnie', 'SGP', 'OndernemersPartij', 'DENK', 'Artikel_1'];

var wrongPartyNames = ['Artikel 1','De Burger Beweging', 'Forum voor Democratie', 'Libertarische Partij', 'Lokaal in de Kamer',
'Niet Stemmers', 'Nieuwe Wegen', 'Partij voor de Dieren', 'Vrijzinnige Partij', '50Plus'];
var correctPartyNames = ['Artikel_1','De_Burger_Beweging', 'Forum_voor_Democratie', 'Libertarische_Partij', 'Lokaal_in_de_Kamer',
'Niet_Stemmers', 'Nieuwe_Wegen', 'Partij_voor_de_Dieren', 'Vrijzinnige_Partij', '_50Plus'];

for(y=0; y<wrongPartyNames.length; y++){
	for(x=0; x<subjects.length; x++){
		for(i=0; i<23; i++){
			if(subjects[x].parties[i].name == wrongPartyNames[y]){
				subjects[x].parties[i].name = correctPartyNames[y];
			}
		}
	}
}


for(y=0; y<parties.length; y++){
	for(i=0; i<subjects.length; i++){
		for(x=0; x<23; x++){
			if(subjects[i].parties[x].name == parties[y]){
				switch(parties[y]) {
					case 'PVV':
					  	partyAnswers.PVV.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'SP':
					  	partyAnswers.SP.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'D66':
					  	partyAnswers.D66.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'GroenLinks':
					  	partyAnswers.GroenLinks.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'Partij_voor_de_Dieren':
					  	partyAnswers.Partij_voor_de_Dieren.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case '_50Plus':
					  	partyAnswers._50Plus.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'VNL':
					  	partyAnswers.VNL.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'Nieuwe_Wegen':
					  	partyAnswers.Nieuwe_Wegen.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'Forum_voor_Democratie':
					  	partyAnswers.Forum_voor_Democratie.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'De_Burger_Beweging':
					  	partyAnswers.De_Burger_Beweging.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'Vrijzinnige_Partij':
					  	partyAnswers.Vrijzinnige_Partij.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'Piratenpartij':
					  	partyAnswers.Piratenpartij.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'Libertarische_Partij':
					  	partyAnswers.Libertarische_Partij.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'Lokaal_in_de_Kamer':
					  	partyAnswers.Lokaal_in_de_Kamer.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'Niet_Stemmers':
					  	partyAnswers.Niet_Stemmers.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'VVD':
					  	partyAnswers.VVD.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'PvdA':
					  	partyAnswers.PvdA.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'CDA':
					  	partyAnswers.CDA.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'ChristenUnie':
					  	partyAnswers.ChristenUnie.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'SGP':
					  	partyAnswers.SGP.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'OndernemersPartij':
					  	partyAnswers.OndernemersPartij.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'DENK':
					  	partyAnswers.DENK.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					case 'Artikel_1':
					  	partyAnswers.Artikel_1.push(subjects[i].parties[x].position);
					  	console.log(parties[y]);
					  	break;
					default:
				}
			}else{}
		}
	}
}

console.log(partyAnswers);