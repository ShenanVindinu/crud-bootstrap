import {orderDetails, orders} from "../db/Orders.js";
import { customers } from "../db/customers.js";
import {items} from "../db/items.js";

export function getOrderId() {
    const orderCount = orders.length;

    return "D0" + orderCount + 1;
}

export function todaysDate() {
    var today = new Date();

    var formattedDate = today.toISOString().split('T')[0];

    $("#OrderDateField").val(formattedDate);
}

export function findMatchingCusId(customerId) {

    var customer = null;

    for (var i = 0; i < customers.length; i++) {
        if (customers[i].id === customerId) {
            customer = customers[i];
            break;
        }
    }

    return customer;

}

export function findMatchingItemId(ItemCode) {
    var itemList = null;

    for (var i = 0; i < items.length; i++) {
        if (items[i].code === ItemCode) {
            itemList = items[i];
            break;
        }
    }

    return itemList;
}

export function addToCart(OrderDetails) {
    orderDetails.push(OrderDetails);
    displayItems(orderDetails);
}

function displayItems(items) {
    let tableBody = document.querySelector("#OrderTableBodyID");
    tableBody.innerHTML = "";

    items.forEach(function(item) {

        let newRow = document.createElement("tr");

        let codeCell = document.createElement("td");
        codeCell.textContent = item.ItemsCode;
        newRow.appendChild(codeCell);

        let nameCell = document.createElement("td");
        nameCell.textContent = item.ItemsName;
        newRow.appendChild(nameCell);

        let priceCell = document.createElement("td");
        priceCell.textContent = item.ItemsPrice;
        newRow.appendChild(priceCell);

        let qtyCell = document.createElement("td");
        qtyCell.textContent = item.ItemsQty;
        newRow.appendChild(qtyCell);

        tableBody.appendChild(newRow);
    });
}






// let order = {
//     orderID: getOrderId(),
//     details: OrderDetails
// }
//
// orders.push(order);