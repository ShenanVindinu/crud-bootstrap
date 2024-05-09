import { customers } from '../db/customers.js';
import { displayCustomers } from '../Controller/CustomerController.js';

function addCustomer(customer) {
    customers.push(customer);
}


function getAllCustomers() {
    return customers;
}

function clearCustomers() {
    customers.length = 0;
    displayCustomers([]);
}

function deleteCustomers(customerId, customerName, customerAddress, customerSalary) {

    let index = customers.findIndex(customer =>
        customer.id === customerId &&
        customer.name === customerName &&
        customer.address === customerAddress &&
        customer.salary === customerSalary
    );

    if (index !== -1) {

        customers.splice(index, 1);

        displayCustomers(customers);
    }
}

function updateCustomer(customerId, customerName, customerAddress, customerSalary) {

    let index = customers.findIndex(customer => customer.id === customerId);

    if (index !== -1) {

        customers[index] = {
            id: customerId,
            name: customerName,
            address: customerAddress,
            salary: customerSalary
        };


        displayCustomers(customers);
    } else {
        console.log("Customer not found.");
    }
}


export { addCustomer, getAllCustomers, clearCustomers, deleteCustomers,updateCustomer };
