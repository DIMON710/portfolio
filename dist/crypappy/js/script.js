jq2 = jQuery.noConflict();
jq2(function ($) {
    $(document).ready(function () {
        /*Burger*/
        const burgerBtn = $(".burger__btn");
        burgerBtn.on("click", function () {
            $(this).toggleClass("active");
            $(".burger__menu").toggleClass("active");
            $(".navbar__menu").toggleClass("active");
            $(".navbar__btn").toggleClass("active");
            if ($(".navbar__menu").hasClass("active")) {
                $(".navbar__menu").css("display", "flex").hide().fadeIn(300);
            } else {
                $(".navbar__menu").fadeOut(300);
            }
        });
        $(window).resize(function () {
            if ($(window).width() > 900) {
                $(".navbar__menu").css("display", "flex").fadeIn(1);
                burgerBtn.removeClass("active");
                $(".burger__menu").removeClass("active");
                $(".navbar__menu").removeClass("active");
                $(".navbar__btn").removeClass("active");
            } else {
                if (!$(".navbar__menu").hasClass("active")) {
                    $(".navbar__menu").css("display", "none");
                }
            }
        });

        $(".navbar__menu li").on("click", function () {
            burgerBtn.removeClass("active");
            $(".burger__menu").removeClass("active");
            $(".navbar__menu").removeClass("active");
            $(".navbar__btn").removeClass("active");
            if ($(window).width() < 900) {
                $(".navbar__menu").fadeOut(300);
            }
        });
        if ($(window).width() < 900) {
            $("body").on("click", function (e) {
                if (
                    e.target.className != "burger__btn _button active" &&
                    e.target.className != "navbar__menu active" &&
                    e.target.className != "burger__menu__body" &&
                    e.target.className != "c"
                ) {
                    burgerBtn.removeClass("active");
                    $(".burger__menu").removeClass("active");
                    $(".navbar__menu").removeClass("active");
                    $(".navbar__btn").removeClass("active");
                    $(".navbar__menu").fadeOut(300);
                }
            });
        }

        /*Активный пункт меню*/
        $(window).on("scroll", function () {
            let scrollTop = $(window).scrollTop();
            let menuHeight = $(".navbar").height();
            let section = $(".section");
            for (let i = 0; i < section.length; i++) {
                let sectionHeight = section.eq(i).offset().top;
                if (sectionHeight - menuHeight <= scrollTop) {
                    $(".navbar__menu li a").removeClass("active");
                    $(".navbar__menu li a").eq(i).addClass("active");
                } else if (656 - menuHeight > scrollTop) {
                    $(".navbar__menu li a").removeClass("active");
                }
            }
        });
        /*New Switcher*/
        const smSw = $(".new__switcher");
        const switP = $(".new__item p");
        for (let i = 0; i < switP.length; i++) {
            if (switP.eq(i).hasClass("active")) {
                switP.eq(i).slideDown();
                smSw.eq(i).find("span:last-child").css("left", "57%");
                smSw.eq(i).find("span").css("background-color", "#159BE8");
            } else {
                switP.eq(i).slideUp();
                smSw.eq(i).find("span:last-child").css("left", "0");
                smSw.eq(i).find("span").css("background-color", "#ccc");
            }
        }
        smSw.on("click", function () {
            $(this).prev().toggleClass("active");
            $(this).prev().slideToggle();
            for (let i = 0; i < switP.length; i++) {
                if (switP.eq(i).hasClass("active")) {
                    switP.eq(i).slideDown();
                    smSw.eq(i).find("span:last-child").css("left", "57%");
                    smSw.eq(i).find("span").css("background-color", "#159BE8");
                } else {
                    switP.eq(i).slideUp();
                    smSw.eq(i).find("span:last-child").css("left", "0");
                    smSw.eq(i).find("span").css("background-color", "#ccc");
                }
            }
        });

        /*Price Switcher*/
        let switch1 = $(".switch__btn__1");
        let switch2 = $(".switch__btn__2");
        let price = $(".item__price");
        let period = $(".period");
        let prices = [];
        for (let i = 0; i < price.length; i++) {
            prices.push(price.eq(i).text());
        }
        switch1.on("click", function () {
            $(this).siblings("span").css("left", "0");
            $(".switch__btn").css("background-color", "#212250");
            period.text("mo");
            for (let i = 0; i < price.length; i++) {
                price.eq(i).text(prices[i]);
            }
        });
        switch2.on("click", function () {
            $(this).siblings("span").css("left", "54%");
            $(".switch__btn").css("background-color", "#159BE8");
            period.text("an");
            for (let i = 0; i < price.length; i++) {
                price
                    .eq(i)
                    .text(
                        price.eq(i).text() * 12 -
                            ((price.eq(i).text() * 12) / 100) * 20
                    );
            }
        });
        function isTouchDevice() {
            return (
                "ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msTouchPoints > 0
            );
        }
        if (isTouchDevice()) {
            switch1.css("cursor", "default");
            switch2.css("cursor", "default");
            $(".burger__btn").css("cursor", "default");
        }
    });
});
