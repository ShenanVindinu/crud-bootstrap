import { orders } from "/db/Orders.js";

function generateOrderID() {

    const orderCount = orders.length;


    const orderID = "D0" + orderCount+1;

    return orderID;
}

document.addEventListener("DOMContentLoaded", function() {
    let orderID = generateOrderID();
    console.log("Generated Order ID:", orderID);
});

