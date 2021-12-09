const API = "http://localhost:8088";
const mainContainer = document.querySelector("#container");

export const sendRequest = (userServiceRequest) => {
    const requestPost = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userServiceRequest),
    };
    return fetch(`${API}/requests`, requestPost)
        .then((res) => res.json())
        .then(() => mainContainer.dispatchEvent(new CustomEvent("stateChangeed")));
};
