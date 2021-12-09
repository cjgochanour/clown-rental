import { ClownRental } from "./ClownRental.js";

const mainContainer = document.querySelector("#container");

const render = () => {
    mainContainer.innerHTML = ClownRental();
};

render();
