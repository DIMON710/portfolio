window.onload = function () {
    setTimeout(function () {
        document.querySelector(".page").classList.remove("hide");
        setTimeout(function () {
            document.querySelector(".load__right").style.left = "200%";
            document.querySelector(".load__left").style.left = "-100%";
            document.querySelector(".load__body").style.opacity = "0";
        }, 40);
        setTimeout(function () {
            document.querySelector(".load").remove();
        }, 1000);
    }, 500);
};
const themeBtn = document.querySelector(".theme-btn"),
    themeData = document.querySelector("body"),
    lightIcon = document.querySelector(".theme-icon");
if (localStorage.getItem("theme") == "dark") {
    themeData.setAttribute("data-theme", "dark");
    lightIcon.setAttribute("src", "assets/img/sun.svg");
} else if (localStorage.getItem("theme") == "light") {
    themeData.setAttribute("data-theme", "light");
    lightIcon.setAttribute("src", "assets/img/moon.svg");
} else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        themeData.setAttribute("data-theme", "dark");
        lightIcon.setAttribute("src", "assets/img/sun.svg");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        themeData.setAttribute("data-theme", "light");
        lightIcon.setAttribute("src", "assets/img/moon.svg");
    }
}
window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (e) {
        const colorScheme = e.matches ? "dark" : "light";
        if (colorScheme == "dark") {
            themeData.setAttribute("data-theme", "dark");
            lightIcon.setAttribute("src", "assets/img/sun.svg");
            localStorage.setItem("theme", "dark");
        } else if (colorScheme == "light") {
            themeData.setAttribute("data-theme", "light");
            lightIcon.setAttribute("src", "assets/img/moon.svg");
            localStorage.setItem("theme", "light");
        }
    });
