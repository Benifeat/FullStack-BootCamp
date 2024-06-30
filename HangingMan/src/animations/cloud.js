const cloudsContainer = document.querySelector(".clouds");

export function createCloudAnim() {
    if (cloudsContainer.children.length >= 6) return;

    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    cloud.style.top = `${Math.floor(Math.random() * 200) + 30}px`;
    cloud.style.marginLeft = "100%";

    const animTime = Math.floor(Math.random() * 10) + 15;

    cloud.style.animation = `moveclouds ${animTime}s linear infinite`;

    const randNum = Math.floor(Math.random() * 3) + 7;

    cloud.style.opacity = `0.${randNum}`;
    cloud.style.transform = `scale(0.${randNum})`;

    cloud.style.zIndex = (Math.random() < 0.5 ? -3 : -1);

    setTimeout(() => {
        cloud.remove();
    }, animTime * 1000);

    cloudsContainer.append(cloud);
}
