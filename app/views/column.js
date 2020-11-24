import { html } from 'htm/preact';

export function column (tileData, i) {
    const styleDict = {
        1:"empty",
        2:"snake",
        3:"food"
    };
    const colorStyle = styleDict[tileData];
	return html`<div class='${"tile "+colorStyle}' data-i=${i}></div>`
}