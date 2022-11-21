

$(document).ready(() => { 
    const product = getCookieByName("product").split(",");

    console.log(product[0]);
    $("#product").attr("src", product[1]);
    $(".product-title").text(product[2]);
    $(".product-price").text(product[3]);

    const minusButton = document.querySelector("#minus");
    const plusButton = document.querySelector("#plus");
    const countField = document.querySelector("#quantity");

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
});

const getCookieByName = product => {
    const cookies = document.cookie;
    let start = cookies.indexOf(product + "=");

    if (start === -1) { return ""; }
    else {
        start = start + (product.length + 1);
        let end = cookies.indexOf(";", start);

        if (end === -1) {
            end = cookies.length;
        }

        const cookieValue = cookies.substring(start, end);

        return decodeURIComponent(cookieValue);
    }
};