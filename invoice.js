$(document).ready(() => {
    
    const invoice = getCookieByName("invoice").split(",");
    document.querySelector("#order-number").textContent = "Order Number: " + invoice[0];
    document.querySelector("#item").textContent = "Item: " + invoice[1];
    document.querySelector("#size").textContent = "Size: " + invoice[4];
    document.querySelector("#quantity").textContent = "Quantity: " + invoice[3];
    document.querySelector("#price").textContent = "Sale Total: " + invoice[2];
    
});

const getCookieByName = name => {
    const cookies = document.cookie;
    let start = cookies.indexOf(name + "=");
    
    if (start === -1) { return ""; }
    else {
        start = start + (name.length + 1);
        let end = cookies.indexOf(";", start);

        if (end === -1) {
            end = cookies.length;
        }

        const cookieValue = cookies.substring(start, end);

        return decodeURIComponent(cookieValue);
    }
};


const deleteCookie = name => {
    document.cookie = name + "=''; max-age=0; path=/";
};

