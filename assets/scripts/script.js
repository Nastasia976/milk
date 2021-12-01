

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
        infinite: false,
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
                breakpoint: 545,
                settings: {
                    slidesToShow: 1.3,
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
        fade: true,
        asNavFor: '.small-slider',
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

    $('#ss-01').click(function (evrnt) {
        $('.big-slider').slick('goTo', 0);
    });
    $('#ss-02').click(function (evrnt) {
        $('.big-slider').slick('goTo', 1);
    });
    $('#ss-03').click(function (evrnt) {
        $('.big-slider').slick('goTo', 2);
    });
    $('#ss-04').click(function (evrnt) {
        $('.big-slider').slick('goTo', 3);
    });
    $('.slick-cloned').click(function (evrnt) {
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

    //___________DESCRIPTION_PAGE_____

    $('.product-about__el_description').click(function (evrnt) {

        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
        $('.description').addClass('_active');
        $('.description').removeClass('_passive');

        $('.characters, .package, .sertificates, .reviews').toggleClass('_passive');
        $('.characters, .package, .sertificates, .reviews').addClass('_active');
    });
    $('.product-about__el_characters').click(function (evrnt) {
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
        $('.characters').addClass('_active');
        $('.characters').removeClass('_passive');

        $('.description, .package, .sertificates, .reviews').removeClass('_active');
        $('.description, .package, .sertificates, .reviews').addClass('_passive');
    });
    $('.product-about__el_package').click(function (evrnt) {
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
        $('.package').addClass('_active');
        $('.package').removeClass('_passive');

        $('.description, .characters, .sertificates, .reviews').removeClass('_active');

        $('.description, .characters, .sertificates, .reviews').addClass('_passive');
    });
    $('.product-about__el_sertificates').click(function (evrnt) {
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
        $('.sertificates').addClass('_active');
        $('.sertificates').removeClass('_passive');

        $('.description, .characters, .package, .reviews').removeClass('_active');
        $('.description, .characters, .package, .reviews').addClass('_passive');
    });
    $('.product-about__el_reviews').click(function (evrnt) {
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
        $('.reviews').addClass('_active');
        $('.reviews').removeClass('_passive');

        $('.description, .characters, .package, .sertificates').removeClass('_active');
        $('.description, .characters, .package, .sertificates').addClass('_passive');
    });

    /* $('.popular__button2').click(function (evrnt) {
        $('.popular__button2').toggleClass('active');
    }); */

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


/* $(document).ready(function () {
    $('.production-slider2').slick({
        slidesToShow: 1.5,
        slidesToScrol: 0.5,
        infinite: false,
        initialSlide: 0.5,
    });
}); */
new Swiper('.swiper', {

    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    },
    slidesPerView: 1.6,
    loop: true,
    spaceBetween: 10,
    slidesOffsetBefore: -250,
    pagination: {
        el: '.swaper-pagination',
        type: 'fraction',

    },

});


let ts = document.querySelector('.small-slider')
ts.append(...Array.from(ts.children).reverse())



