jq2 = jQuery.noConflict();
jq2(function ($) {
    $('#banner-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        smartSpeed: 500,
        loop: true,
        margin: 0,
        nav: false,
        dots: true
    });
    $('.burger__button').click(function(e) {
        e.stopPropagation();
        $('.burger, .burger__body, .burger__button__body, .header__menu').toggleClass('active');
    });
    $('.close').click(function() {
        $('.burger, .burger__body, .burger__button__body, .header__menu').removeClass('active');
    });
    $('.burger, .header').click(function() {
        $('.burger, .burger__body, .burger__button__body, .header__menu').removeClass('active');
    });
    $('.burger__body, .header__menu').click(function(e) {
        e.stopPropagation();
    });
    $(document).scroll(function() {
        $('.burger, .burger__body, .burger__button__body, .header__menu').removeClass('active');
    });
});