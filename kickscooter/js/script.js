jq2 = jQuery.noConflict();
jq2(function ($) {
    $(".header__images").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 500,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        startPosition: 4,
    });
    $(".compare__items").owlCarousel({
        items: 4,
        autoplay: false,
        smartSpeed: 500,
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        mouseDrag: false,
    });
    const comparePrev = $(
        ".compare__body .owl-carousel .owl-nav button.owl-prev"
    );
    const compareNext = $(
        ".compare__body .owl-carousel .owl-nav button.owl-next"
    );
    const opacity = $(".compare__body .owl-carousel .owl-stage-outer");
    opacity.prepend(`
        <div class="compare__note">
            <div><div><img src="img/compare-icon-1.svg" alt=""></div><p>Максимальная скорость</p></div>
            <div><div><img src="img/compare-icon-2.svg" alt=""></div><p>Максимальная дистанция</p></div>
            <div><div><img src="img/compare-icon-3.svg" alt=""></div><p>Ёмкость батареи</p></div>
            <div><div><img src="img/compare-icon-4.svg" alt=""></div><p>Вес, нетто</p></div>
            <div><div><img src="img/compare-icon-5.svg" alt=""></div><p>Грузоподьёмность</p></div>
            <div><div><img src="img/compare-icon-6.svg" alt=""></div><p>Время зарядки</p></div>
            <div><div><img src="img/compare-icon-7.svg" alt=""></div><p>Количество батарей</p></div>
            <div><div><img src="img/compare-icon-8.svg" alt=""></div><p>Мощность двигателя</p></div>
            <div><div><img src="img/compare-icon-9.svg" alt=""></div><p>Выходная мощность</p></div>
            <div><div><img src="img/compare-icon-10.svg" alt=""></div><p>Максимальный наклон</p></div>
            <div><div><img src="img/compare-icon-11.svg" alt=""></div><p>Подвеска</p></div>
            <div><div><img src="img/compare-icon-12.svg" alt=""></div><p>Безопасность</p></div>
            <div><div><img src="img/compare-icon-13.svg" alt=""></div><p>Подсветка</p></div>
        </div>
        <div class="compare__opacity__left disabled"></div>
        <div class="compare__opacity__right"></div>
    `);
    comparePrev.on("click", function () {
        let cheakPrev = comparePrev.hasClass("disabled") ? true : false;
        let cheakNext = compareNext.hasClass("disabled") ? true : false;
        if (cheakPrev) {
            $(".compare__opacity__left").addClass("disabled");
        } else {
            $(".compare__opacity__left").removeClass("disabled");
        }
        if (cheakNext) {
            $(".compare__opacity__right").addClass("disabled");
        } else {
            $(".compare__opacity__right").removeClass("disabled");
        }
    });
    compareNext.on("click", function () {
        let cheakPrev = comparePrev.hasClass("disabled") ? true : false;
        let cheakNext = compareNext.hasClass("disabled") ? true : false;
        if (cheakPrev) {
            $(".compare__opacity__left").addClass("disabled");
        } else {
            $(".compare__opacity__left").removeClass("disabled");
        }
        if (cheakNext) {
            $(".compare__opacity__right").addClass("disabled");
        } else {
            $(".compare__opacity__right").removeClass("disabled");
        }
    });
    comparePrev.html('<img src="./img/compare-arrow.svg">');
    comparePrev.find("img").css({
        transform: "rotate(180deg)",
    });
    compareNext.html('<img src="./img/compare-arrow.svg">');

    $(".reviews__items").owlCarousel({
        items: 3,
        autoplay: false,
        smartSpeed: 500,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
    });
    const reviewsPrev = $(
        ".reviews__body .owl-carousel .owl-nav button.owl-prev"
    );
    const reviewsPext = $(
        ".reviews__body .owl-carousel .owl-nav button.owl-next"
    );
    reviewsPrev.html('<img src="./img/compare-arrow.svg">');
    reviewsPrev.find("img").css({
        transform: "rotate(180deg)",
    });
    reviewsPext.html('<img src="./img/compare-arrow.svg">');

    /* Benefits */
    if (!$(".benefits__item").hasClass("active")) {
        $(".benefits__item").removeClass("active");
        $(".benefits__block").fadeOut(300);
        $(this).addClass("active");
        $(this)
            .find($(".benefits__block"))
            .css("display", "flex")
            .hide()
            .delay(100)
            .fadeIn();
    }
    $(".benefits__item").on("click", function () {
        if (!$(this).hasClass("active")) {
            $(".benefits__item").removeClass("active");
            $(".benefits__block").fadeOut(300);
            $(this).addClass("active");
            $(this)
                .find($(".benefits__block"))
                .css("display", "flex")
                .hide()
                .delay(100)
                .fadeIn();
        }
    });

    /* Video */
    $(".play").on("click", function () {
        $(this).fadeOut(200);
        $(".packing__video").append(
            '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/J7xLmb-hVYY?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );
    });

    /* Note */
    $(".overview__note p").on("mouseenter", function () {
        let th = $(this);
        th.siblings(".dot")
            .find(".circle:nth-of-type(4)")
            .css("opacity", "0.3");
        setTimeout(function () {
            th.siblings(".dot")
                .find(".circle:nth-of-type(3)")
                .css("opacity", "0.2");
            setTimeout(function () {
                th.siblings(".dot")
                    .find(".circle:nth-of-type(2)")
                    .css("opacity", "0.1");
            }, 100);
        }, 100);
        th.css("color", "transparent");
        th.siblings(".line").find(".path").css({
            stroke: "var(--blue)",
            opacity: "0.5",
        });
    });
    $(".overview__note p").on("mouseleave", function () {
        let th = $(this);
        setTimeout(function () {
            th.siblings(".dot")
                .find(".circle:nth-of-type(2)")
                .css("opacity", "0");
            setTimeout(function () {
                th.siblings(".dot")
                    .find(".circle:nth-of-type(3)")
                    .css("opacity", "0");
                setTimeout(function () {
                    th.siblings(".dot")
                        .find(".circle:nth-of-type(4)")
                        .css("opacity", "0");
                }, 100);
            }, 100);
            th.css("color", "var(--grey-white)");
            th.siblings(".line").find(".path").css({
                stroke: "var(--grey)",
                opacity: "0.1",
            });
        }, 200);
    });

    $(".dot").on("mouseenter", function () {
        let th = $(this);
        th.find(".circle:nth-of-type(4)").css("opacity", "0.3");
        setTimeout(function () {
            th.find(".circle:nth-of-type(3)").css("opacity", "0.2");
            setTimeout(function () {
                th.find(".circle:nth-of-type(2)").css("opacity", "0.1");
            }, 100);
        }, 100);
        th.siblings(".overview__note p").css("color", "transparent");
        th.siblings(".line").find(".path").css({
            stroke: "var(--blue)",
            opacity: "0.5",
        });
    });
    $(".dot").on("mouseleave", function () {
        let th = $(this);
        setTimeout(function () {
            th.find(".circle:nth-of-type(2)").css("opacity", "0");
            setTimeout(function () {
                th.find(".circle:nth-of-type(3)").css("opacity", "0");
                setTimeout(function () {
                    th.find(".circle:nth-of-type(4)").css("opacity", "0");
                }, 100);
            }, 100);
            th.siblings(".overview__note p").css("color", "var(--grey-white)");
            th.siblings(".line").find(".path").css({
                stroke: "var(--grey)",
                opacity: "0.1",
            });
        }, 200);
    });

    /* Всплытие текста */
    $(window).on("scroll", function () {
        let scrollTop = $(window).scrollTop(),
            menuHeight = $(".navbar").height(),
            section = $(".section"),
            heightW = $(window).height() / 2;
        for (let i = 0; i < section.length; i++) {
            let sectionHeight = section.eq(i).offset().top;
            if (sectionHeight - menuHeight - heightW <= scrollTop) {
                $(".section h2").eq(i).css({
                    transform: "translateY(0%)",
                    visibility: "visible",
                    opacity: "1",
                });
                setTimeout(function () {
                    $(".section h2").eq(i).siblings("p").css({
                        transform: "translateY(0%)",
                        visibility: "visible",
                        opacity: "1",
                    });
                }, 500);
            }
        }
    });

    /* InputMask */
    var im = new Inputmask("+38(999)-999-99-99").mask($('input[type="tel"]'));

    /* Popap basket */
    $(".popup-with-zoom-anim").magnificPopup({
        type: "inline",

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: "auto",

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in",
    });

    /* Cart */
    for (let i = 0; i < $(".accessories .accessories__item").length; i++) {
            if (localStorage.getItem(`product${i}`) == "true") {
                $(".accessories .accessories__item").eq(i).find('.btn-cart').addClass("add");
            let btn = $(
                `<button type="button" class="delete-prod" prod="${i}">×</button>`
            );
            $(".basket").append(
                $(".accessories .accessories__item").eq(i).clone().prepend(btn)
            );
        }
    }
    $(".basket").find(".btn-cart").remove();
    if ($(".basket").find(".accessories__item")) {
        $(".basket-clear").hide();
        $(".count").show();
        $(".count span").html($(".basket").find(".accessories__item").length);
    }
    if ($(".count span").html() == 0) {
        $(".count").hide();
        $(".basket-clear").show();
    }
    $(".btn-cart.add").text("in cart");

    $(".delete-prod").on("click", function () {
        $(this).parent(".accessories__item").remove();
        if ($(".basket").find(".accessories__item")) {
            $(".basket-clear").hide();
            $(".count").show();
            $(".count span").html(
                $(".basket").find(".accessories__item").length
            );
        }
        if ($(".count span").html() == 0) {
            $(".count").hide();
            $(".basket-clear").show();
        }
        let back = Number($(this).attr("prod"));
        localStorage.removeItem(`product${back}`);
        $(".btn-cart").eq(back).removeClass("add");
    });

    $(".btn-cart").on("click", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("add")) {
            $(this).addClass("add");
            $(this).text("in cart");
            let counter = $(this).parent(".accessories__item").index();
            localStorage.setItem(`product${counter}`, true);
            const btn = $(
                `<button type="button" class="delete-prod" prod="${counter}">×</button>`
            );
            $(".basket").append(
                $(this).parent(".accessories__item").clone().prepend(btn)
            );
            $(".delete-prod").on("click", function () {
                $(this).parent(".accessories__item").remove();
                if ($(".basket").find(".accessories__item")) {
                    $(".basket-clear").hide();
                    $(".count").show();
                    $(".count span").html(
                        $(".basket").find(".accessories__item").length
                    );
                }
                if ($(".count span").html() == 0) {
                    $(".count").hide();
                    $(".basket-clear").show();
                }
                let back = Number($(this).attr("prod"));
                localStorage.removeItem(`product${back}`);
                $(".btn-cart").eq(back).removeClass("add");
                $(".btn-cart").eq(back).text("ADD TO CART");
            });
            $(".basket").find(".btn-cart").remove();
            $(this).parent(".accessories__item");
            if ($(".basket").find(".accessories__item")) {
                $(".basket-clear").hide();
                $(".count").show();
                $(".count span").html(
                    $(".basket").find(".accessories__item").length
                );
            }
            if ($(".count span").html() == 0) {
                $(".count").hide();
                $(".basket-clear").show();
            }
        } else {
            $('.btn-basket').trigger('click');
        }
    });
});
