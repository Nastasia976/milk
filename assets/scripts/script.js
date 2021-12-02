

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger').toggleClass('active');
        $('.burg-menu.active').removeClass('active');
        $('.header__link-open').removeClass('active');
        $('.burg-menu').slideUp(500);
        $('.header__submenu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.head-link').removeClass('active');
        $('.header__link-open').removeClass('passive');
    });


    $('.title-page__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 10000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $('.categories-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.categories-prev'),
        nextArrow: $('.categories-next'),
    });

    $('.popular__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.popular-prev'),
        nextArrow: $('.popular-next'),
        responsive: [
            {
                breakpoint: 1520,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.advantages__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.advantages-prev'),
        nextArrow: $('.advantages-next'),
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.delivery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.delivery-page-prev'),
        nextArrow: $('.delivery-page-next'),
        dots: true,
        appendDots: $('.delivery-page__dots'),
    });
    $('.production-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1.5,
        infinite: true,
        initialSlide: 0,
        arrows: true,
        prevArrow: $('.production-page-prev'),
        nextArrow: $('.production-page-next'),
        dots: true,
        appendDots: $('.production-page__dots'),
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 0,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 445,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.small-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.small-slider__prev'),
        nextArrow: $('.small-slider__next'),
        vertical: true,
        initialSlide: 0,
        infinite: true,
        asNavFor: '.big-slider',
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    vertical: false,
                    variableWidth: true,
                    slidesToShow: 2,
                }
            },
        ]
    });
    $('.big-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        asNavFor: '.small-slider',
        responsive: [
            {
                breakpoint: 501,
                settings: {
                    draggable: true,
                }
            },
        ]
    });
    $('.sertificates__body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        touchTreshold: 100,
        prevArrow: $('.sertificates__prev'),
        nextArrow: $('.sertificates__next'),
        responsive: [
            {
                breakpoint: 845,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $('.big-slider__prev').click(function (event) {
        $('.big-slider').slick('slickPrev');
    });
    $('.big-slider__next').click(function (event) {
        $('.big-slider').slick('slickNext');
    });

    $('.popular__heart1').click(function (evrnt) {
        $(this).toggleClass('passive');
        $('.popular__heart2').toggleClass('active');
    });

    $('#ss-01').click(function (event) {
        $('.big-slider').slick('goTo', 0);
    });
    $('#ss-02').click(function (event) {
        $('.big-slider').slick('goTo', 1);
    });
    $('#ss-03').click(function (event) {
        $('.big-slider').slick('goTo', 2);
    });
    $('#ss-04').click(function (event) {
        $('.big-slider').slick('goTo', 3);
    });
    $('.slick-cloned').click(function (event) {
        $('.big-slider').slick('slickNext');
    });



    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.delivery-slider').slick('slickGoTo', slideno - 1);
    });

    $('.circle__item1').click(function (event) {
        $('.circle__item1').toggleClass('active');
        $('.circle__item2, .circle__item3, .circle__item4').removeClass('active');
    });

    $('.circle__item2').click(function (event) {
        $('.circle__item2').toggleClass('active');
        $('.circle__item1, .circle__item3, .circle__item4').removeClass('active');
    });

    $('.circle__item3').click(function (event) {
        $('.circle__item3').toggleClass('active');
        $('.circle__item2, .circle__item1, .circle__item4').removeClass('active');
    });

    $('.circle__item4').click(function (event) {
        $('.circle__item4').toggleClass('active');
        $('.circle__item2, .circle__item3, .circle__item1').removeClass('active');
    });

    $('.header__link-open').click(function (event) {
        $('.header__link-open').toggleClass('active');
        $('.burg-menu').toggleClass('active');
        $('.head-link').removeClass('active');
    });

    $('.header__links').click(function (event) {
        if ($('.header__link-open').hasClass('active')) {
            $('.burg-menu.active').slideDown(500);
            console.log('First click');
        } else {
            $('.burg-menu').slideUp(500);
            console.log('Second click');
        }
    });

    $('.head-link').click(function (event) {
        $(this).toggleClass('active').not($(this)).removeClass('active');
        $('.head-link').not($(this)).removeClass('active');
        $('.header__link-open').removeClass('active');
        $('.header__link-open').addClass('passive');
        $('.burg-menu').slideUp(500);
        $('.burg-menu').removeClass('active');
    });

    $('.contact-page__title').click(function (event) {
        $('.contact-page__title').toggleClass('active');
    });

    $('.contact-page__title').click(function (event) {
        if ($('.contact-page__title').hasClass('active')) {
            $('.contact-page__list').slideDown(500);
            console.log('First click');
        } else {
            $('.contact-page__list').slideUp(500);
            console.log('Second click');
        }
    });

    $('.user-phone').mask('999) 999-99-99', {
        autoclear: false
    });

    $('.sertificates__image1').click(function (event) {
        $('.sertificates__items1, .scale-sertificat').toggleClass('active');

        $('body').toggleClass('lock');
    });
    $('.sertificates__image2').click(function (event) {
        $('.sertificates__items2, .scale-sertificat').toggleClass('active');

        $('body').toggleClass('lock');
    });
    $('.sertificates__image3').click(function (event) {
        $('.sertificates__items3, .scale-sertificat').toggleClass('active');

        $('body').toggleClass('lock');
    });

    $('.close-sertificate').click(function (event) {
        $('.sertificates__items1, .sertificates__items2, .sertificates__items3, .scale-sertificat').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.product-about__el').click(function (event) {
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
    });

});




