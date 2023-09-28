jq2 = jQuery.noConflict();
jq2(function ($) {
    /* Burger */
    $(".burger-btn").on("click", function () {
        $(this).toggleClass("active");
        $(".burger-menu").toggleClass("active");
        $(".navbar__menu").toggleClass("active");
        $(".navbar__btn").toggleClass("active");
    });
    $(".navbar__menu li").on("click", function () {
        $(".burger-btn").removeClass("active");
        $(".burger-menu").removeClass("active");
        $(".navbar__menu").removeClass("active");
        $(".navbar__btn").removeClass("active");
    });
    $(".burger-menu").on("click", function () {
        $(this).removeClass("active");
        $(".burger-btn").removeClass("active");
        $(".navbar__menu").removeClass("active");
        $(".navbar__btn").removeClass("active");
    });
    $(".burger-menu__body").on("click", function (e) {
        e.stopPropagation();
    });
    /* Всплытие текста */
    $(window).on("scroll", function () {
        let scrollTop = $(window).scrollTop(),
            menuHeight = $(".navbar").height(),
            section = $(".section"),
            heightW = $(window).height() / 2.5;
        for (let i = 0; i < section.length; i++) {
            let sectionHeight = section.eq(i).offset().top;
            if (sectionHeight - menuHeight - heightW <= scrollTop) {
                $(".section h3").eq(i).css({
                    transform: "translateX(0)",
                    visibility: "visible",
                    opacity: "1",
                });
                setTimeout(function () {
                    $(".section h3").eq(i).siblings("p").css({
                        transform: "translateX(0)",
                        visibility: "visible",
                        opacity: "1",
                    });
                }, 500);
            }
        }
    });
});