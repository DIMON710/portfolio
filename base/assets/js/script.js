jq2 = jQuery.noConflict();
jq2(function ($) {
    $(document).ready(function () {
        /*Burger*/
        const burgerBtn = $(".burger__btn");
        burgerBtn.on("click", function (e) {
            e.stopPropagation();
            $(this).toggleClass("active");
            $(".burger__menu").toggleClass("active");
            $(".navbar__menu").toggleClass("active");
            $(".navbar__btn").toggleClass("active");
        });
        $(".navbar__menu li").on("click", function () {
            burgerBtn.removeClass("active");
            $(".burger__menu").removeClass("active");
            $(".navbar__menu").removeClass("active");
            $(".navbar__btn").removeClass("active");
        });
        $("body").on("click", function () {
            burgerBtn.removeClass("active");
            $(".burger__menu").removeClass("active");
            $(".navbar__menu").removeClass("active");
            $(".navbar__btn").removeClass("active");
        });
        $(".burger__menu").on("click", function (e) {
            e.stopPropagation();
        });
        /*Navbar*/
        let width, nullLeft, left;
        for (let i = 0; i < $(".navbar__menu li").length; i++) {
            if ($(".navbar__menu li").eq(i).hasClass("active")) {
                width = Math.round($(".navbar__menu li").eq(i).innerWidth());
                left = Math.round($(".navbar__menu li").eq(i).offset().left);
            }
        }
        nullLeft = $(".navbar__menu li").eq(0).offset().left;
        let line = $("<div></div>").attr("class", "line");
        line.css({
            width: "47px",
            left: left - nullLeft + 1,
        });
        $(".navbar__menu").append(line);
        $(".navbar__menu li").on("mouseenter", function () {
            $(".navbar__menu li").removeClass("active");
            $(this).addClass("active");
            for (let i = 0; i < $(".navbar__menu li").length; i++) {
                if ($(".navbar__menu li").eq(i).hasClass("active")) {
                    width = Math.round(
                        $(".navbar__menu li").eq(i).innerWidth()
                    );
                    left = Math.round(
                        $(".navbar__menu li").eq(i).offset().left
                    );
                }
            }
            $(".line").css({
                width: width - 1,
                left: left - nullLeft + 1,
            });
        });
        $(".navbar__menu").on("mouseleave", function () {
            setTimeout(function () {
                $(".navbar__menu li").removeClass("active");
                $(".navbar__menu li").eq(0).addClass("active");
                for (let i = 0; i < $(".navbar__menu li").length; i++) {
                    if ($(".navbar__menu li").eq(i).hasClass("active")) {
                        width = Math.round(
                            $(".navbar__menu li").eq(i).innerWidth()
                        );
                        left = Math.round(
                            $(".navbar__menu li").eq(i).offset().left
                        );
                    }
                }
                $(".line").css({
                    width: width - 1,
                    left: left - nullLeft + 1,
                });
            }, 200);
        });

        $(window).resize(function () {
            for (let i = 0; i < $(".navbar__menu li").length; i++) {
                if ($(".navbar__menu li").eq(i).hasClass("active")) {
                    width = Math.round(
                        $(".navbar__menu li").eq(i).innerWidth()
                    );
                    left = Math.round(
                        $(".navbar__menu li").eq(i).offset().left
                    );
                }
            }
            nullLeft = $(".navbar__menu li").eq(0).offset().left;
            line.css({
                width: width - 1,
                left: left - nullLeft + 1,
            });
        });

        /*Like-spoiler*/
        for (let i = 0; i < $(".like__spoilers__item").length; i++) {
            if (!$(".like__spoilers__item").eq(i).hasClass("active")) {
                $(".like__spoilers__item p").eq(i).slideUp();
            }
        }
        $(".spoiler-btn").on("click", function (e) {
            e.preventDefault();
            if ($(this).parents(".like__spoilers__item").hasClass("active")) {
                $(".like__spoilers__item").removeClass("active");
                $(".like__spoilers__item p").slideUp();
            } else if (
                !$(this).parents(".like__spoilers__item").hasClass("active")
            ) {
                $(".like__spoilers__item").removeClass("active");
                $(".like__spoilers__item p").slideUp();
                $(this).parents(".like__spoilers__item").addClass("active");
                $(this).siblings("p").slideDown();
            }
        });

        /*Switcher*/
        if (
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msTouchPoints > 0
        ) {
            $(".switcher__switch").css("cursor", "default");
        }
        $(".switcher__switch.1").on("click", function () {
            $(this).siblings(".switcher__button").css("left", "0");
            let getPrise = $(this)
                .parents(".buy__unscale")
                .find("h2 span")
                .text();
            if (getPrise.length > 2) {
                $(this)
                    .parents(".buy__unscale")
                    .find("h2 span")
                    .text(getPrise / 12);
            }
        });
        $(".switcher__switch.2").on("click", function () {
            $(this).siblings(".switcher__button").css("left", "50%");
            let getPrise = $(this)
                .parents(".buy__unscale")
                .find("h2 span")
                .text();
            if (getPrise.length <= 2) {
                $(this)
                    .parents(".buy__unscale")
                    .find("h2 span")
                    .text(getPrise * 12);
            }
        });

        /*Footer-spoiler*/
        let cheak = false;
        if (screen.availWidth <= 440 && cheak === false) {
            for (let i = 0; i < 3; i++) {
                $(".footer__links ul").eq(i).slideUp();
                $(".footer__links h3")
                    .eq(i)
                    .html(
                        $(".footer__links h3").eq(i).html() +
                            '<svg class="footer__arrow" width="15" height="15" viewBox="0 0 5 9">' +
                            '<path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" fill="#fff"></path>' +
                            "</svg>"
                    );
            }
            $(".footer__arrow").css({
                transform: "rotate(90deg)",
                transition: "0.3s all ease-in-out",
            });
            cheak = true;
            $(".footer__links h3").on("click", function () {
                if ($(this).hasClass("active")) {
                    $(".footer__links h3").removeClass("active");
                    $(".footer__links ul").slideUp();
                    $(".footer__arrow").css("transform", "rotate(90deg)");
                } else if (!$(this).hasClass("active")) {
                    $(".footer__links h3").removeClass("active");
                    $(".footer__links ul").slideUp();
                    $(".footer__arrow").css("transform", "rotate(90deg)");
                    $(this).addClass("active");
                    $(this).siblings("ul").slideDown();
                    $(this).children("svg").css("transform", "rotate(270deg)");
                }
            });
        } else if (screen.availWidth >= 440) {
            $(".footer__links h3 svg").remove();
            $(".footer__links h3").off("click");
            $(".footer__links h3").removeClass("active");
            $(".footer__links ul").slideDown();
            $(".footer__arrow").css("transform", "rotate(90deg)");
            cheak = false;
        }
        $(window).resize(function () {
            if (screen.availWidth <= 440 && cheak === false) {
                for (let i = 0; i < 3; i++) {
                    $(".footer__links ul").eq(i).slideUp();
                    $(".footer__links h3")
                        .eq(i)
                        .html(
                            $(".footer__links h3").eq(i).html() +
                                '<svg class="footer__arrow" width="15" height="15" viewBox="0 0 5 9">' +
                                '<path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" fill="#fff"></path>' +
                                "</svg>"
                        );
                }
                $(".footer__arrow").css({
                    transform: "rotate(90deg)",
                    transition: "0.3s all ease-in-out",
                });
                cheak = true;
                $(".footer__links h3").on("click", function () {
                    if ($(this).hasClass("active")) {
                        $(".footer__links h3").removeClass("active");
                        $(".footer__links ul").slideUp();
                        $(".footer__arrow").css("transform", "rotate(90deg)");
                    } else if (!$(this).hasClass("active")) {
                        $(".footer__links h3").removeClass("active");
                        $(".footer__links ul").slideUp();
                        $(".footer__arrow").css("transform", "rotate(90deg)");
                        $(this).addClass("active");
                        $(this).siblings("ul").slideDown();
                        $(this)
                            .children("svg")
                            .css("transform", "rotate(270deg)");
                    }
                });
            } else if (screen.availWidth >= 440) {
                $(".footer__links h3 svg").remove();
                $(".footer__links h3").off("click");
                $(".footer__links h3").removeClass("active");
                $(".footer__links ul").slideDown();
                $(".footer__arrow").css("transform", "rotate(90deg)");
                cheak = false;
            }
        });
    });
});
