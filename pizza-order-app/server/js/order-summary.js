import { html, render } from 'lit-html';

const updateOrderSummary = () => {
    const name = event.target.parentElement.querySelector(".name").innerText;
    const price = event.target.parentElement.querySelector(".price").innerText

    const pizzaDetail = document.createElement('div');
    pizzaDetail.className = `order-item`;

    const pizzaDetailTemplate = html `
        ${name}, ${price} <input class="input-number", type="number", min="1", value="1">
        <button class="remove-button", type="button"> X</button>
    `;
    render(pizzaDetailTemplate, pizzaDetail);

    const detail = document.querySelector(".detail");
    detail.appendChild(pizzaDetail);

    displayConfirmButton();
};

const displayConfirmButton = () => {
    const confirmButton = document.querySelector(".confirm-button");
    if (confirmButton.style.display !== "block") {
        confirmButton.style.display = "block";
    }
};

const orderSummary = (locationToRender) => {
    const templateItems = [];
    templateItems.push(html `
        <div class="summary">
            <div class="title">Order Summary</div>
            <div class="detail"></div>
            <button class="confirm-button button" type="button">Confirm Order</button>
            <div class="confirm-order-text"></div>
        </div>
        `);
    render(templateItems, locationToRender);
};

export { orderSummary, updateOrderSummary };