/*
	LOGICAL OPERATORS
	Tasks:
	1. What does the code below output?
		a. alert( null || 2 || undefined ); // 2
		b. alert( alert(1) || 2 || alert(3) ); // 1, 2
		c. alert( 1 && null && 2 ); // null
		d. alert( alert(1) && alert(2) ); // 1, undefined
		e. alert( null || 2 && 3 || 4 ); // 3
	2. Check the range between
	3. Check the range outside
	4. A question about "if": Which of these alerts are going to execute?
		a. if( -1 || 0 ) alert('first'); // EXECUTES
		b. if( -1 && 0 ) alert('second');
		c. if( null || -1 && 1 ) alert('third'); // EXECUTES
	5. Check the login
*/

// Check the range between
// Check the range outside
/* let age = prompt("Enter age", "");

let message = ( age > 14 && age < 90) ? 'TRUE':
	'FALSE';

alert(message); */

// Check the login
let username = prompt("Enter username: ", "");
let password;


if( username == 'Admin' ){
	
	password = prompt("Enter password: ", "");

	if( password == 'TheMaster' ){

		alert('Welcome!');
	}
	else if( password == '' || password == null ){

		alert('Canceled');
	}
	else{

		alert('Wrong password');
	}

}
else if( username == '' || username == null ){
	alert('Canceled');
}
else{

	alert("I don't know you.");

}