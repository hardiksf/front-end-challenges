import { html, render } from 'lit-html';
import pizzas from '../pizzas.json';
import { updateOrderSummary } from './order-summary';

const renderPizzas = (locationToRender) => {
        const templateItems = [];
        for (let pizza of pizzas) {
            templateItems.push(html `
        <div class="menu-item ${pizza.name}">
           <div class="name">${pizza.name}</div>
           <div class="price">Price: $${pizza.price}</div>
           <div class="toppings">Toppings: ${pizza.ingredients.map((i)=>html`${i} `)}</div>
           <button class="order-button button" type="button"> Add to order</button>
        </div>
        `);
    }
    render(templateItems, locationToRender);
};

const toggleOrderButton = () =>{
const orderButtons = document.querySelectorAll(".order-button");

    // Disables order button if it is already clicked
    orderButtons.forEach(button => button.addEventListener('click', event => {
        updateOrderSummary(event);
        button.disabled = true;
        if (button.disabled) {
            button.innerText = `In the cart`;
        }
    }))};

export  {renderPizzas, toggleOrderButton};