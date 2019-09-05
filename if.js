/*
	IF / CONDITIONAL
	Task:
	1. The name of JavaScript
	2. Show the sign
	3. Rewrite 'if' into '?'
	4. Rewrite 'if/else' into '?'
*/

// The name of JavaScript
let ask = prompt("What is the official name of JavaScript?", "");

let message1 = (ask == "ECMAScript") ? true : false;

alert(`That is ${message1}!`);

// Show the sign
let num = prompt("Enter a number: ", "");

let cond = (num > 0) ? 1:
	(num < 0) ? -1:
	0;

alert(cond);

// Rewrite 'if' into '?'
let a = 1, b = 2;
let result = (a + b < 4) ? 'Below':
	'Over';
alert(result);


// Rewrite 'if/else' into '?'
let login = 'Director';
let message2 = (login == 'Employee') ? 'Hello':
	(login == 'Director') ? 'Greetings':
	(login == '') ? 'No login':
	'';
alert(message2);
