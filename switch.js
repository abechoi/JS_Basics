/*
	SWITCH
	Tasks:
	1. Rewrite 'switch' into an 'if'
	2. Rewrite 'if' into a 'switch'
*/

// Rewrite 'switch' into an 'if'
let browser = 'Chrome';

if( browser == 'Edge' ){
	alert("You've got the Edge!");
}
else if( browser == 'Chrome' 
	|| browser == 'Firefox' 
	|| browser == 'Safari' 
	|| browser == 'Opera' ){
	alert(`We support ${browser} too!`);
}
else{
	alert("We hope this page looks okay!");
}

// Rewrite 'if' into a 'switch'
let a = +prompt('a?', '');

switch(a){

	case 0:
		alert(0);
		break;
	case 1:
		alert(1);
		break;
	case 2: // Allow case 2 to fall into case 3.
	case 3:
		alert( '2, 3' );
		break;
}