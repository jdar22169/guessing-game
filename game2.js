var yes= "YES";
var yes2= "Y";
var guess1=prompt("Do I play basketball? YES or NO?").toUpperCase();
if (guess1==yes || guess1==yes2) {
	alert("Yes, I do play basketball. Not many people guess basketball since I'm pretty small.");
	console.log("Yes, the answer to the questions is " + yes);
} else {
	alert("Sorry, 'No' is incorrect. I have played basketball since I was 8");
	console.log("No, the answer to the question is yes" );

}

var guess2= prompt("Do I play the trumpet? YES or NO?").toUpperCase();
if (guess2==yes || guess2==yes2) {
	alert("Yes, I do play the trumpet. I started because I found Miles Davis to be amazing!");
	console.log("Yes, the answer to the question is " + yes);
} else {
	alert("Sorry. 'No' is incorrect. I've played the trumpet since middle school");
	console.log("No, the answer to the quetsion is yes");
}

var guess3= prompt("Do I have cat that weighs 21 pounds? YES or NO?").toUpperCase();
if (guess3==yes || guess3==yes2) {
	alert("Yes, I do have an enourmous cat! ");
	console.log("Yes, the answer to the question is " + yes);
} else {
	alert("Sorry. 'No' is incorrect. My cat is huge!");
	console.log("No, the answer to the question is yes");
}

var guess4= prompt("Do I like to watch Battlestar Galactica? YES or NO?").toUpperCase();
if (guess4==yes || guess4==yes2) {
	alert("Yes, I love to watch Battlestar Galactica! So Say We All!");
	console.log("Yes, the answer to the question is yes");
} else {
	alert("Sorry. 'No' is incorrect. Battlestar Galactica is one of my favorite TV shows.");
	console.log("No, the answer to the quetsion is yes");
}

var NO="NO";
var no= "N";
var guess5= prompt("Do I like to eat fish?").toUpperCase();
if (guess5==NO || guess5==no) {
	alert("Correct! I really don't like fish except maybe fish and chips because of the batter");
	console.log("Yes, the answer to the question is no");
} else {
	alert("Sorry. Yes is incorrect. Fish is one of my least favorite foods.");
	console.log("The answer to the question is no");
}

var number =3;
var guess6 = prompt("Between 1-10, what number am I thinking of? Please type the actual number.");
if (guess6==number) {
	alert("Correct! I think any number with 3 in it is lucky!");
} else if (guess6 > number) {
	alert("Almost! Your guess was too high");
} else if (guess6 < number) {
	alert("Almost! Your guess was too low");
}

