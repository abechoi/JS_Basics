/*
	DATA TYPES
	The 7 Basics Data Types:
	1. Numbers
	2. Strings
	3. Booleans
	4. NULL
	5. Undefined
	6. Objects
	7. Symbols
*/

alert(
	`typeof undefined = ${typeof undefined}\n` +
	`typeof 0 = ${typeof 0}\n` +
	`typeof true = ${typeof true}\n` +
	`typeof "foo" = ${typeof "foo"}\n` +
	`typeof Symbol("id") = ${typeof Symbol("id")}\n` +
	`typeof Math = ${typeof Math}\n` +
	`typeof null = ${typeof null}\n` + // This is an officially known error. Null is its own type.
	`typeof alert = ${typeof alert}`
	);