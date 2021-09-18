type Cell = number | undefined;

enum Direction {
	Up,
	Down,
	Left,
	Right,
}

export default class Board {
	private inner: Array<Cell>;
	private move_count: number;

	constructor() {
		this.inner = new Array(16).fill(undefined);
		this.move_count = 0;
	}

	public format = (): string =>
		this.inner.reduce((acc, cell, i) => {
			if (i % 4 === 0) {
				return acc + `\n ${cell ?? 0}`;
			}

			return acc + ` | ${cell ?? 0}`;
		}, '') + `\nmoves: ${this.move_count}`;

	private update(inner: Array<Cell>) {
		this.inner = inner;
		this.move_count++;
	}

	// TODO: compress: (direction) => {}
	// TODO: merge: () => {}

	// Fills a random open cell with a 2 or 4
	// Do not call if board is full
	private fillRandomCell() {
		const open_cells = this.getOpenCells();
		const cell = open_cells[Math.floor(Math.random() * open_cells.length)];

		// 60% chance of 2, 40% chance of 4
		this.inner[cell] = Math.floor(Math.random() * 5) > 1 ? 2 : 4;
	}

	// Returns array of indexes representing undefined cells
	private getOpenCells = (): Array<number> =>
		this.inner.reduce((acc, cell, i) => (cell === undefined ? acc.concat(i) : acc), new Array<number>());

	// Checks if board contains a given value
	private hasValue = (val: number | undefined): boolean => this.inner.includes(val);

	// Checks if board if full, by ensuring no undefinded cells
	private isFull = (): boolean => !this.hasValue(undefined);
}
