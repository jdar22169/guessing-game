


var questions= [
	"Do I like to play Basketball? YES or NO?",
	"Do I like to play the Trumpet? YES or NO?",
	"Do I like to watch Battlestar Galactica? YES or NO?"
	];

var answers= [
	"YES",
	"YES",
	"YES"
	];
document.getElementById('bballPic').setAttribute('style','visibility:hidden')
document.getElementById('milesPic').setAttribute('style','visibility:hidden')
document.getElementById('bsgPic').setAttribute('style','visibility:hidden')

var basketball=prompt(questions[0]).toUpperCase();
if (answers[0]==basketball) {
	document.getElementById("bballOne").innerHTML="Yes, I do play basketball. Not many people guess basketball since I'm pretty small."; 
	document.getElementById('bballPic').setAttribute('style','visibility:visible');

} else {
	document.getElementById("bballTwo").innerHTML="Sorry, 'No' is incorrect. I have played basketball since I was 8.";
	document.getElementById('bballPic').setAttribute('style','visibility:hidden');
}

var music=prompt(questions[1]).toUpperCase();
if (answers[1]==music) {
	document.getElementById("trumpetOne").innerHTML="Yes, I do play the trumpet. I started because I found Miles Davis to be amazing!";
	document.getElementById('milesPic').setAttribute('style','visibility:visible');
} else {
	document.getElementById("trumpetTwo").innerHTML= "Sorry. 'No' is incorrect. I've played the trumpet since middle school";
	document.getElementById('milesPic').setAttribute('style','visibility:hidden');
}

var TV=prompt(questions[2]).toUpperCase();
if (answers[2]==TV) {
	document.getElementById("BSGOne").innerHTML="Yes, I love to watch Battlestar Galactica! So Say We All!";
	document.getElementById('bsgPic').setAttribute('style','visibility:visible');
} else {
	document.getElementById("BSGTwo").innerHTML="Sorry. 'No' is incorrect. Battlestar Galactica is one of my favorite TV shows.";
	document.getElementById('bsgPic').setAttribute('style','visibility:hidden');
}


