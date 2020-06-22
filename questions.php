<!DOCTYPE html>
<html>
<head>
	<title>Stemwijzer Tweede Kamer 2017</title>
	<link rel="stylesheet" type="text/css" href="styling/styling.css">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
	<script src="http://stemwijzer.dvc-icta.nl/data.js"></script>

	<div id='progressbar'><div id='progress'></div></div>
	<div id='main-content'>
		<div id='main-content-content'>
			<div id='backbutton-div'>
				<a onclick="backButton()"><img src="img/arrow.png" onmouseover="move(this)" onmouseout="moveBack(this)" alt='icon'></a>
			</div>
			<div id='main-content-content'>
				<h1 id='main-content-content-h1'>SOMETHING WENT WRONG</h1>
				<h2 id='main-content-content-h2'>SOMETHING WENT MORE WRONG</h2>
				<div id='endscreen'>
					<h1 id='main-content-content-h1-2'>Zijn er onderwerpen die u extra belangrijk vindt?</h1>
					<h2 id='main-content-content-h2-2'>Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.</h2>
					<div id='endscreen-subjects'>
						<h3>Extra belangrijke onderwerpen</h3>
						<ul id='push-list-items'>
						
						</ul>
						<button onclick='submit()'>submit</button>
					</div>
				</div>
			</div>
			<div id='button-div'>
				<button id='yes' onclick='eens()'>eens</button>
				<button id='none' onclick='geenKeuze()'>geen van beide</button>
				<button id='no' onclick='oneens()'>oneens</button>
				<button id='skip' onclick='skip()'>sla deze vraag over ➟</button>
			</div>
		</div>
	</div>

	<!-- <details>
		<summary>title</summary>
		<details>
			<summary>another title</summary>
			<p>actual content</p>
		</details>
	</details> -->

	<script type="text/javascript" src="script/script.js"></script>
</body>
</html>