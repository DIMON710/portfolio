jq2 = jQuery.noConflict();
jq2(function ($) {
        $(".owl-carousel").owlCarousel({
            items: 1,
            smartSpeed: 800,
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            mouseDrag: false,
            // autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
        });

        function isTouchDevice() {
            return (('ontouchstart' in window) || 
                (navigator.maxTouchPoints > 0) ||
                (navigator.msTouchPoints > 0));
        }
        if(isTouchDevice()) {
        $(".theme-btn").css('cursor', 'default');
        }


        $(".theme-btn").on("click", function () {
            if ($("body").attr("data-theme") == "dark") {
                $("body").attr("data-theme", "light");
                $(".theme-icon").attr("src", "assets/img/moon.svg");
                localStorage.setItem("theme", "light");
            } else {
                $("body").attr("data-theme", "dark");
                $(".theme-icon").attr("src", "assets/img/sun.svg");
                localStorage.setItem("theme", "dark");
            }
        });
});
