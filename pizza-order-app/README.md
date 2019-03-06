From https://github.com/AmbulnzLLC/frontend-challenge

Prerequisites
-------------

* [Git](http://git-scm.com/)
* [npm](https://www.npmjs.org/)

Technologies
------------
* JavaScript
* Webpack
* lit-html
* SASS

Demo
----
* On launch:
    * Pizza information is coming from json file
![On launch](https://github.com/hardiksf/front-end-challenges/blob/master/pizza-order-app/demo-assets/on%20launch.png)

* Click `ADD TO CART` button
![Add to cart](https://github.com/hardiksf/front-end-challenges/blob/master/pizza-order-app/demo-assets/click%20add%20to%20cart.png)

* On clicking `ADD TO CART` button
    * Button text changes to `IN THE CART`
    * Added item appears under `ORDER SUMMARY` with name, price, number of items and remove button
![Add to cart result](https://github.com/hardiksf/front-end-challenges/blob/master/pizza-order-app/demo-assets/click%20add%20to%20cart%20result.png)

* Click on remove item; `X` button
![Remote item](https://github.com/hardiksf/front-end-challenges/blob/master/pizza-order-app/demo-assets/remove%20item.png)

* On clicking remove item button
    * Item is removed from `ORDER SUMMARY` section
    * `ADD TO CART` button for removed item is now clickable
    * If all items are removed from `ORDER SUMMARY`, `CONFIRM ORDER` button would not display
![Remove item result](https://github.com/hardiksf/front-end-challenges/blob/master/pizza-order-app/demo-assets/remove%20item%20result.png)

* Click on `CONFIRM ORDER` button
![Confirm order](https://github.com/hardiksf/front-end-challenges/blob/master/pizza-order-app/demo-assets/confirm%20order.png)

* On clicking `CONFIRM ORDER` button
    * `ORDER SUMMARY` section updates with information for wait time; which is coming from json file
    * User can not click on `ADD TO CART` buttons anymore. Page needs to be refreshed for placing another order.
![pn clicking Confirm Order](https://github.com/hardiksf/front-end-challenges/blob/master/pizza-order-app/demo-assets/comfirm%20order%20result.png)