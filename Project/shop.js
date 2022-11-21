const prodLink = document.querySelectorAll(".product-link");

console.log(prodLink);
prodLink.forEach(element => {
    // console.log(element.id);
    const target = document.querySelector("#" + element.id);
    target.addEventListener("click", (e) => {
        const temp = element.querySelector(".product-img");
        const image1 = temp.getAttribute("onmouseover").substring(10, temp.getAttribute("onmouseover").length - 1);
        const image2 = temp.getAttribute("onmouseout").substring(10, temp.getAttribute("onmouseout").length - 1)
        const title = element.nextElementSibling.textContent;
        const price = element.nextElementSibling.nextElementSibling.textContent;
        
        const product = getCookieByName("product");
        if (product) {
            deleteCookie("product");
        }  
        const productInfo = "" + image1 + "," + image2 + "," + title + "," + price;
        setCookie("product", productInfo);
        const test = getCookieByName("product");
        console.log(test);
        
    });
});

const getCookieByName = product => {
    const cookies = document.cookie;
    let start = cookies.indexOf(product + "=");
    console.log(start);
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


