import { addCustomer, getAllCustomers } from '../Model/Customer.js';

$(document).ready(function() {
    $("#SaveConfirm").click(function() {
        saveCustomer();
        clearFields();

        $("#NewCustomerModal").modal("hide");
    });
});

function saveCustomer() {
    let customerId = document.getElementById("CustomerIDField").value;
    let customerName = document.getElementById("CustomerNameField").value;
    let customerAddress = document.getElementById("CustomerAddressField").value;
    let customerSalary = document.getElementById("CustomerSalaryField").value;


    let customer = {
        id: customerId,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    };


    addCustomer(customer);


    let allCustomers = getAllCustomers();
    displayCustomers(allCustomers);
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
