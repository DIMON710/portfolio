jq2 = jQuery.noConflict();
jq2(function ($) {
    $(".owl-carousel").owlCarousel({
        items: 1,
        smartSpeed: 800,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
    });

    const video = $(".homerun__video");
    $(".homerun__play").on("click", function (event) {
        event.preventDefault();
        $(this).css("display", "none");
        video.html(
            video.html() +
                '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/OsF9H7yRnvU?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>'
        );
    });

    const burgerBtn = $(".burger-btn");
    burgerBtn.on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        $(".burger-menu").toggleClass("active");
        $(".navbar__menu").toggleClass("active");
        $(".navbar__btns").toggleClass("active");
    });
    $(".navbar__menu li").on("click", function () {
        burgerBtn.removeClass("active");
        $(".burger-menu").removeClass("active");
        $(".navbar__menu").removeClass("active");
        $(".navbar__btns").removeClass("active");
    });
    $(".page").on("click", function () {
        burgerBtn.removeClass("active");
        $(".burger-menu").removeClass("active");
        $(".navbar__menu").removeClass("active");
        $(".navbar__btns").removeClass("active");
    });
    const burgerMenu = $(".burger-menu");
    burgerMenu.on("click", function (e) {
        e.stopPropagation();
    });
    $(document).on("scroll", function () {
        burgerBtn.removeClass("active");
        $(".burger-menu").removeClass("active");
        $(".navbar__menu").removeClass("active");
        $(".navbar__btns").removeClass("active");
    });
    if ($(window).width() <= 575) {
        for (let i = 0; i < $(".main h4").length; i++) {
            $(".main h4")
                .eq(i)
                .html(
                    $(".main h4").eq(i).html() +
                        '<svg class="arrow" viewBox="0 0 5 9">' +
                        '<path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"></path>' +
                        "</svg>"
                );
        }
        $(".main h4").next("ul").slideUp();
        $(".main h4").on("click", function () {
            $(".main h4").next("ul").slideUp();
            $(".main h4 svg").css("transform", "rotate(90deg)");
            if (!$(this).hasClass("active")) {
                $(this).next("ul").slideDown();
                $(".main h4").removeClass("active");
                $(this).addClass("active");
                $(this).children("svg").css("transform", "rotate(270deg)");
            } else {
                $(".main h4").removeClass("active");
                $(".main h4 svg").css("transform", "rotate(90deg)");
            }
        });
        $(".main ul li").on("click", function () {
            $(".main h4").next("ul").slideUp();
            $(".main h4").removeClass("active");
            $(".main h4 svg").css("transform", "rotate(90deg)");
        });
    }
    $(".color").on("click", function () {
        setTimeout(function () {
            $("#contact a").addClass("active");
            $("#svgColor").attr("fill", "#007BB6");
        }, 200);
        setTimeout(function () {
            $("#contact a").removeClass("active");
            $("#svgColor").attr("fill", "#CD486B");
        }, 1000);
    });
});
