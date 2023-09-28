const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger__menu");
const burgerBody = document.querySelector(".burger__body");
const navbarMenu = document.querySelectorAll(".navbar__menu");
const a = document.querySelector(".navbar__search");
const input = document.querySelector(".navbar__search input");
const searchImg = document.querySelector(".navbar__search a img");
const nav = document.querySelector(".navbar__body");
const play = document.querySelector(".difference__video a");
const video = document.querySelector(".difference__video");
a.addEventListener("focus", function () {
    if (!burgerBtn.classList.contains("active")) {
        input.style.width = "70%";
        a.style.width = "30%";
        a.style.gap = "10px";
        nav.style.flexBasis = "80%";
        input.focus();
    }
});
a.addEventListener("blur", function () {
    if (input.value === "" && !burgerBtn.classList.contains("active")) {
        input.style.width = "0";
        a.style.width = "58px";
        a.style.gap = "0";
    }
});
input.addEventListener("focus", function () {
    if (!burgerBtn.classList.contains("active")) {
        this.style.width = "70%";
        this.style.paddingLeft = "1px";
        a.style.width = "30%";
        a.style.gap = "10px";
    }
});
input.addEventListener("blur", function () {
    if (input.value === "" && !burgerBtn.classList.contains("active")) {
        this.style.width = "0";
        this.style.paddingLeft = "0";
        a.style.width = "58px";
        a.style.gap = "0";
        nav.style.flexBasis = "804px";
    }
});

burgerBtn.addEventListener("click", function () {
    if (
        burgerBtn.classList.contains("active") &&
        burgerMenu.classList.contains("active")
    ) {
        burgerBtn.classList.remove("active");
        burgerMenu.classList.remove("active");
        nav.classList.remove("active");
    } else {
        burgerBtn.classList.add("active");
        burgerMenu.classList.add("active");
        nav.classList.add("active");
    }
});

burgerMenu.addEventListener("click", function () {
    burgerBtn.classList.remove("active");
    burgerMenu.classList.remove("active");
    nav.classList.remove("active");
});
burgerBody.addEventListener("click", function (e) {
    e.stopPropagation();
});
for (let i = 0; i < navbarMenu.length; i++) {
    navbarMenu[i].addEventListener("click", function () {
        burgerBtn.classList.remove("active");
        burgerMenu.classList.remove("active");
        nav.classList.remove("active");
    });
}
document.addEventListener("scroll", function () {
    burgerBtn.classList.remove("active");
    burgerMenu.classList.remove("active");
    nav.classList.remove("active");
});
play.addEventListener("click", function (e) {
    e.preventDefault();
    this.style.display = "none";
    video.innerHTML +=
        '<iframe src="https://www.youtube.com/embed/OsF9H7yRnvU?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
});
