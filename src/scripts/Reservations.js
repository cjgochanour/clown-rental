import { getReservations, denyButton } from "./dataAccess.js";

export const Reservations = () => {
    const resList = getReservations();
    let html = "<ul>";
    html += resList.map(
        (reservation) => `<li value="reservation" id="${reservation.id}">
    ${reservation.parentName} with a party of ${reservation.numChildren} has requested ${reservation.hours} hours of your time on ${reservation.partyDate}.
    <button class="deny" id="deny--${reservation.id}">Deny</button>
    </li>`
    );
    html += "</ul>";
    return html;
};

document.addEventListener("click", (event) => {
    if (event.target.id.startsWith("deny")) {
        const [, id] = event.target.id.split("--");
        denyButton(parseInt(id));
    }
});
