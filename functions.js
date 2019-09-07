/*
	FUNCTIONS
	Tasks:
	1. Rewrite the function using '?' or '||'
	2. Create function min( a, b )
	3. Create function pow( x, n )

*/


// Rewrite the function using '?' or '||'

/* MY ANSWER
function checkAge(age){

	let bool = (age >= 18) ? true : false;

	return bool;
}
*/

// Solution
function checkAge(age){
//	return (age >= 18) ? true : confirm('Did your parents allow you?');
	return (age >= 18) || confirm('Did your parents allow you?');
}

alert(checkAge(17));

// Create function min(a, b)
function min( a, b ){
	let min = (a < b) ? a:
		(a > b) ? b:
		'a = b';

	return min;
}

alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));

// Create function pow( x, n )
function pow( x, n ){
	return x**n;
}

alert( pow( 3, 2 ) );
alert( pow( 3, 3 ) );
alert( pow( 1, 100 ) );








