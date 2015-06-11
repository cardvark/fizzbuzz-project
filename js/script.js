$(document).ready(function(){
	var endNum = prompt("Give me a number to fizz and buzz.");

	for (i = 1; i <= endNum; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			$('#outputList').append('<li>FizzBuzz</li>');
		} else if (i % 3 == 0) {
			$('#outputList').append('<li>Fizz</li>');			
		} else if (i % 5 == 0) {
			$('#outputList').append('<li>Buzz</li>');
		} else {
			$('#outputList').append('<li>' + i + '</li>');	
		}
	}
});