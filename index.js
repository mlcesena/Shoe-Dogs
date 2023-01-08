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

const deleteCookie = name => {
    document.cookie = name + "=''; max-age=0; path=/";
};

const admin = document.querySelectorAll(".user-bar")[0];
const user = document.querySelectorAll(".user-bar")[1];
const login = getCookieByName("login");

if (login) {
    admin.textContent = "Hi " + login.split(",")[1];
    user.textContent = "Sign Out";
}

user.addEventListener("click", () => {
    if (user.textContent == "Sign Out") {
        deleteCookie("login");
        admin.textContent = "Admin";
        user.textContent = "Login";
        user.href = "login.html";
        location.reload("index.html");
    } 
});

user.addEventListener("mouseenter", () => {
    user.style.color = "green";
    document.body.style.cursor = "pointer";
});

user.addEventListener("mouseleave", () => {
    user.style.color = "black";
    document.body.style.cursor = "auto";
});