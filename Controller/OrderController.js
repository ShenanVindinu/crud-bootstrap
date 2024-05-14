import {orders} from "/db/Orders.js";
import {customers} from "../db/customers.js";

function generateOrderID() {

    const orderCount = orders.length;


    const orderID = "D0" + orderCount + 1;


    return orderID;
}

function generateDate() {

    let today = new Date();

    document.getElementById("OrderDateField").value = today.toISOString().split('T')[0];

}


function addDropdownIDs(id) {
    var newItem = document.createElement("a");
    newItem.classList.add("dropdown-item");
    newItem.textContent = id;
    document.getElementById("CustomerIDDropDownMenu").appendChild(newItem);
}


export function getCusIds() {

    clearDropdownMenu();

    customers.forEach(function(customer) {
        addDropdownIDs(customer.id.toString().padStart(3, "0"));
    });

}

function clearDropdownMenu() {
    var dropdownMenu = document.getElementById("CustomerIDDropDownMenu");
    dropdownMenu.innerHTML = '';
}

function clearOtherFields() {
    $("#CustomerIDField2").val("");
    $("#CustomerNameField2").val("");
    $("#CustomerSalaryField2").val("");
    $("#CustomerAddressField2").val("");
}

function populateOtherFields(customer) {
    $("#CustomerIDField2").val(customer.id);
    $("#CustomerNameField2").val(customer.name);
    $("#CustomerSalaryField2").val(customer.salary);
    $("#CustomerAddressField2").val(customer.address);
}


document.getElementById("CustomerIDDropDownMenu").addEventListener("click", function(event) {
    var target = event.target;
    console.log("Test");

    if (target.classList.contains("dropdown-item")) {
        clearOtherFields();


        var customerId = target.textContent;

        var customer = null;

        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === customerId) {
                customer = customers[i];
                break;
            }
        }

        if (customer !== undefined && customer !== null) {
            clearOtherFields();
            populateOtherFields(customer);

        } else {
            console.error("Customer not found with ID:", customerId);
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {

    let orderIDInput = document.getElementById("OrderID");

    if (orderIDInput) {
        orderIDInput.value = generateOrderID();
    } else {
        console.error("OrderID input field not found.");
    }

    generateDate();

});



