import { Reservations } from "./Reservations.js";
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
            ${Reservations()}
        </section>
    </article>`;
};
