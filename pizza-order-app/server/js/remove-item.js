// Adds event listener to remove button on click
const removeItem = () => {
    document.addEventListener('click', (event) => {
        if (event.target && event.target.className.includes("remove-button")) {
            const innerTextOfPizzaToBeRemoved = event.target.parentNode.innerText;
            const index = innerTextOfPizzaToBeRemoved.indexOf(",");
            const pizzaToBeRemoved = innerTextOfPizzaToBeRemoved.substring(0, index);

            // User can click add to order button off particular pizza again after removed from order summary
            document.querySelector(`.${pizzaToBeRemoved} .order-button`).disabled = false;
            document.querySelector(`.${pizzaToBeRemoved} .order-button`).innerText = "Add to order";

            // Removes pizza entry from order summary
            event.target.parentNode.remove();

            // Hide confirm button, if there are no order items
            const totalItemsInOrderSummary = document.querySelectorAll(".order-item").length;
            if (totalItemsInOrderSummary === 0) {
                const confirmButton = document.querySelector(".confirm-button");
                confirmButton.style.display = "none";
            }
        }
    });
};

export default removeItem;