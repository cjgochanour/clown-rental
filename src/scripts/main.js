import { ClownRental } from "./ClownRental.js";
import { fetchState, fetchClowns } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("stateChanged", () => render());

const render = () => {
    fetchState()
        .then(() => {
            return fetchClowns();
        })
        .then(() => {
            mainContainer.innerHTML = ClownRental();
        });
};

render();
