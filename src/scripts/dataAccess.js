export const API = "http://localhost:8088";
const mainContainer = document.querySelector("#container");
const appState = { reservations: [] };

export const getReservations = () => appState.reservations.map((reservation) => ({ ...reservation }));
export const fetchState = () => {
    return fetch(`${API}/reservations`)
        .then((res) => res.json())
        .then((reservationsList) => {
            appState.reservations = reservationsList;
        });
};

export const sendRequest = (userServiceRequest) => {
    const requestPost = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userServiceRequest),
    };
    return fetch(`${API}/reservations`, requestPost)
        .then((res) => res.json())
        .then(() => mainContainer.dispatchEvent(new CustomEvent("stateChanged")));
};

export const denyButton = (id) => {
    fetch(`${API}/reservations/${id}`, { method: "DELETE" }).then(() =>
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    );
};
