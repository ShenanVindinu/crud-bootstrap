$("#HomePage").css({display: 'block'});
$("#CustomerPage").css({display: 'none'});
$("#ItemsPage").css({display: 'none'});
$("#OrdersPage").css({display: 'none'});
$("#Header").css({display: 'block'});

$("#GoToHome").eq(0).on('click', () => {
    $("#HomePage").css({display: 'block'});
    $("#CustomerPage").css({display: 'none'});
    $("#ItemsPage").css({display: 'none'});
    $("#OrdersPage").css({display: 'none'});
});

$("#GoToOrders").eq(0).on('click', () => {
    $("#HomePage").css({display: 'none'});
    $("#CustomerPage").css({display: 'none'});
    $("#ItemsPage").css({display: 'none'});
    $("#OrdersPage").css({display: 'block'});
});

$("#OrdersButtonInHome").eq(0).on('click', () => {
    $("#HomePage").css({display: 'none'});
    $("#CustomerPage").css({display: 'none'});
    $("#ItemsPage").css({display: 'none'});
    $("#OrdersPage").css({display: 'block'});
});

$("#GoToCustomers").eq(0).on('click', () => {
    $("#HomePage").css({display: 'none'});
    $("#CustomerPage").css({display: 'block'});
    $("#ItemsPage").css({display: 'none'});
    $("#OrdersPage").css({display: 'none'});
});

$("#CustomerButtonInHome").eq(0).on('click', () => {
    $("#HomePage").css({display: 'none'});
    $("#CustomerPage").css({display: 'block'});
    $("#ItemsPage").css({display: 'none'});
    $("#OrdersPage").css({display: 'none'});
});

$("#GoToItems").eq(0).on('click', () => {
    $("#HomePage").css({display: 'none'});
    $("#CustomerPage").css({display: 'none'});
    $("#ItemsPage").css({display: 'block'});
    $("#OrdersPage").css({display: 'none'});
});

$("#ItemsButtonInHome").eq(0).on('click', () => {
    $("#HomePage").css({display: 'none'});
    $("#CustomerPage").css({display: 'none'});
    $("#ItemsPage").css({display: 'block'});
    $("#OrdersPage").css({display: 'none'});
});

