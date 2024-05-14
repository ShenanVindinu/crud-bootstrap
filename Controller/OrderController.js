import {orders} from "/db/Orders.js";
import {customers} from "../db/customers.js";
import {items} from "../db/items.js";


//Invoice Details

function generateOrderID() {
    const orderCount = orders.length;

    return "D0" + orderCount + 1;
}

function generateDate() {

    let today = new Date();

    document.getElementById("OrderDateField").value = today.toISOString().split('T')[0];

}

function addCusDropdownIDs(id) {
    var newItem = document.createElement("a");
    newItem.classList.add("dropdown-item");
    newItem.textContent = id;
    document.getElementById("CustomerIDDropDownMenu").appendChild(newItem);
}

export function getCusIds() {

    clearCusDropdownMenu();

    customers.forEach(function(customer) {
        addCusDropdownIDs(customer.id.toString().padStart(3, "0"));
    });

}

function clearCusDropdownMenu() {
    var CusDropdownMenu = document.getElementById("CustomerIDDropDownMenu");
    CusDropdownMenu.innerHTML = '';
}

function clearCusFields() {
    $("#CustomerIDField2").val("");
    $("#CustomerNameField2").val("");
    $("#CustomerSalaryField2").val("");
    $("#CustomerAddressField2").val("");
}

function populateCusFields(customer) {
    $("#CustomerIDField2").val(customer.id);
    $("#CustomerNameField2").val(customer.name);
    $("#CustomerSalaryField2").val(customer.salary);
    $("#CustomerAddressField2").val(customer.address);
}

function loadOrderId() {

    let orderIDInput = document.getElementById("OrderID");

    if (orderIDInput) {
        orderIDInput.value = generateOrderID();
    } else {
        console.error("OrderID input field not found.");
    }

}


document.getElementById("CustomerIDDropDownMenu").addEventListener("click", function(event) {

    var target = event.target;
    console.log("Test");

    if (target.classList.contains("dropdown-item")) {
        clearCusFields();


        var customerId = target.textContent;

        var customer = null;

        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === customerId) {
                customer = customers[i];
                break;
            }
        }

        if (customer !== undefined && customer !== null) {
            clearCusFields();
            populateCusFields(customer);

        } else {
            console.error("Customer not found with ID:", customerId);
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {

    loadOrderId();

    generateDate();


});



//Item Select

function clearItemFields() {
    $("#ItemCodeField2").val("");
    $("#ItemNameField2").val("");
    $("#ItemPriceField2").val("");
    $("#QtyOnHandField").val("");
    $("#OrderQtyField").val("");
}

function clearItemDropdownMenu() {
    var ItemDropdownMenu = document.getElementById("ItemDropDownMenu");
    ItemDropdownMenu.innerHTML = '';
}

function populateItemFields(itemList) {
    $("#ItemCodeField2").val(itemList.code);
    $("#ItemNameField2").val(itemList.name);
    $("#ItemPriceField2").val(itemList.price);
    $("#QtyOnHandField").val(itemList.qty);
}

function addItemDropdownCodes(code) {
    var newItem = document.createElement("a");
    newItem.classList.add("dropdown-item");
    newItem.textContent = code;
    document.getElementById("ItemDropDownMenu").appendChild(newItem);
}

export function getItemCodes() {

    clearItemDropdownMenu();

    items.forEach(function(item) {
        addItemDropdownCodes(item.code.toString().padStart(3, "0"));
    });

}

document.getElementById("ItemDropDownMenu").addEventListener("click", function(event) {

    var target = event.target;
    console.log("Test");

    if (target.classList.contains("dropdown-item")) {
        clearItemFields();


        var ItemCode = target.textContent;

        var itemList = null;

        for (var i = 0; i < items.length; i++) {
            if (items[i].code === ItemCode) {
                itemList = items[i];
                break;
            }
        }

        if (itemList !== undefined && itemList !== null) {
            clearItemFields()
            populateItemFields(itemList);

        } else {
            console.error("Item not found with Code:", ItemCode);
        }
    }
});


