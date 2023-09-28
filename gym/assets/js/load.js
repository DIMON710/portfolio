window.onload = function () {
    setTimeout(function () {
        document.querySelector(".load").style.opacity = "0";
        document.querySelector(".page").classList.remove("hide");
        setTimeout(function () {
            document.querySelector(".load").remove();
        }, 500);
    }, 500);
};