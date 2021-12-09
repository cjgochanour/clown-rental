import { Requests } from "./Requests.js";
import { Form } from "./Form.js";

export const ClownRental = () => {
    return `<h1>Clown Rental</h1>
    <article>
        <section class="form">
            ${Form()}
         </section>
     </article>
     <article>
        <section class="requests">
            ${Requests()}
        </section>
    </article>`;
};
