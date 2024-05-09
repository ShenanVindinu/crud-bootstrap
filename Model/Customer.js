import { customers } from '../db/customers.js';

function addCustomer(customer) {
    customers.push(customer);
}


function getAllCustomers() {
    return customers;
}


export { addCustomer, getAllCustomers };
