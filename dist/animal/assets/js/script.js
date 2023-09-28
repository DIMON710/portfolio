jq2 = jQuery.noConflict();
jq2(function ($) {
    $(".owl-carousel").owlCarousel({
        items: 1,
        smartSpeed: 800,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        mouseDrag: false,
    });
    $(".owl-prev span").text("");
    $(".owl-next span").text("");

    let burgerClass = $(
        ".burger-menu, .burger-btn, .header__menu, .burger-menu__body"
    );
    $(".burger-btn").click(function (e) {
        e.stopPropagation();
        burgerClass.toggleClass("active");
    });
    $(".close").click(function () {
        burgerClass.removeClass("active");
    });
    $(".wraper").on("click", function () {
        burgerClass.removeClass("active");
    });
    $(".burger-menu__body").on("click", function (e) {
        e.stopPropagation();
    });
    $(window).on("scroll", function () {
        burgerClass.removeClass("active");
    });

    let modal = function (name) {
        $(".modal-btn__" + name).click(function () {
            $("#modal__" + name).toggleClass("active");
        });
        $(".modal__close").click(function () {
            $("#modal__" + name).removeClass("active");
        });
        $(".modal__body").click(function () {
            $("#modal__" + name).removeClass("active");
        });
        $(".modal__content").click(function (e) {
            e.stopPropagation();
        });
    };

    modal("Katrine");
    modal("Jennifer");
    modal("Woody");
    modal("Freddie");
    modal("Sophia");
    modal("Timmy");
    modal("Charly");
    modal("Scarlett");

    $(".copy").on("click", copyT);
    function copyT() {
        let temp = $("<input>", {
            value: "83802880802887917435",
            class: "cash",
        });
        $("body").append(temp);
        let cash = $(".cash");
        cash.focus();
        cash.select();
        document.execCommand("copy");
        cash.remove();
    }

    $(".copy").on("click", adClass);
    function adClass() {
        let copyed = $(".copyed");
        copyed.addClass("active");
        copyed.css("opacity", "1");
        copyed.css("visibility", "visible");
        setTimeout(function () {
            copyed.removeClass("active");
            copyed.css("opacity", "0");
            copyed.css("visibility", "hidden");
        }, 2500);
    }
});
