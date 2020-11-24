import { render } from 'preact';
import { main } from './app/views/index';
import { initState } from './app/state-managment/sm';

const AREA_WIDTH = 25;
const AREA_HEIGHT = 25;

const initialState = {
    gameArea: [],
    headPos: {
        x: Math.floor(AREA_WIDTH/2),
        y: Math.floor(AREA_HEIGHT/2),
    },
    tailPos: {
        x: Math.floor(AREA_WIDTH/2),
        y: Math.floor(AREA_HEIGHT/2),
    },
    food: {
        x: Math.floor(AREA_WIDTH/2),
        y: Math.floor(AREA_HEIGHT/2) + 5,
    },
    dirArr: ["D"], // D - down U - up L - left R - right
};

for (let i = 0; i < AREA_HEIGHT; i++) {
    initialState.gameArea[i] = [];
    for (let j = 0; j < AREA_WIDTH; j++) {
        if (initialState.headPos.x === j && initialState.headPos.y === i ||
            initialState.tailPos.x === j && initialState.tailPos.y === i) {
            initialState.gameArea[i][j] = 2;
        } else if (initialState.food.x === j && initialState.food.y === i) {
            initialState.gameArea[i][j] = 3;
        } else {
            initialState.gameArea[i][j] = 1;
        }
    }
}

initState(initialState);

export function renderView (state) {
    render(main(state), document.querySelector('.main'));
}