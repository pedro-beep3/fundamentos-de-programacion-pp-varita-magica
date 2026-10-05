const colors = {
    text: ["#264653", "#1d3557", "#6b2737", "#343a40"],
    paragraphBackground: ["#e9c46a", "#f4a261", "#f1faee", "#a8dadc"],
    blockBackground: ["#264653", "#2a9d8f", "#e76f51", "#457b9d"]
};
const magicGifs = Array.from({ length: 6 }, (_, index) => `./assets/magic-${index + 1}.gif`);
const hoverStates = new WeakMap();

const getRandom = (array) => array[Math.floor(Math.random() * array.length)];

function getAffectedElements(target) {
    const elements = [];
    for (let element = target; element; element = element.parentElement) {
        if (element.matches("img, p, article, section")) elements.push(element);
    }
    return elements;
}

document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (target.closest("a")) event.preventDefault();

    for (const element of getAffectedElements(target)) {
        if (element.matches("img")) {
            element.src = getRandom(magicGifs);
        } else if (element.matches("p")) {
            element.style.color = getRandom(colors.text);
            element.style.backgroundColor = getRandom(colors.paragraphBackground);
        } else {
            element.style.backgroundColor = getRandom(colors.blockBackground);
        }
    }
});

function handleHover(event, isEntering) {
    const target = event.target;
    if (!(target instanceof Element)) return;

    for (const element of getAffectedElements(target)) {
        if (event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) continue;

        if (isEntering) {
            hoverStates.set(element, {
                src: element.getAttribute("src"),
                color: element.style.color,
                backgroundColor: element.style.backgroundColor
            });

            if (element.matches("img")) {
                element.src = "./assets/abracadabra.gif";
            } else if (element.matches("p")) {
                element.style.color = getRandom(colors.text);
                element.style.backgroundColor = getRandom(colors.paragraphBackground);
            } else {
                element.style.backgroundColor = getRandom(colors.blockBackground);
            }
            continue;
        }

        const originalState = hoverStates.get(element);
        if (!originalState) continue;

        if (element.matches("img")) {
            if (originalState.src === null) {
                element.removeAttribute("src");
            } else {
                element.setAttribute("src", originalState.src);
            }
        } else {
            element.style.color = originalState.color;
            element.style.backgroundColor = originalState.backgroundColor;
        }
        hoverStates.delete(element);
    }
}

document.addEventListener("mouseover", (event) => handleHover(event, true));
document.addEventListener("mouseout", (event) => handleHover(event, false));