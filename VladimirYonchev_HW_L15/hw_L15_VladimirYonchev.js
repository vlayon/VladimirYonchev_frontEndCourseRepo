function checkIfNumber(number) {
	var result= typeof(number);
	if (result==="number") {
		return true;
	} else
	return false;

}


function getTheDifferenceInLenghtBetweenTwoStrings(firstString, secondString) {

	var result = Math.abs(firstString.length - secondString.length);
return result;
}

function area(a, b, c) {
var result = a*b+2*(c-b)/2;
return result;
}