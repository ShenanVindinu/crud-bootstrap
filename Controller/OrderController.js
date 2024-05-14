import {orders} from "/db/Orders.js";
import {customers} from "../db/customers.js";

function generateOrderID() {

    const orderCount = orders.length;


    const orderID = "D0" + orderCount+1;


    return orderID;
}

function generateDate() {

    let today = new Date();

    document.getElementById("OrderDateField").value = today.toISOString().split('T')[0];

}

function populateCustomerDropdown(customers) {

}

function fillCustomerDetails(customer) {

}

document.addEventListener("DOMContentLoaded", function() {

    let orderIDInput = document.getElementById("OrderID");

    if (orderIDInput) {
        orderIDInput.value = generateOrderID();
    } else {
        console.error("OrderID input field not found.");
    }


    generateDate();
    populateCustomerDropdown(customers);
});

