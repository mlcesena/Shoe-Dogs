const userName = document.querySelector("#user");
const passWord = document.querySelector("#pass");
if (document.querySelector("#err")) {
    const err = document.querySelector("#err");
    err.style.display = "none";
}
const err1 = document.querySelector("#err1");
const err2 = document.querySelector("#err2");
const loginButton = document.querySelector(".login-button");

err1.style.display = "none";
err2.style.display = "none";

loginButton.addEventListener("click", (e) => {
    if (userName.value.length < 1) {
        userName.style.borderColor = "red";
        err1.style.display = "";
    }
    else {
        userName.style.borderColor = "black";
        err1.style.display = "none";
    }
    if (passWord.value.length < 1) {
        passWord.style.borderColor = "red";
        err2.style.display = "";
    }
    else {
        passWord.style.borderColor = "black";
        err2.style.display = "none";
    }

    if (document.querySelector("#admin")) {
        const adminID = document.querySelector("#admin");
        if (adminID.value.length < 1 || isNaN(parseInt(adminID.value))) {
            adminID.style.borderColor = "red";
            err.style.display = "";
            e.preventDefault();
        }
        else {
            adminID.style.borderColor = "black";
            err.style.display = "none";
        }

        if (userName.value.length > 0 && passWord.value.length > 0 && adminID.value.length > 0) {
            const login = getCookieByName("login");
            if (login) {
                deleteCookie("login");
            }
            const loginInfo = "" + adminID + "," + userName.value + "," + passWord.value;
            setCookie("login", loginInfo);
        }
    }
    else {
        if (userName.value.length > 0 && passWord.value.length > 0) {
            const login = getCookieByName("login");
            if (login) {
                deleteCookie("login");
            }
            const loginInfo = "" + "null," + userName.value + "," + passWord.value;
            setCookie("login", loginInfo);
        }
    }    
});

userName.addEventListener("change", () => {
    if (userName.style.borderColor == "red") {
        userName.style.borderColor = "black";
        err1.style.display = "none";
    }
}); 

passWord.addEventListener("change", () => {
    if (passWord.style.borderColor == "red") {
        passWord.style.borderColor = "black";
        err2.style.display = "none";
    }
});

document.addEventListener('invalid', (function () {
    return function (e) {
        e.preventDefault();
        document.getElementById("user").focus();
    };
})(), true);


const getCookieByName = login => {
    const cookies = document.cookie;
    let start = cookies.indexOf(login + "=");

    if (start === -1) { return ""; }
    else {
        start = start + (login.length + 1);
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
