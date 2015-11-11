


var questions = [
	"Do I like to play Basketball? YES or NO?",
	"Do I like to play the Trumpet? YES or NO?",
	"Do I like to watch Battlestar Galactica? YES or NO?"
	];

var answers = [
	"YES",
	"YES",
	"YES"
	];

var basketball=prompt(questions[0]).toUpperCase();
if (answers[0]==basketball) {
	document.getElementById("bballOne").innerHTML="Yes, I do play basketball. Not many people guess basketball since I'm pretty small."; 
} else {
	document.getElementById("bballTwo").innerHTML="Sorry, 'No' is incorrect. I have played basketball since I was 8.";
}

var music= prompt(questions[1]).toUpperCase();
if (answers[1]==music) {
	document.getElementById("trumpetOne").innerHTML="Yes, I do play the trumpet. I started because I found Miles Davis to be amazing!";
} else {
	document.getElementById("trumpetTwo").innerHTML= "Sorry. 'No' is incorrect. I've played the trumpet since middle school";
}

var TV= prompt(questions[2]).toUpperCase();
if (answers[2]==TV) {
	document.getElementById("BSGOne").innerHTML="Yes, I love to watch Battlestar Galactica! So Say We All!";
} else {
	document.getElementById("BSGTwo").innerHTML="Sorry. 'No' is incorrect. Battlestar Galactica is one of my favorite TV shows.";
}


