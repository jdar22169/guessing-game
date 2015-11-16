var yes="YES";
var yes2="Y";

var guess1=prompt("Do I play basketball? YES or NO?").toUpperCase();
function guessBball() {
	if (guess1==yes || guess1==yes2) {
	document.getElementById("bball").innerHTML="Yes, I do play basketball. Not many people guess basketball since I'm pretty small.";
} else {
	document.getElementById("bball").innerHTML="Sorry, 'No' is incorrect. I have played basketball since I was 8";
	}

}
guessBball();

var guess2=prompt("Do I play the trumpet? YES or NO?").toUpperCase();
function guessTrump() {
	if (guess2==yes || guess2==yes2) {
		document.getElementById("trumpet").innerHTML="Yes, I do play the trumpet. I find Miles Davis amazing!";
	} else {
		document.getElementById("trumpet").innerHTML="No is incorrect. I've played the trumpet since middle school";
	}
	
}

guessTrump();

var guess3= prompt("Do I have cat that weighs 21 pounds? YES or NO?").toUpperCase();
function guessCat() {
	 if (guess3==yes || guess3==yes2) {
	 document.getElementById("cat").innerHTML="Yes, I do have an enourmous cat! ";
} else {
	 document.getElementById("cat").innerHTML="Sorry. 'No' is incorrect. My cat is huge!";

	}
}	

guessCat();

var guess4=prompt("Do I like to watch Battlestar Galactica? YES or NO?").toUpperCase();
function guessBSG() {
	if (guess4==yes || guess4==yes2) {
	document.getElementById("BSG").innerHTML="Yes, I love to watch Battlestar Galactica! So Say We All!";
} else {
	document.getElementById("BSG").innerHTML="Sorry. 'No' is incorrect. Battlestar Galactica is one of my favorite TV shows.";
	}
}

guessBSG();

var NO="NO";
var no="N";
var guess5= prompt("Do I like to eat fish?").toUpperCase();

function guessFish() {
	if (guess5==NO || guess5==no) {
	document.getElementById("fish").innerHTML="Correct! I really don't like fish except maybe fish and chips because of the batter";
} else {
	document.getElementById("fish").innerHTML="Sorry. Yes is incorrect. Fish is one of my least favorite foods.";
	
	}
}

guessFish();

var number=3;
var guess6=prompt("Between 1-10, what number am I thinking of? Please type the actual number.");

function guessNumber() {
	if (guess6==number) {
	document.getElementById("digit").innerHTML="Correct! I think any number with 3 in it is lucky!";
	} else if (guess6 > number) {
	document.getElementById("digit").innerHTML="Almost! Your guess was too high";
	} else if (guess6 < number) {
	document.getElementById("digit").innerHTML="Almost! Your guess was too low";
	}

}

guessNumber();