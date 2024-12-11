import home from "./home";
import menu from "./menu.js";
import about from "./about.js";
const pageLayouts = {home, menu, about};

const doc = document;
const content = doc.getElementById("content");
const navButtons = doc.querySelectorAll(".nav");

let navToLayout = (event) => {
    const layoutKey = event.target.dataset.layout;
    const layout = pageLayouts[layoutKey];
    if (layout) {
        content.innerHTML = ''; //CLEAR
        content.appendChild(layout);
    }
};

navButtons.forEach(button => {
    button.addEventListener('click', navToLayout);
})

