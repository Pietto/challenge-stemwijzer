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
			</div>
			<div id='button-div'>
				<button id='yes' onclick='eens()'>eens</button>
				<button id='none' onclick='geenKeuze()'>geen van beide</button>
				<button id='no' onclick='oneens()'>oneens</button>
				<button id='skip' onclick='skip()'>sla deze vraag over ➟</button>
			</div>
			<div id='partyOpinions'>
				<details>
					<div>
						<summary><img src='img/opinions.svg' alt='icon'>Wat vinden de partijen?</summary>
						<div>
							<h4 id='eensExplanationHeader'>Eens</h4>
						</div>
						<div>
							<h4 id='geenExplanationHeader'>Geen van beide</h4>
						</div>
						<div>
							<h4 id='oneensExplenationHeader'>Oneens</h4>
						</div>
					</div>
				</details>
			</div>
		</div>
	</div>

	<details>
		<summary>title</summary>
		<details>
			<summary>another title</summary>
			<p>actual content</p>
		</details>
	</details>

	<script type="text/javascript" src="script/script.js"></script>
</body>
</html>