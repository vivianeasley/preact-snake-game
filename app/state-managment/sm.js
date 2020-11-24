import { produce } from "immer"
import { renderView } from "../../index"
import { changeDir } from '../actions/keys'

let lastState;

export function initState (state) {
    lastState = state;
    renderView(lastState);
    requestTimeout(() => {
        move()
    }, 1000);
    document.addEventListener("keydown", (e)=>{changeDir(e)}, false)
}

async function move () {
    let ateFood = false;
    const moveDict = {
        "D": {x:0, y:1},
        "L": {x:-1, y:0},
        "R": {x:1, y:0},
        "U": {x:0, y:-1},
    };
    const nextX = lastState.headPos.x + moveDict[lastState.dirArr[lastState.dirArr.length - 1]].x;
    const nextY = lastState.headPos.y + moveDict[lastState.dirArr[lastState.dirArr.length - 1]].y;

    if (!lastState.gameArea[nextY] || !lastState.gameArea[nextY][nextX]) {window.alert("you lost");return};
    if (lastState.gameArea[nextY][nextX] === 2) {window.alert("you lost");return};
    if (lastState.gameArea[nextY][nextX] === 3) ateFood = true;

    await updateStatePromise((state)=>{
        state.gameArea[nextY][nextX] = 2;
        state.dirArr.push(state.dirArr[state.dirArr.length - 1]);
        state.headPos.x = nextX;
        state.headPos.y = nextY;
        if (!ateFood) {
            const dir = state.dirArr.shift();
            const tailNextX = state.tailPos.x + moveDict[dir].x;
            const tailNextY = state.tailPos.y + moveDict[dir].y;
            state.gameArea[state.tailPos.y][state.tailPos.x] = 1;
            state.tailPos.x = tailNextX;
            state.tailPos.y = tailNextY;
        } else {
            const coord = getNewFoodSpace(lastState);
            state.gameArea[coord.y][coord.x] = 3;
        }
    });

    requestTimeout(() => {
        move()
    }, 200);
}

function getNewFoodSpace (state) {
    let emptySpaceNotFound = true;
    while (emptySpaceNotFound) {
        const x = Math.floor(Math.random() * 25)
        const y = Math.floor(Math.random() * 25)
        if (state.gameArea[y][x] === 1) {
            emptySpaceNotFound = false;
            return {
                x:x,
                y:y
            }
        }

    }
}

export const updateState = function updateState (updateFucnt) {
    const nextState = produce(lastState, updateFucnt);
    renderView(nextState);
    lastState = nextState;
    return true;
}

export const updateStatePromise = function updateStatePromise (updateFucnt) {
    return new Promise((resolve, reject) => {
        try {
            const nextState = produce(lastState, updateFucnt);
            renderView(nextState);
            lastState = nextState;
            resolve();
        } catch (err) {
            reject(err);
        }
    })
}

export function getCurrentState () {
    return lastState;
}

const requestTimeout = (funct, delay) => {
    const start = new Date().getTime();
    const loop = () => {
      const diff = new Date().getTime() - start;
      if (diff >= delay) {
        funct();
        return;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  };