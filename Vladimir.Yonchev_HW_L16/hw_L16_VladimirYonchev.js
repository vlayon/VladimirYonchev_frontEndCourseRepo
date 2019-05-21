function sum(array) {
var result=0;
	for (var i=0; i<array.length; i++) {
result+=array[i];

	}
	return result;
}

function sumEven(array) {
var result=0;
	for (var i=0; i<array.length; i++) {
		if (array[i]%2==0) {

		result+=array[i];
		} 
	}
	return result;
}


function sumOdd(array) {
var result=0;
	for (var i=0; i<array.length; i++) {
		if (array[i]%2!=0) {
			result+=array[i];
			} 

	}
	return result;
}
