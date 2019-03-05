import order from '../order.json';
import { html, render } from 'lit-html';

const time = ((order.deliveryTime) / 1000) / 60;
const confirmOrderText = document.querySelector(".confirm-order-text");
const confirmButton = document.querySelector(".confirm-button");

const confirmMessage1 = html `
    <div class="confirm-message">
        <p>Your order will be delivered in ${time} minutes</p>
    </div>
`;

const hideConfirmOrderButton = () => {
    confirmButton.style.display = "none";
    const orderItems = document.querySelectorAll(".order-item");
    orderItems.forEach(orderItem => {
        orderItem.style.display = "none";
    });
};

const disableOrderButtons = () => {
    const orderButtons = document.querySelectorAll(".order-button");
    orderButtons.forEach(orderButton => {
        orderButton.disabled = true;
    });
};

export default () => {
    render(confirmMessage1, confirmOrderText);
    hideConfirmOrderButton();
    disableOrderButtons();
};