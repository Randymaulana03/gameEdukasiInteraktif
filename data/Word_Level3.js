const FILLER_LETTERS = 'BCDEFGHIJKLMOPQRSTUVWXYZ';

export const wordsLevel3 = [
	{
		id: 1,
		label: 'Apel',
		answer: 'APEL',
		image: '../IMAGE/apel.jpg'
	},
	{
		id: 2,
		label: 'Nanas',
		answer: 'NANAS',
		image: '../IMAGE/nanas.kpg.jpg'
	},
    {
		id: 3,
		label: 'Jeruk',
		answer: 'JERUK',
		image: '../IMAGE/jeruk.jpg'
	},
    {
		id: 4,
		label: 'Semangka',
		answer: 'SEMANGKA',
		image: '../IMAGE/semangka.jpg'
	}
    

];

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function shuffleLetters(chars) {
	const arr = [...chars];
	for (let i = arr.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

export function buildLevel3Letters(answer) {
	const letters = answer.toUpperCase().trim().split('');
	while (letters.length < Math.max(answer.length, 8)) {
		letters.push(FILLER_LETTERS[randomInt(FILLER_LETTERS.length)]);
	}
	return shuffleLetters(letters);
}
