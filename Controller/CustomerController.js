import { addCustomer, getAllCustomers, clearCustomers, deleteCustomers, updateCustomer } from '../Model/CustomerModel.js';
import { getCusIds } from './OrderController.js';



$(document).ready(function() {

    $("#SaveConfirm").click(function() {
        saveCustomer();
        clearFields();

        $("#NewCustomerModal").modal("hide");
    });

    $("#CustomerClearBt").click(function() {
        clearCustomers();
        clearFields();
    });

    $("#CustomerDeleteButton").click(function() {
        deleteCus();
    });

    $("#CustomerUpdateButton").click(function() {
        updateCus();
    });

});


function saveCustomer() {


    var customerId = document.getElementById("CustomerIDField").value.trim();
    var customerName = document.getElementById("CustomerNameField").value.trim();
    var customerAddress = document.getElementById("CustomerAddressField").value.trim();
    var customerSalary = document.getElementById("CustomerSalaryField").value.trim();


    if (customerId === '' || customerName === '' || customerAddress === '' || customerSalary === '') {

        showAlert("Please fill in all customer details.");

    } else {

        let customer = {
            id: customerId,
            name: customerName,
            address: customerAddress,
            salary: customerSalary
        };

        addCustomer(customer);

        let allCustomers = getAllCustomers();
        displayCustomers(allCustomers);
        getCusIds();

    }
}

function showAlert(message) {
    $("#customAlertMessage").text(message);
    $("#customAlertModal").modal("show");
}

function deleteCus() {
    let customerId = document.getElementById("CustomerIDField").value;
    let customerName = document.getElementById("CustomerNameField").value;
    let customerAddress = document.getElementById("CustomerAddressField").value;
    let customerSalary = document.getElementById("CustomerSalaryField").value;

    deleteCustomers(customerId, customerName, customerAddress, customerSalary);
}

function updateCus() {
    let customerId = document.getElementById("CustomerIDField").value;
    let customerName = document.getElementById("CustomerNameField").value;
    let customerAddress = document.getElementById("CustomerAddressField").value;
    let customerSalary = document.getElementById("CustomerSalaryField").value;

    updateCustomer(customerId, customerName, customerAddress, customerSalary);
}

function displayCustomers(customers) {
    let tableBody = document.querySelector(".table tbody");
    tableBody.innerHTML = "";

    customers.forEach(function(customer) {
        let newRow = document.createElement("tr");

        let idCell = document.createElement("td");
        idCell.textContent = customer.id;
        newRow.appendChild(idCell);

        let nameCell = document.createElement("td");
        nameCell.textContent = customer.name;
        newRow.appendChild(nameCell);

        let addressCell = document.createElement("td");
        addressCell.textContent = customer.address;
        newRow.appendChild(addressCell);

        let salaryCell = document.createElement("td");
        salaryCell.textContent = customer.salary;
        newRow.appendChild(salaryCell);

        tableBody.appendChild(newRow);
    });
}

function clearFields() {
    document.getElementById("CustomerIDField").value = "";
    document.getElementById("CustomerNameField").value = "";
    document.getElementById("CustomerAddressField").value = "";
    document.getElementById("CustomerSalaryField").value = "";
}

export { displayCustomers };


