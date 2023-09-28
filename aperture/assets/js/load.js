window.onload = function () {
    setTimeout(function () {
        document.querySelector(".page").classList.remove("hide");
        setTimeout(function () {
            document.querySelector(".off").classList.remove("off");
            document.querySelector(".load__right").style.left = "200%";
            document.querySelector(".load__left").style.left = "-100%";
            document.querySelector(".load__body").style.opacity = "0";
        }, 40);
        setTimeout(function () {
            document.querySelector(".load").remove();
        }, 1000);
    }, 500);
};