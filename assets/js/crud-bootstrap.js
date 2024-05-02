
$("#loginPage").css({display: 'block'});
$("#HomePage").css({display: 'none'});
$("#CustomerPage").css({display: 'none'});
$("#ItemsPage").css({display: 'none'});
$("#OrdersPage").css({display: 'none'});
$("#Header").css({display: 'none'});

$("#GoToHome").eq(0).on('click', () => {
    $("#HomePage").css({display: 'block'});
    $("#CustomerPage").css({display: 'none'});
    $("#ItemsPage").css({display: 'none'});
    $("#OrdersPage").css({display: 'none'});
    $("#Header").css({display: 'block'});
});

$("#GoToOrders").eq(0).on('click', () => {
    $("#HomePage").css({display: 'none'});
    $("#CustomerPage").css({display: 'none'});
    $("#ItemsPage").css({display: 'none'});
    $("#OrdersPage").css({display: 'block'});
    $("#Header").css({display: 'block'});
});

$("#GoToCustomers").eq(0).on('click', () => {
    $("#HomePage").css({display: 'none'});
    $("#CustomerPage").css({display: 'block'});
    $("#ItemsPage").css({display: 'none'});
    $("#OrdersPage").css({display: 'none'});
    $("#Header").css({display: 'block'});
});

$("#GoToItems").eq(0).on('click', () => {
    $("#HomePage").css({display: 'none'});
    $("#CustomerPage").css({display: 'none'});
    $("#ItemsPage").css({display: 'block'});
    $("#OrdersPage").css({display: 'none'});
    $("#Header").css({display: 'block'});
});

$("#loginButton").eq(0).on('click', () => {
    $("#HomePage").css({display: 'block'});
    $("#CustomerPage").css({display: 'none'});
    $("#ItemsPage").css({display: 'none'});
    $("#OrdersPage").css({display: 'none'});
    $("#Header").css({display: 'block'});
    $("#loginPage").css({display: 'none'});
});

$("#LogoutButton").eq(0).on('click', () => {
    $("#HomePage").css({display: 'none'});
    $("#CustomerPage").css({display: 'none'});
    $("#ItemsPage").css({display: 'none'});
    $("#OrdersPage").css({display: 'none'});
    $("#Header").css({display: 'none'});
    $("#loginPage").css({display: 'block'});
});

