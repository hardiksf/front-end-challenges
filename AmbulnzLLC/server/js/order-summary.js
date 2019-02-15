import { html, render } from 'lit-html';

const updateOrderSummary = () => {
    const pizzaDetail = document.createElement('p');
    const name = event.target.parentElement.querySelector(".name").innerText;
    const price = event.target.parentElement.querySelector(".price").innerText
    pizzaDetail.innerText = `${name} ${price}`;
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
            <p class="title">Order Summary</P>
            <div class="detail"></div>
            <button class="confirm-button button" type="button">Confirm Order</button>
        </div>
        `);
    render(templateItems, locationToRender);
};

export { orderSummary, updateOrderSummary };