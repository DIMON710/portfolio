window.onload = function () {
    setTimeout(function () {
        document.querySelector(".load").style.opacity = "0";
        document.querySelector(".page").classList.remove("hide");
        document.querySelector(".off").classList.remove("off");
        setTimeout(function () {
            document.querySelector(".load").remove();
        }, 500);
    }, 500);
};
