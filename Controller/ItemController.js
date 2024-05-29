import {addItem, clearItems, getAllItems, removeItem, updateItems} from "../Model/ItemModel.js";
import {getItemCodes} from "./OrderController.js";

$(document).ready(function () {

    $("#ConfirmItemChanges").click(function () {
        saveItem();
        clearFields();

        $("#NewItemModal").modal("hide");
    });


    $("#deleteItem").click(function () {
        deleteItem();
    });


    $("#updateItem").click(function () {
        updateItem();
    });


    $("#clearItem").click(function () {
        clearItems();
    });
});


function saveItem() {
    var ItemCode = $("#ItemCodeField").val().trim();
    var ItemName = $("#ItemNameField").val().trim();
    var ItemQty = $("#ItemQTYField").val().trim();
    var ItemPrice = $("#ItemPriceField").val().trim();


    if (ItemCode === '' || ItemName === '' || ItemQty === '' || ItemPrice === '') {

        showAlert("Please fill in all item details.");

    } else {

        let item = {
            code: ItemCode,
            name: ItemName,
            price: ItemPrice,
            qty: ItemQty
        };

        addItem(item);

        let allItems = getAllItems();
        displayItems(allItems);
        getItemCodes();

    }
}

function showAlert(message) {
    $("#customAlertMessage").text(message);
    $("#customAlertModal").modal("show");
}

function displayItems(items) {

    var tableBody = $("#TableBodyItem");
    tableBody.empty();

    items.forEach(function (item) {
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

export {displayItems};
