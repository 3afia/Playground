/*	Abdellah Lafia, https://www.github.com/3afia

	Just playing around with algorithms.
	This is Javascript code to check if a word is a palindrome.
	Palindrome words are words that could be reversed and still 
	retain their meaning.
*/

const isPal = (words) => {
	for(word of words){
		let reverseWord;
		/*
		1. 
		reverseWord = word.split('').reverse().join('');
		
		//_________________________________________________
		2. 
		reverseWord = '';
		for(let l of word) {
			reverseWord = l + reverseWord;
		}
		
		//_________________________________________________
		3.*/
		reverseWord = word.split('').reduce((result, l) => (l + result), '');
		
		//_________________________________________________
		
		//output:
		console.log(`${word}: ${reverseWord}; ${word === reverseWord ? '' : 'Not a '}Palindrome`);	
	}
}


//test words array
isPal([
	'adinida',
	'arandano',
	'deified',
	'Hagigah',
	'murdrum',
	'Nauruan',
	'peeweep',
	'racecar',
	'reifier',
	'repaper',
	'reviver',
	'rotator',
	'seities',
	'sememes',
	'Senones',
	'SIXAXIS',
	'soosoos',
	'Tacocat',
	'Zerorez'
]);

