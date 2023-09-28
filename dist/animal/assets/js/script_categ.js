jq2 = jQuery.noConflict();
jq2(function ($) {
    const burgerClass = $('.burger-menu, .burger-btn, .header__menu, .burger-menu__body');
    $('.burger-btn').click(function(e) {
        e.stopPropagation();
        burgerClass.toggleClass('active');
    }); 
    $('.close').click(function() {
        burgerClass.removeClass('active');
    }); 
    $('.wraper').on('click', function () {
        burgerClass.removeClass('active');
    });
    $('.burger-menu__body').on('click', function (e) {
        e.stopPropagation();
    });
    $(window).on('scroll', function () {
        burgerClass.removeClass('active');
    });
    let fun1 = function(name) {
        $('.modal-btn__' + name).click(function() {
            $('#modal__' + name).toggleClass('active');
        });
        $('.modal__close').click(function() {
            $('#modal__'  + name).removeClass('active');
        });
        $(".modal__body").click(function () {
            $("#modal__" + name).removeClass("active");
        });
        $(".modal__content").click(function (e) {
            e.stopPropagation();
        });
    };
    
    fun1('Katrine');
    fun1('Jennifer');
    fun1('Woody');
    fun1('Freddie');
    fun1('Sophia');
    fun1('Timmy');
    fun1('Charly');
    fun1('Scarlett');
});