import createAppendElement from '../js/util/create-append-element';
import { renderPizzas, toggleOrderButton } from './pizzas';
import { orderSummary } from './order-summary';
import removeItem from './remove-item';

import '../styles/styles.sass';
import { html, render } from 'lit-html';

const headerElement = document.createElement('div');
headerElement.className = "menu";
const header = document.createElement('h1');
header.className = "header";
header.textContent = "Menu"
document.body.append(header, headerElement);
createAppendElement("pizzas", renderPizzas, headerElement);
createAppendElement("order-summary", orderSummary, headerElement);

toggleOrderButton();
removeItem();

// const confirmButton = document.querySelector(".confirm-button");
// Loads confirm-order module only if confirm button was click

// import CONFIRM_BUTTON from './util/constants';
const CONFIRM_BUTTON = document.querySelector(".confirm-button");
CONFIRM_BUTTON.onclick = () =>
    import ('../js/confirm-order').then(module => {
        let confirm = module.default;
        confirm();
    });