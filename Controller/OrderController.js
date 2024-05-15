import {customers} from "../db/customers.js";
import {items} from "../db/items.js";
import {addToCart, findMatchingCusId, findMatchingItemId, getOrderId, todaysDate} from "../Model/OrderModel.js";


//Invoice Details

function generateOrderID() {
    return getOrderId();
}

function generateDate() {

    todaysDate();

}

function addCusDropdownIDs(id) {
    var newItem = $("<a></a>");
    newItem.addClass("dropdown-item");
    newItem.text(id);

    $("#CustomerIDDropDownMenu").append(newItem);

}

export function getCusIds() {

    clearCusDropdownMenu();

    customers.forEach(function(customer) {
        addCusDropdownIDs(customer.id.toString().padStart(3, "0"));
    });

}

function clearCusDropdownMenu() {
    $("#CustomerIDDropDownMenu").html("");
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

    var orderIDInput = $("#OrderID");

    if (orderIDInput.length > 0) {
        orderIDInput.val(generateOrderID());
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

        var customer = findMatchingCusId(customerId);

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
    $("#ItemDropDownMenu").html("");
}

function populateItemFields(itemList) {
    $("#ItemCodeField2").val(itemList.code);
    $("#ItemNameField2").val(itemList.name);
    $("#ItemPriceField2").val(itemList.price);
    $("#QtyOnHandField").val(itemList.qty);
}

function addItemDropdownCodes(code) {
    var newItem = $("<a></a>");
    newItem.addClass("dropdown-item");
    newItem.text(code);
    $("#ItemDropDownMenu").append(newItem);
}

export function getItemCodes() {

    clearItemDropdownMenu();

    items.forEach(function(item) {
        addItemDropdownCodes(item.code.toString().padStart(3, "0"));
    });

}

document.getElementById("ItemDropDownMenu").addEventListener("click", function(event) {

    var target = event.target;
    console.log("event Triggered");

    if (target.classList.contains("dropdown-item")) {


        clearItemFields();


        var ItemCode = target.textContent;

        var itemList = findMatchingItemId(ItemCode);

        if (itemList !== undefined && itemList !== null) {


            clearItemFields()
            populateItemFields(itemList);


        } else {
            console.error("Item not found with Code:", ItemCode);
        }

    }

});

$("#AddToCart").click(function () {

   let CusId = $("#CustomerIDField2").val();
   let CusName =$("#CustomerNameField2").val();
   let CusSalary = $("#CustomerSalaryField2").val();
   let CusAddress = $("#CustomerAddressField2").val();

   let ItemCode = $("#ItemCodeField2").val();
   let ItemName = $("#ItemNameField2").val();
   let ItemPrice = $("#ItemPriceField2").val();
   let ItemQTYOnHand = $("#QtyOnHandField").val();
   let ItemQTY = $("#OrderQtyField").val();



    addToCart(CusId,CusName,CusSalary,CusAddress,ItemCode,ItemName,ItemPrice,ItemQTYOnHand,ItemQTY);


});

