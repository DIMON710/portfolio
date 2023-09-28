jq2 = jQuery.noConflict();
jq2(function ($) {
    $("#comments-carousel").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 500,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        startPosition: 1,
    });

    $(".shcart1").click(function () {
        $(".cart1, #team__mess1").toggleClass("active");
    });
    $(".shcart2").click(function () {
        $(".cart2, #team__mess2").toggleClass("active");
    });
    $(".shcart3").click(function () {
        $(".cart3, #team__mess3").toggleClass("active");
    });

    $(".burger-btn").click(function (e) {
        e.stopPropagation();
        $(".burger-mn, .burger-btn__body, .header__nav").toggleClass("active");
    });
    $(".close").click(function () {
        $(".burger-mn, .burger-btn__body, .header__nav").removeClass("active");
    });
    $(".page").click(function () {
        $(".burger-mn, .burger-btn__body, .header__nav").removeClass("active");
    });
    $(".burger-mn").click(function (e) {
        e.stopPropagation();
    });
    $(window).on('scroll', function () {
        $(".burger-mn, .burger-btn__body, .header__nav").removeClass("active");
    });
});
