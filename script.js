let modal = document.getElementById("myModal");
let button = document.getElementById("rules");

button.onclick = function() {
	let img = document.getElementById("myImg");
	let modalImg = document.getElementById("img01");
	let captionText = document.getElementById("caption");
  	modal.style.display = "block";
  	modalImg.src = img.src;
  	captionText.innerHTML = img.alt;
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
	modal.style.display = "none";
}

function elementIsClicked(element) {
	showGame();
	appendAndStyleElement(element);
	checkWhoWins();
}

function showGame() {
	let startView = document.getElementById("gameOptions");
	let gameView = document.getElementById("game");
	addNewStylesGameView(startView, gameView);
}

function appendAndStyleElement(element) {
	$(element).clone().appendTo("#player").removeClass("element").addClass("pickedElement");
}

function addNewStylesGameView(startView, gameView) {
	startView.style.display = "none";
	gameView.style.display = "block";
}

function computersChoise() {
	showRandonmlyChosenOption()
	showButton();
}

function showRandonmlyChosenOption() {
	let options = document.getElementsByClassName("element");
	const chosenOption = options[Math.floor(Math.random() * options.length)];
	$(chosenOption).clone().appendTo( "#computer" ).removeClass("element").addClass("pickedElement");
}

setTimeout(function showButton() {
	$("#tryAgainButton").css("display", "inline-block");
	$("#message").css("display", "inline-block");
}, 2000);

function clickButton() {
	$("#gameResult").click(window.open("index3.html", "_self"));	
}

function checkWhoWins() {
	let playersValue = $("#player").children("div").attr("id");
	let computersValue = $("#computer").children("div").attr("id");
	let resultCounter = parseInt($("#result").text());
	compareValues(playersValue, computersValue);
	showResult(resultCounter);
}

function showResult(resultCounter) {
	if($("#message").text() === "You win") {
		$("#result").text(resultCounter +1);
		return
	} else if($("#message").text() === "You lose") {
		$("#result").text(resultCounter-1);
		return
	}
}

function compareValues (playersValue, computersValue) {
	if (playersValue === computersValue) {
		changeTextInMessageBox("Equal Value");
	} else if (playersValue === "rock" && computersValue === "scissors") {
		changeTextInMessageBox("You win");
	} else if (playersValue === "rock" && computersValue === "paper") {
		changeTextInMessageBox("You lose");
	} else if (playersValue === "paper" && computersValue === "rock") {
		changeTextInMessageBox("You win");
	} else if (playersValue === "paper" && computersValue === "scissors") {
		changeTextInMessageBox("You lose");
	} else if (playersValue === "scissors" && computersValue === "paper") {
		changeTextInMessageBox("You win");
	} else if (playersValue === "scissors" && computersValue === "rock") {
		changeTextInMessageBox("You lose");
	}
}

function changeTextInMessageBox (text) {
	$("#message").text(text);
}

$(document).ready(computersChoise());