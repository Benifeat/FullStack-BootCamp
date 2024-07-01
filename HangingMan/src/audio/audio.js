import { sounds } from "../data/sounds.js";

export function audioPlay(sound) {
    const { src, vol, delay, loop } = sound;

    if (!src) return;

    sound.task = setTimeout(() => {
        sound.currSound = new Audio(src);
        sound.currSound.volume = vol;
        sound.currSound.loop = loop;
        sound.currSound.play().catch(err => console.log(err));
    }, delay);
}

export function audioReset(sound) {
    let { currSound } = sound;

    if (!currSound) return;

    currSound.pause();
    currSound.currentTime = 0;
    currSound = undefined;
}

export function clearSounds() {
    Object.keys(sounds).forEach(key => clearTimeout(sounds[key].task));
}