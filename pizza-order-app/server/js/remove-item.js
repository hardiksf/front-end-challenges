// Adds event listener to remove button on click

const removeItem = () => {
    document.addEventListener('click', (e) => {
        if (e.target && e.target.className.includes("remove-button")) {
            const innerTextOfPizzaToBeRemoved = e.target.parentNode.innerText;
            const index = innerTextOfPizzaToBeRemoved.indexOf(",");
            const pizzaToBeRemoved = innerTextOfPizzaToBeRemoved.substring(0, index);

            // User can click add to order button off particular pizza again after removed from order summary
            document.querySelector(`.${pizzaToBeRemoved} .order-button`).disabled = false;

            // Removes pizza entry from order summary
            e.target.parentNode.remove();
        }

    });
};

export default removeItem;