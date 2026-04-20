const FILLER_LETTERS = 'CEFGHIKLMNOPQRSTVWXYZ';

const ORIENTATION_GROUPS = {
	horizontal: [[0, 1], [0, -1]],
	vertical: [[1, 0], [-1, 0]],
	diagonal: [[1, 1], [-1, -1], [1, -1], [-1, 1]]
};

export const wordsLevel2 = [
	{
		id: 1,
		label: 'Atap',
		answer: 'ATAP',
		image: '../IMAGE/atap.jpg',
		grid: { rows: 4, cols: 4 }
	},
	{
		id: 2,
		label: 'Baju',
		answer: 'BAJU',
		image: '../IMAGE/baju.jpg',
		grid: { rows: 4, cols: 4 }
	},
	{
		id: 3,
		label: 'Cermin',
		answer: 'CERMIN',
		image: '../IMAGE/cermin.jpg',
		grid: { rows: 6, cols: 6 }
	},
	{
		id: 4,
		label: 'Dasi',
		answer: 'DASI',
		image: '../IMAGE/dasi.jpg',
		grid: { rows: 4, cols: 4 }
	},
	{
		id: 5,
		label: 'Handuk',
		answer: 'HANDUK',
		image: '../IMAGE/handuk.jpg',
		grid: { rows: 6, cols: 6 }
	},
    {
		id: 6,
		label: 'Ember',
		answer: 'EMBER',
		image: '../IMAGE/ember.jpg',
		grid: { rows: 5, cols: 5 }
	},
    {
		id: 6,
		label: 'Lemari',
		answer: 'LEMARI',
		image: '../IMAGE/lemari.jpg',
		grid: { rows: 6, cols: 6 }
	}
];

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function pickRandom(arr) {
	return arr[randomInt(arr.length)];
}

function createEmptyMatrix(rows, cols) {
	return Array.from({ length: rows }, () => Array(cols).fill(''));
}

function isWithinBounds(row, col, rows, cols) {
	return row >= 0 && row < rows && col >= 0 && col < cols;
}

function getValidStarts(length, dr, dc, rows, cols) {
	const starts = [];
	for (let row = 0; row < rows; row += 1) {
		for (let col = 0; col < cols; col += 1) {
			const endRow = row + dr * (length - 1);
			const endCol = col + dc * (length - 1);
			if (isWithinBounds(endRow, endCol, rows, cols)) {
				starts.push([row, col]);
			}
		}
	}
	return starts;
}

function fillRandomLetters(matrix, rows, cols) {
	for (let row = 0; row < rows; row += 1) {
		for (let col = 0; col < cols; col += 1) {
			if (!matrix[row][col]) {
				matrix[row][col] = FILLER_LETTERS[randomInt(FILLER_LETTERS.length)];
			}
		}
	}
}

function getValidDirectionPool(length, rows, cols) {
	const pool = [];
	Object.entries(ORIENTATION_GROUPS).forEach(([orientationName, directions]) => {
		directions.forEach(([dr, dc]) => {
			if (getValidStarts(length, dr, dc, rows, cols).length > 0) {
				pool.push({ orientationName, dr, dc });
			}
		});
	});
	return pool;
}

export function buildLevel2Matrix(answer, grid = { rows: 4, cols: 4 }) {
	const word = answer.toUpperCase().trim();
	const rows = grid.rows || 4;
	const cols = grid.cols || 4;
	const matrix = createEmptyMatrix(rows, cols);

	const directionPool = getValidDirectionPool(word.length, rows, cols);
	if (directionPool.length === 0) {
		throw new Error(`Tidak ada penempatan valid untuk kata "${word}" pada grid ${rows}x${cols}`);
	}

	const { orientationName, dr, dc } = pickRandom(directionPool);
	const starts = getValidStarts(word.length, dr, dc, rows, cols);
	const [startRow, startCol] = pickRandom(starts);

	for (let i = 0; i < word.length; i += 1) {
		const row = startRow + dr * i;
		const col = startCol + dc * i;
		matrix[row][col] = word[i];
	}

	fillRandomLetters(matrix, rows, cols);

	return {
		matrix,
		placement: {
			orientation: orientationName,
			startRow,
			startCol,
			dr,
			dc
		}
	};
}
