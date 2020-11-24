import { html } from 'htm/preact';
import { row } from './row';

export function main (state) {
	const { gameArea } = state;
	return html`
		${gameArea.map((tiles, i) => html`
			${row(tiles, i)}
		`)}
	`
}