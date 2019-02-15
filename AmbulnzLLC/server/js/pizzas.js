import { html, render } from 'lit-html';
import pizzas from '../pizzas.json';

const renderPizzas = (locationToRender) => {
        const templateItems = [];
        for (let pizza of pizzas) {
            templateItems.push(html `
        <div class="menu-item">
           <div class="name">${pizza.name}</div>
           <div class="price">Price: $${pizza.price}</div>
           <div class="toppings">Toppings: ${pizza.ingredients.map((i)=>html`${i} `)}</div>
           <button class="order-button button" type="button"> Add to order</button>
        </div>
        `);
    }
    render(templateItems, locationToRender);
};

export default renderPizzas;