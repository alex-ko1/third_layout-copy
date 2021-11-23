$(document).ready(function() {
    $('.slider').slick({
        arrows: true,

        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        //pauseOnFocus: true,
        pauseOnHover: true,

        touchTreshhold: 5,
        touchMove: true,
        waitForAnimate: false,

    });
});