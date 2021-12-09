import { sendRequest } from "./dataAccess.js";

export const Form = () => `
    <div class="field">
        <label class="label" for="parentName">Parent Name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Child Name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="numChildren">Number Of Attendees</label>
        <input type="number" name="numChildren" class="input" />
    </div>
    <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="address" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partyDate">Date Of Party</label>
        <input type="date" name="partyDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="hours">Hours Requested</label>
        <input type="number" name="hours" class="input" />
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
`;

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (event) => {
    if (event.target.id === "submitRequest") {
        const parentName = document.querySelector("input[name='parentName']").value;
        const childName = document.querySelector("input[name='childName']").value;
        const numChildren = document.querySelector("input[name='numChildren']").value;
        const address = document.querySelector("input[name='address']").value;
        const partyDate = document.querySelector("input[name='partyDate']").value;
        const hours = document.querySelector("input[name='hours']").value;

        const request = {
            parentName,
            childName,
            numChildren,
            address,
            partyDate,
            hours,
        };

        sendRequest(request);
    }
});
