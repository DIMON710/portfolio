jq2 = jQuery.noConflict();
jq2(function ($) {
    let cheak = false;
    let vinCheak = 0;
    let t, l, d;
    function cheaker(elem, top, left, deg) {
        if (vinCheak !== 'o' && vinCheak !== 'x') {
            for (let i = 0; i < $(elem).length; i++) {
                let chClass1 = $(elem).eq(i);
                if (vinCheak !== 'o') {
                    if (chClass1.hasClass('x'))
                        vinCheak = 'x';

                    else if (!chClass1.hasClass('x')) {
                        vinCheak = 0;
                        break;
                    }
                }
            }
            for (let i = 0; i < $(elem).length; i++) {
                let chClass1 = $(elem).eq(i);
                if (vinCheak !== 'x') {
                    if (chClass1.hasClass('o')) {
                        vinCheak = 'o';
                    } else if (!chClass1.hasClass('o')) {
                        vinCheak = 0;
                        break;
                    }
                }
            }
        }
        if ((vinCheak == 'o' || vinCheak == 'x') && (t == undefined && l == undefined)) {
            t = top;
            l = left;
            d = deg;
            line(t, l, d);
        }
    }
    function diagCheaker(elem, top, left, deg) {
        if (vinCheak !== 'o' && vinCheak !== 'x') {
            for (let i = 0; i < $(elem).length; i++) {
                let chClass1 = $(elem[i]);
                if (vinCheak !== 'o') {
                    if (chClass1.hasClass('x'))
                        vinCheak = 'x';
                    else if (!chClass1.hasClass('x')) {
                        vinCheak = 0;
                        break;
                    }
                }
            }
            for (let i = 0; i < $(elem).length; i++) {
                let chClass1 = $(elem[i]);
                if (vinCheak !== 'x') {
                    if (chClass1.hasClass('o')) {
                        vinCheak = 'o';
                    } else if (!chClass1.hasClass('o')) {
                        vinCheak = 0;
                        break;
                    }
                }
            }
        }
        if ((vinCheak == 'o' || vinCheak == 'x') && (t == undefined && l == undefined && d == undefined)) {
            t = top;
            l = left;
            d = deg;
            line(t, l, d);
        }
    }
    function line(top, left, deg) {
        $('.line').css({
            'top': top,
            'left': left,
            'transform': `rotate(${deg})`
        });
    }

    let div = $('<div>', { 'class': 'line' }).css({
        'width': '360px',
        'height': '5px',
        'background-color': 'rgb(137, 137, 137)',
        'border-radius': '10px',
        'position': 'absolute',
        'display': 'none'
    });
    $('.page__body').append(div);

    $('.page__item').on('click', function () {
        let globalCheak = true;
        if ($(this).html() == '' && cheak && $('.page__title').text() == '') {
            $(this).fadeOut(0).html('<div class="circle"></div>').fadeIn(300);
            $(this).addClass('o');
            cheak = false;
        } else if ($(this).html() == '' && !cheak && $('.page__title').text() == '') {
            $(this).fadeOut(0).html('<div class="cross">' +
            '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">'+
            '<defs>'+
            '<style>.cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style>'+
            '</defs>'+
            '<title/><g id="cross">'+
            '<line class="cls-1" x1="7" x2="25" y1="7" y2="25"/>'+
            '<line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>'+
            '</div>').fadeIn(300);
            $(this).addClass('x');
            cheak = true;
        }
        cheaker('.page__menu:nth-child(1) li', '55px');
        cheaker('.page__menu:nth-child(2) li', '178px');
        cheaker('.page__menu:nth-child(3) li', '300px');
        cheaker('.page__menu li:nth-child(1)', '178px', '-121px', '90deg');
        cheaker('.page__menu li:nth-child(2)', '178px', '0px', '90deg');
        cheaker('.page__menu li:nth-child(3)', '178px', '121px', '90deg');

        let links = [];
        let num = 1;
        for (let i = 0; i < $('.page__menu li:nth-child(1)').length; i++) {
            links[i] = `.page__menu:nth-child(${num}) li:nth-child(${num})`;
            num++;
        }
        diagCheaker(links, '178px', '0px', '45deg');
        let links2 = [];
        let num2 = 1;
        for (let i = 0; i < $('.page__menu li:nth-child(1)').length; i++) {
            num--;
            links2[i] = `.page__menu:nth-child(${num2}) li:nth-child(${num})`;
            num2++;
        }
        diagCheaker(links2, '178px', '0px', '-45deg');
        for (let i = 0; i < $('.page__menu li').length; i++) {
            if ($('.page__menu li').eq(i).html() == '') {
                globalCheak = false;
            }
        }

        if (vinCheak == 'x') {
            $('.page__title').text('Крестики победили!');
            $('.newGame').css('display', 'block');
            $('.line').fadeIn(300);
            $('.cls-1').css('stroke', 'green');
            $('.circle').css('border-color', 'red');
        }
        else if (vinCheak == 'o') {
            $('.page__title').text('Нолики победили!');
            $('.newGame').css('display', 'block');
            $('.line').fadeIn(300);
            $('.circle').css('border-color', 'green');
            $('.cls-1').css('stroke', 'red');
        }
        else if (globalCheak == true) {
            $('.page__title').text('Ничья');
            $('.newGame').css('display', 'block');
            $('.circle').css('border-color', 'yellow');
            $('.cls-1').css('stroke', 'yellow');
        }
    });
    $('.newGame').on('click', function () {
        $(this).css('display', 'none');
        for (let i = 0; i < $('.page__menu li').length; i++) {
            $('.page__menu li').eq(i).fadeOut(300).text('').fadeIn(100);
            $('.page__menu li').eq(i).removeClass('x o');
        }
        $('.page__title').text('');
        $('.line').css({
            'display': 'none',
            'top': '178px',
            'left': '0px',
            'transform': 'rotate(0deg)'
        });
        cheak = false;
        vinCheak = 0;
        t = undefined;
        l = undefined;
        d = undefined;

    });
});
