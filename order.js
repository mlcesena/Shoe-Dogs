

$(document).ready(() => { 
    const product = getCookieByName("product").split(",");

    $("#product").attr("src", product[1]);
    $(".product-title").text(product[2]);
    $(".product-price").text(product[3]);

    const minusButton = document.querySelector("#minus");
    const plusButton = document.querySelector("#plus");
    const countField = document.querySelector("#quantity");
    const orderButton = document.querySelector("#order-button");
    const err = document.querySelector("#err");
    err.style.display = "none";
    let size = "";

    minusButton.addEventListener("click", () => {
        if (countField.value > 1)
            countField.value--;
    });

    plusButton.addEventListener("click", () => {
        if (countField.value < 10)
            countField.value++;
    });

    countField.addEventListener("change", () => {
        if (countField.value > 10)
            countField.value = 10;
        else if (countField.value < 1)
            countField.value = 1;
    });


    orderButton.addEventListener("click", (e) => {
        if (document.querySelector("#x-small").checked) {
            size = "XS";
        }
        else if (document.querySelector("#small").checked) {
            size = "S";
        }
        else if (document.querySelector("#medium").checked) {
            size = "M";
        }
        else if (document.querySelector("#large").checked) {
            size = "L";
        }
        else if (document.querySelector("#x-large").checked) {
            size = "XL";
        }

        if (size == "") {
            err.style.display = "";
            e.preventDefault();
        }
        else {
            const invoice = getCookieByName("invoice");
            if (invoice) {
                deleteCookie("invoice");
            }
            
            let price = "$" + (parseInt(product[3].substring(1)) * countField.value);
            let ran = Math.floor((Math.random() * 10000) * 1000000);
            const invoiceInfo = "" + ran + "," + product[2] + "," + price + "," + countField.value + "," + size;
            setCookie("invoice", invoiceInfo);
        }
        
    
    });
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

const setCookie = (name, value, days) => {
    let cookie = name + "=" + encodeURIComponent(value);

    if (days) {
        cookie += "; max-age=" + days * 24 * 60 * 60;
    }

    cookie += "; path=/";
    document.cookie = cookie;
};

const deleteCookie = name => {
    document.cookie = name + "=''; max-age=0; path=/";
};
