/*
	OPERATORS
	Tasks:
	1. The postfix and prefix forms
	2. Assignment result
*/

// The postfix and prefix forms
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 2

// Assignment result
let a = 2;
let x = 1 + (a *= 2);
alert(x); // 5