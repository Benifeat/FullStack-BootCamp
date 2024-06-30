const rainFrontRow = document.querySelector(".rain.front-row");
const rainBackRow = document.querySelector(".rain.back-row");

export function createRainAnim() {
    rainFrontRow.style.display = "block";
    rainBackRow.style.display = "block";
    rainAnim();

    document.body.classList.add("rain-active");
}

export function clearRainAnim() {
    rainFrontRow.style.display = "none";
    rainBackRow.style.display = "none";

    document.body.classList.remove("rain-active");
}

function rainAnim() {
    rainFrontRow.innerHTML = "";
    rainBackRow.innerHTML = "";

    let increment = 0;
    let drops = "";
    let backDrops = "";

    while (increment < 100) {
        const randoHundo = (Math.floor(Math.random() * 98 + 1));
        const randoFiver = (Math.floor(Math.random() * 4 + 2));
        increment += randoFiver;

        drops += `<div class="drop" style="left: ${increment}%; bottom: ${(randoFiver + randoFiver - 1 + 100)}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
        backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${(randoFiver + randoFiver - 1 + 100)}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
    }
    rainFrontRow.innerHTML = drops;
    rainBackRow.innerHTML = backDrops;
}