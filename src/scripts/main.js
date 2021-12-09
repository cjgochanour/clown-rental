import { ClownRental } from "./ClownRental.js";
import { fetchState } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("stateChanged", () => render());

const render = () => {
    fetchState().then(() => {
        mainContainer.innerHTML = ClownRental();
    });
};

render();
