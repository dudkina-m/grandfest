$(function () {
    sliderInit();
    AOS.init();
    modalDisplay();
    toggleMenu();
    tabsLogic();

    $(".service-page__top-panel-desc").mCustomScrollbar({
        theme: "light-thin"
    });

    $("#promo").lightGallery({
      selector: 'this',
      thumbnail: false,
      fullScreen: false,
      zoom: false,
      width: '800px',
      height: '600px',
      autoplay: false,
      autoplayControls: false
    });

    $("#thanks-gallery").lightGallery({
        autoplay: false,
        download: false,
        share: false,
        thumbnail: false,
        fullScreen: false,
        zoom: false,
        autoplayControls: false
    });

    $("#lightgallery").lightGallery({
        thumbnail: false,
        fullScreen: false,
        zoom: false,
        width: '800px',
        height: '600px',
        autoplay: false,
        autoplayControls: false
    });

});

function tabsLogic() {
  $('.tab__content').eq(1).hide();

  $('.tab__wrapper').each(function () {

    $(this).find('.tab').click(function () {

      var index = $(this).index();

      $('.tab').removeClass('active');
      $(this).addClass('active');

      $('.tab__content').hide();
      $('.tab__content').eq(index).show();
    });
  });
}

function toggleMenu() {

    $(document).mouseup(function (e) {
      $(".btn__menu").click(function (e) {
        e.preventDefault();
        $(".mobile-menu").toggleClass("open");
      });

        if (!$(".mobile-menu").is(e.target)
            && $(".mobile-menu").has(e.target).length === 0) {
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
