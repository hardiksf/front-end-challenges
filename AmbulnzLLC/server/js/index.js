import createAppendElement from '../js/util/create-append-element';
import pizzas from './pizzas';
import { orderSummary, updateOrderSummary } from './order-summary';

import '../styles/styles.sass';

const headerElement = document.createElement('div');
headerElement.className = "menu";
const header = document.createElement('h1');
header.className = "header";
header.textContent = "Menu"
document.body.append(header, headerElement);
createAppendElement("pizzas", pizzas, headerElement);
createAppendElement("order-summary", orderSummary, headerElement);

const orderButtons = document.querySelectorAll('.order-button');

orderButtons.forEach(button => button.addEventListener('click', event => {
    updateOrderSummary(event);
    button.disabled = true;
    if (button.disabled) {
        button.innerText = `In the cart`;
    }
}));

const confirmButton = document.querySelector(".confirm-button");
confirmButton.onclick = e =>
    import ('../js/confirm-order').then(module => {
        let confirm = module.default;
        confirm();
    });