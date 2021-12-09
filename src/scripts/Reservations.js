import { getReservations } from "./dataAccess.js";

export const Reservations = () => {
    const resList = getReservations();
    let html = "<ul>";
    html += resList.map(
        (reservation) => `<li value="reservation" id="${reservation.id}">
    ${reservation.parentName} with a party of ${reservation.numChildren} has requested ${reservation.hours} hours of your time on ${reservation.partyDate}.
    </li>`
    );
    html += "</ul>";
    return html;
};
