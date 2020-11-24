import { html } from 'htm/preact';
import { column } from './column';

export function row (tiles, i) {
	return html`<div data-i=${i}>
        ${tiles.map((tile, i) => html`
			${column(tile, i)}
		`)}
    </div>`
}