import { sounds } from "../data/sounds.js";
import { audioPlay } from "../audio/audio.js";

const stage = document.querySelector(".stage");

export function createTomatoAnim() {
    const tomato = document.createElement("div");
    tomato.classList.add("tomato");

    const randTime = Math.random();
    const animTime = (0.85 + (randTime < 0.5 ? 0.5 : randTime));
    tomato.style.animation = `${animTime}s tomatoAnim linear`;

    tomato.style.bottom = "0";
    tomato.style.left = `${Math.floor(Math.random() * 10) + 1}%`;

    tomato.style.setProperty("--tomato-bottom", `${Math.floor(Math.random() * 60) + 35}%`);
    tomato.style.setProperty("--tomato-left", `${Math.floor(Math.random() * 45) + 30}%`);

    stage.append(tomato);

    audioPlay(sounds.tomato);

    setTimeout(() => {
        tomato.remove();
    }, animTime * 1000);
}
