const menu = document.querySelector(".burger-menu");
const btn = document.querySelector(".burger-btn__body");
const page = document.querySelector(".page");
const li = document.querySelectorAll(".burger-menu__body ul li a");
btn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (btn.classList.contains("active")) btn.classList.remove("active");
    else btn.classList.add("active");
    if (menu.classList.contains("active")) menu.classList.remove("active");
    else menu.classList.add("active");
});
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        menu.classList.remove("active");
        btn.classList.remove("active");
    });
}
page.addEventListener("click", function () {
    menu.classList.remove("active");
    btn.classList.remove("active");
});
menu.addEventListener("click", function (e) {
    e.stopPropagation();
});
document.addEventListener("scroll", function () {
    menu.classList.remove("active");
    btn.classList.remove("active");
});