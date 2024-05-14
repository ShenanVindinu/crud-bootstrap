import { orders } from "../db/Orders.js";
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