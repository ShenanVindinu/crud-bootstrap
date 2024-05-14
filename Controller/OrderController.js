function generateOrderID() {

    let randomString = Math.random().toString(36).substring(2, 3);


    let now = new Date();
    let year = now.getFullYear().toString().substr(-2);
    let month = ('0' + (now.getMonth() + 1)).slice(-2);


    let orderID = "D" + year + month + randomString;

    return orderID;
}

document.addEventListener("DOMContentLoaded", function() {
    let orderID = generateOrderID();
    console.log("Generated Order ID:", orderID);
});

