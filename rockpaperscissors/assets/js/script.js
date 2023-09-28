jq2 = jQuery.noConflict();
jq2(function( $ ) {
    const stone = '<img src="assets/img/stone.png" alt="">';
    const scissors = '<img src="assets/img/scissors.png" alt="">';
    const paper = '<img src="assets/img/paper.png" alt="">';
        function main () {
            $('.btns').off('click');
            setTimeout( function () {
                $('.btns').on('click', main);
            }, 2000);
            $(this).addClass('active');
            $('.outUser').html($(this).html());
            let random = Math.floor(Math.random() * 3);
            if (random == 0) {
                $('.outBot').html('<img src="assets/img/stone.png" alt="">');
            } else if (random == 1) {
                $('.outBot').html('<img src="assets/img/scissors.png" alt="">');
            } else if (random == 2) {
                $('.outBot').html('<img src="assets/img/paper.png" alt="">');
            }
            setTimeout(function () {
                $('.outBot img, .outUser img').css({'opacity': '0', 'visibility': 'hidden'});
                $('.btns').removeClass('active');
                $('.outUser, .outBot').css('background-color', 'yellow');
            }, 2000);
            if ($(this).html() == stone) {
                if ($('.outBot').html() == paper) {
                    $('.title').text('Вы проиграли :(');
                    $('.outUser, .outBot').css('background-color', 'red');
                } else if ($('.outBot').html() == scissors) {
                    $('.title').text('Вы выиграли :)');
                    $('.outUser, .outBot').css('background-color', 'green');
                } else if ($('.outBot').html() == stone) {
                    $('.title').text('Ничья :|');
                }
            }
            if ($(this).html() == scissors) {
                if ($('.outBot').html() == stone) {
                    $('.title').text('Вы проиграли :(');
                    $('.outUser, .outBot').css('background-color', 'red');
                } else if ($('.outBot').html() == paper) {
                    $('.title').text('Вы выиграли :)');
                    $('.outUser, .outBot').css('background-color', 'green');
                } else if ($('.outBot').html() == scissors) {
                    $('.title').text('Ничья :|');
                }
            }
            if ($(this).html() == paper) {
                if ($('.outBot').html() == scissors) {
                    $('.title').text('Вы проиграли :(');
                    $('.outUser, .outBot').css('background-color', 'red');
                } else if ($('.outBot').html() == stone) {
                    $('.title').text('Вы выиграли :)');
                    $('.outUser, .outBot').css('background-color', 'green');
                } else if ($('.outBot').html() == paper) {
                    $('.title').text('Ничья :|');
                }
            }
        }
       $('.btns').on('click', main);
});