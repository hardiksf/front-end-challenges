import order from '../order.json';

const summary = document.querySelector(".summary");
const confirmMessage = document.createElement('div');
confirmMessage.className = "confirm-message";
const p = document.createElement('p');
const time = ((order.deliveryTime) / 1000) / 60;
p.innerText = `Your order will be delivered in ${time} minutes`;
confirmMessage.appendChild(p);

export default () => {
    summary.appendChild(confirmMessage);
};