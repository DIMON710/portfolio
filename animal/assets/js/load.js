window.onload = function () {
    setTimeout(function () {
        document.querySelector(".load__right").style.transition = "1s all ease-in-out";
        document.querySelector(".load__left").style.transition = "1s all ease-in-out";
        document.querySelector(".load__body").style.transition = "0.6s opacity ease-in-out";
        document.querySelector(".wraper").classList.remove("hide");
        setTimeout(function () {
            document.querySelector(".load__right").style.left = "200%";
            document.querySelector(".load__left").style.left = "-100%";
            document.querySelector(".load__body").style.opacity = "0";
            const modal = document.querySelectorAll(".modal");
            for (let i = 0; i < modal.length; i++) {
                modal[i].classList.add("on");
            }
        }, 40);
        setTimeout(function () {
            document.querySelector(".load").remove();
        }, 1000);
    }, 500);
};