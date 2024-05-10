import { items } from "../db/items.js";
import {displayItems} from "../Controller/ItemController.js";

function addItem(item) {
    items.push(item);
}

function getAllItems() {
    return items;
}

function removeItem(itemId) {

    let index = items.findIndex(item => item.code === itemId);


    if (index !== -1) {
        items.splice(index, 1);
    }

}

function clearItems() {
    items.length = 0;
    displayItems([]);
}

function updateItems(updatedItem) {

    let index = items.findIndex(item => item.code === updatedItem.code);


    if (index !== -1) {
        items[index] = updatedItem;
    }
}

export  { addItem, getAllItems, removeItem, clearItems, updateItems };