import { JSXElement } from 'solid-js';

import { Option, Some, None, Result, Ok, Err } from '@hqoss/monads';

type Cell = number | undefined;

type BoardError = string;

type BoardResult<T> = Result<T, BoardError>;

class Board {
	private inner: Array<Cell>;
	private move_count: number;

	constructor() {
		this.inner = new Array(16).fill(undefined);
		this.move_count = 0;
	}

	public format = (): string =>
		this.inner.reduce((acc: string, cell: number | undefined, i: number) => {
			if (i % 4 === 0) {
				return acc + `\n ${cell ?? 0}`;
			}

			return acc + ` | ${cell ?? 0}`;
		}, '');

	public genRandomCell(): BoardResult<{}> {
		const options = [2, 4];

		return Ok({});
	}

	private update(inner: Array<number>) {
		this.inner = inner;
		this.move_count++;
	}

	// Checks if board contains a given value
	private hasValue = (val: number | undefined): boolean => this.inner.includes(val);

	// Checks if board if full, by ensuring no undefinded cells
	private isFull = (): boolean => !this.hasValue(undefined);
}

export default (): JSXElement => (
	<section class="m-10">
		<header class="text-3xl text-center bg-white">Game</header>
	</section>
);