function counterFunction(count) {

    var plus = count.querySelector('._plus');
    var minus = count.querySelector('._minus');
    var number = count.querySelector('.item-price__numbers');
    var numberValue = parseFloat(number.value, 10);

    minus.addEventListener('click', function () {

        if (numberValue === 1) {
            return;
        };

        numberValue--;
        number.value = numberValue;
    });

    plus.addEventListener('click', function () {
        numberValue++;
        number.value = numberValue;
    });

}

var counts = document.querySelectorAll('.item-price__choice');

counts.forEach(counterFunction);


let ts = document.querySelector('.small-slider')
ts.append(...Array.from(ts.children).reverse())


/* let myImageSlider = new Swiper('.swiper-description', {
    slidesPerView: 1,
    autoHeight: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
}); */

/* let myTextSlider = new Swiper('.swiper-tabs', {
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    breakpoints: {
        940: {
            slidesPerView: 5,
        },
        540: {
            slidesPerView: 3.3,
        },
        420: {
            slidesPerView: 2.4,
        },
        420: {
            slidesPerView: 1.4,
        }
    }
}); */

/* myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider; */
/* if ( $('.swiper-slide').hasClass('swiper-1').hasClass('swiper-slide-active') ) {
    $('.swiper-1').addClass('act');
}
if ( $('.swiper-slide-active').hasClass('.swiper-2') ) {
    $('.swiper-slide-active').addClass('act');
} */
/* if ( $('.swiper-3').hasClass('swiper-slide-active') ) {
    $('.swiper-3').toggleClass('act');
}
if ( $('.swiper-4').hasClass('swiper-slide-active') ) {
    $('.swiper-4').toggleClass('act');
}
if ( $('.swiper-5').hasClass('swiper-slide-active') ) {
    $('.swiper-5').toggleClass('act');
} */

/* if ( $('.swiper-1').hasClass('act') ) {
    $('.product-about__el_description').addClass('active');
    $('.product-about__el_characters, .product-about__el_package, .product-about__el_sertificates, .product-about__el_reviews').removeClass('active');
}
if ( $('.swiper-slide-active').hasClass('swiper-2') ) {
    $('.product-about__el_characters').addClass('active');
    $('.product-about__el_description, .product-about__el_package, .product-about__el_sertificates, .product-about__el_reviews').removeClass('active');
} */
/* if ( $('.swiper-3').hasClass('act') ) {
    $('.product-about__el_package').addClass('active');
    $('.product-about__el_description, .product-about__el_characters, .product-about__el_sertificates, .product-about__el_reviews').removeClass('active');
}
if ( $('.swiper-4').hasClass('act') ) {
    $('.product-about__el_sertificates').addClass('active');
    $('.product-about__el_description, .product-about__el_package, .product-about__el_package, .product-about__el_reviews').removeClass('active');
}
if ( $('.swiper-5').hasClass('act') ) {
    $('.product-about__el_reviews').addClass('active');
    $('.product-about__el_description, .product-about__el_package, .product-about__el_sertificates, .product-about__el_sertificates').removeClass('active');
} */





/* function goToPage(numberPage) {
    $('.product-about__el_description').click(function (e) {
        new Swiper('.swiper-description').slideTo(0, 500, false);
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
    });
} */
/* goToPage(10);
function goToPage1(numberPage) {
    $('.product-about__el_characters').click(function (e) {
        new Swiper('.swiper-description').slideTo(1, 500, false);
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');

    });
}
goToPage1(10);
function goToPage2(numberPage) {
    $('.product-about__el_package').click(function (e) {
        new Swiper('.swiper-description').slideTo(2, 500, false);
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
        $('.swiper-1').removeClass('swiper-slide-active');
        $('.swiper-2').toggleClass('swiper-slide-active');
    });
}
goToPage2(10);
function goToPage3(numberPage) {
    $('.product-about__el_sertificates').click(function (e) {
        new Swiper('.swiper-description').slideTo(3, 500, false);
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
        $('.swiper-4').toggleClass('swiper-slide-active');
    });
}
goToPage3(10);
function goToPage4(numberPage) {
    $('.product-about__el_reviews').click(function (e) {
        new Swiper('.swiper-description').slideTo(4, 500, false);
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
        $('.swiper-5').toggleClass('swiper-slide-active');
    });
}
goToPage4(10); */




