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


export { addCustomer, getAllCustomers, clearCustomers };
