const userName = document.querySelector("#user");
const passWord = document.querySelector("#pass");
const err1 = document.querySelector("#err1");
const err2 = document.querySelector("#err2");
const loginButton = document.querySelector(".login-button");

err1.style.display = "none";
err2.style.display = "none";

loginButton.addEventListener("click", () => {
    // let re = new RegExp("[\w]+@+[\w]+\.+[\w]{2,4}");
    // !re.test(userName.value)
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