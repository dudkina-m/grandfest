$(function () {
    sliderInit();
    AOS.init();
    modalDisplay();
    toggleMenu();
});

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

function mapInit() {
    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
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
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev'></button>",
        nextArrow: "<button type='button' class='slick-next'></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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

function dropdownShow() {
    $(document).ready(function () {
        $('.dropdown').each(function () {
            var $dropdown = $(this);

            $('.dropdown__selected', $dropdown).click(function (e) {
                e.preventDefault();
                $div = $(".dropdown__list", $dropdown);
                $div.toggle();
                $(".dropdown__list").not($div).hide();
                $('.dropdown__item', $dropdown).click(function () {
                    $(".dropdown__list").not($div).hide();
                    $('.dropdown__input', $dropdown).val($(this).text());
                });
                return false;
            });
        });
        $('html').click(function () {
            $(".dropdown__list").hide();
        });
    });
}

function footerToTopAction() {
    $(document).ready(function () {
        $('.footer__to-top').click(function () {
            $('html, body').animate({scrollTop: '0px'}, 300);
        });
    });
}

function tabsLogic() {
    $('.case__content').eq(1).hide();

    $('.case__wrapper').each(function () {

        $(this).find('.case__tab').click(function () {

            var index = $(this).index();

            $('.case__tab').removeClass('active');
            $(this).addClass('active');

            $('.case__content').hide();
            $('.case__content').eq(index).show();
        });
    });
}

function paginationLogic() {
    $('.pagination__page').each(function () {
        $(this).click(function () {
            $('.pagination__page').removeClass('active');
            $(this).addClass('active');
        })
    });

    $('.pagination__next').click(function () {
        var current = 0;
        $('.pagination__page').each(function (e) {
            if ($(this).hasClass('active')) {
                current = e;
            }
        });

        if (current !== $('.pagination__page').length - 1) {
            $('.pagination__page').removeClass('active');
            $('.pagination__page').eq(current + 1).addClass('active');
        } else $('.pagination__next').attr('disabled');
    })

    $('.pagination__prev').click(function () {
        var current = 0;
        $('.pagination__page').each(function (e) {
            if ($(this).hasClass('active')) {
                current = e;
            }
        });

        if (current !== 0) {
            $('.pagination__page').removeClass('active');
            $('.pagination__page').eq(current - 1).addClass('active');
        } else $('.pagination__prev').attr('disabled');
    })
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
