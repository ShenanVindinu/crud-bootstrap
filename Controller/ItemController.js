import { addItem, clearItems, getAllItems, removeItem, updateItems } from "../Model/ItemModel.js";
import {getItemCodes} from "./OrderController.js";

$(document).ready(function() {

    $("#ConfirmItemChanges").click(function() {
        saveItem();
        clearFields();

        $("#NewItemModal").modal("hide");
    });


    $("#deleteItem").click(function() {
        deleteItem();
    });


    $("#updateItem").click(function() {
        updateItem();
    });


    $("#clearItem").click(function() {
        clearItems();
    });
});


function saveItem() {
    let ItemCode = $("#ItemCodeField").val();
    let ItemName = $("#ItemNameField").val();
    let ItemPrice = $("#ItemPriceField").val();
    let ItemQTY = $("#ItemQTYField").val();

    let item = {
        code: ItemCode,
        name: ItemName,
        price: ItemPrice,
        qty: ItemQTY
    };

    addItem(item);

    let allItems = getAllItems();
    displayItems(allItems);
    getItemCodes();
}

function displayItems(items) {

    let tableBody = $(".table tbody");
    tableBody.empty();

    items.forEach(function(item) {
        let newRow = $("<tr>");

        let idCell = $("<td>").text(item.code);
        newRow.append(idCell);

        let nameCell = $("<td>").text(item.name);
        newRow.append(nameCell);

        let priceCell = $("<td>").text(item.price);
        newRow.append(priceCell);

        let qtyCell = $("<td>").text(item.qty);
        newRow.append(qtyCell);

        tableBody.append(newRow);
    });

}



function deleteItem() {

    let selectedItemId = $("#ItemCodeField").val();


    removeItem(selectedItemId);


    let allItems = getAllItems();


    displayItems(allItems);
}


function updateItem() {
    let itemCode = $("#ItemCodeField").val();
    let itemName = $("#ItemNameField").val();
    let itemPrice = $("#ItemPriceField").val();
    let itemQty = $("#ItemQTYField").val();

    let updatedItem = {
        code: itemCode,
        name: itemName,
        price: itemPrice,
        qty: itemQty
    };


    updateItems(updatedItem);


    let allItems = getAllItems();
    displayItems(allItems);
}


function clearFields() {

    $("#ItemCodeField").val("");
    $("#ItemNameField").val("");
    $("#ItemQTYField").val("");
    $("#ItemPriceField").val("");

}

export { displayItems };
