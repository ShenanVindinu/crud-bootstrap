import { items } from "../db/items.js";

function addItem(item) {
    items.push(item);
}

function getAllItems() {
    return items;
}

export  {addItem, getAllItems};