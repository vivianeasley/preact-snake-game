import { updateStatePromise } from "../state-managment/sm";

export async function changeDir (event) {
    if (!event) return;
    const keyDir = {
        37:"L",
        38: "U",
        39: "R",
        40: "D"
    }
    await updateStatePromise((state)=>{
        state.dirArr[state.dirArr.length - 1] = keyDir[event.keyCode];
    });
}