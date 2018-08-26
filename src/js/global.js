$(function () {
    sliderInit();
    AOS.init();
    modalDisplay();
    toggleMenu();
    showPhoto();
});

function showPhoto() {
    $(".img__container").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            var index = $(this).index();
            var src= $(this).attr("data-src");
            var albumLength = $(".img__container").length;
            var sign = $(this).attr("data-sign");
            var lightboxSign = $(".lightbox__sign");
            var lightboxNumber = $(".lightbox__number");
            $(".lightbox img").attr("src", src);
            lightboxSign.text(sign);
            $(lightboxNumber.children()[0]).text(index + 1);
            $(lightboxNumber.children()[2]).text(albumLength);
            $(".lightbox__download").attr("href", src);
            $(".lightbox__container").fadeIn();
        });
    });

    $('.lightbox__close').click(function () {
        $('.lightbox__container').fadeOut(300);
    });

    $('.lightbox__container').click(function (e) {
        if (!$(e.target).closest('.lightbox').length) {
            $('.lightbox__container').fadeOut();
        }
    });
}

function toggleMenu() {
    $(".btn__menu").click(function (e) {
        e.preventDefault();
        $(".mobile-menu").toggleClass("open");
    });

    $(document).mouseup(function (e) {
        if (!$(".mobile-menu").is(e.target)
            && $(".mobile-menu").has(e.target).length === 0)
        {
            $(".mobile-menu").removeClass("open");
        }
    });
}

function sliderInit() {
    $(".top-panel__slider").slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    $('.partners-content__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev'></button>",
        nextArrow: "<button type='button' class='slick-next'></button>",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

    $('.review-content__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    $('.article__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.about__rewards-slider').slick({
        prevArrow: "<button type='button' class='slick-prev'></button>",
        nextArrow: "<button type='button' class='slick-next'></button>",
        dots: true
    });

    $('.about__thanks-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

function modalDisplay() {

    $('[data-popup]').each(function () {

        $(this).click(function (e) {
            e.preventDefault();
            var id = $(this).attr('data-popup');
            $('.popup').hide();
            $('#' + id).show();
            $('.popup__container').fadeIn(300);
        })
    });

    $('.popup__close').click(function () {
        $('.popup__container').fadeOut(300);
    });

    $('.popup__container').click(function (e) {
        if (!$(e.target).closest('.popup').length) {
            $('.popup__container').fadeOut();
        }
    });
}
