import { getReservations, denyButton, getClowns, applyClown } from "./dataAccess.js";

document.addEventListener("change", (event) => {
    if (event.target.id === "clowns" && event.target.value) {
        const [resId, clownId] = event.target.value.split("--");
        const datenow = new Date(Date.now());
        const comObj = {
            clownId: parseInt(clownId),
            reservationId: parseInt(resId),
            date: datenow.toLocaleString(),
        };
        applyClown(comObj);
    }
});

export const Reservations = () => {
    const resList = getReservations();
    const clowns = getClowns();

    let html = "<ul>";
    html += resList.map(
        (reservation) => `<li value="reservation" id="${reservation.id}">
    ${reservation.parentName} with a party of ${reservation.numChildren} has requested ${
            reservation.hours
        } hours of your time on ${reservation.partyDate}.
    <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${clowns
        .map((clown) => {
            return `<option name="clownOption" value="${reservation.id}--${clown.id}">${clown.name}</option>`;
        })
        .join("")}
</select>
    <button class="deny button" id="deny--${reservation.id}">Deny</button>
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
