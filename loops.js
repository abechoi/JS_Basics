/*
	LOOPS
	Tasks:
	1. Output even numbers in the loop
	2. Repeat until input is correct
	3. Output prime numbers
*/

// Output even numbers in the loop
/*for( let i = 2; i <= 10; ++i ){
	if( i%2 == 0 )
		alert(i);
}*/

// Repeat until input is correct
/*let input;
do{

	input = prompt("Enter value above 100: ", 0);

}while( input <= 100 && input );*/

// Output prime numbers
/*let n = 10;
let bool = false;

for( let i = 0; i <= n; ++i ){

	for( let j = 0; j <= n; ++j ){

		if( i%j == 0 && i != j ){
			bool = true;
		}
	}
	if(bool == false){
		alert(`${i} is PRIME!`);
	}

	bool = false;
}*/

let n = 10;

nextPrime:
for( let i = 2; i <= n; i++ ){

	for( let j = 2; j < i; j++ ){

		if( i%j == 0 ){
			continue nextPrime;
		}
	}
	alert(i);
}












