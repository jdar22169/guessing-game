var yes= "YES";
var yes2= "Y";
var guess1=prompt("Do I play basketball? YES or NO?").toUpperCase();
if (guess1==yes || yes2) {
	alert("Yes, I do play basketball. Not many people guess basketball since I'm pretty small.");
	console.log("Yes, the answer to the questions is " + yes);
} else {
	alert("Sorry, 'No' is incorrect. I have played basketball since I was 8");
	console.log("No, the answer to the question is " + yes )

}

var guess2= prompt("Do I play the trumpet? YES or NO?").toUpperCase();
if (guess2==yes || yes2) {
	alert("Yes, I do play the trumpet. I started because I found Miles Davis to be amazing!");
	console.log("Yes, the answer to the question is " + yes);
} else {
	alert("Sorry. 'No' is incorrect. I've played the trumpet since middle school");
	console.log("No, the answer to the quetsion is " + yes);
}

var guess3= prompt("Do I have cat that weighs 21 pounds? YES or NO?").toUpperCase();
if (guess3==yes || yes2) {
	alert("Yes, I do have an enourmous cat! ");
	console.log("Yes, the answer to the question is " + yes);
} else {
	alert("Sorry. 'No' is incorrect. My cat is huge!");
	console.log("No, the answer to the question is " + yes);
}