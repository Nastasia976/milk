$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger').toggleClass('active');
        $('.burg-menu.active').removeClass('active');
        $('.header__link-open').removeClass('active');
        $('.burg-menu').slideUp(500);
        $('.header__submenu').toggleClass('active');
        $('body').toggleClass('locking');
        $('.head-link').removeClass('active');
        $('.header__link-open').removeClass('passive');
    });
    $('.header__elem').click(function () {
        $('.header__elem').removeClass('active');
        $(this).addClass('active');
    })
    $('.title-page__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 10000,
        prevArrow: $('.mainPage-prev'),
        nextArrow: $('.mainPage-next'),
    });

    $('.categories-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.categories-prev'),
        nextArrow: $('.categories-next'),
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.popular__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.popular-prev'),
        nextArrow: $('.popular-next'),
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 570,
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
    $('.delivery-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        if (currentSlide == 0) {
            $('.circle__item').removeClass('active');
            $('.circle__item1').addClass('active');
        }
        if (currentSlide == 1) {
            $('.circle__item').removeClass('active');
            $('.circle__item2').addClass('active');
        }
        if (currentSlide == 2) {
            $('.circle__item').removeClass('active');
            $('.circle__item3').addClass('active');
        }
        if (currentSlide == 3) {
            $('.circle__item').removeClass('active');
            $('.circle__item4').addClass('active');
        }
    });

    $('.why-we-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.why-we-prev'),
        nextArrow: $('.why-we-next'),
        dots: true,
        dots: false,
    });
    $('.why-we-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        if (currentSlide == 0) {
            $('.why-we__image').removeClass('active');
            $('.why-we__image1').addClass('active');
        }
        if (currentSlide == 1) {
            $('.why-we__image').removeClass('active');
            $('.why-we__image2').addClass('active');
        }
        if (currentSlide == 2) {
            $('.why-we__image').removeClass('active');
            $('.why-we__image3').addClass('active');
        }
    });

    $('.production-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1.5,
        infinite: false,
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
        infinite: false,
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
        infinite: false,
        asNavFor: '.small-slider',
        responsive: [
            {
                breakpoint: 501,
                settings: {
                    draggable: true,
                    variableHeight: true,
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.sertif-block__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.sertif-block-prev'),
        nextArrow: $('.sertif-block-next'),
        responsive: [
            {
                breakpoint: 1331,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.slider-rec').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.rec-for-order__prev'),
        nextArrow: $('.rec-for-order__next'),
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    $('.big-slider__prev').click(function (event) {
        $('.big-slider').slick('slickPrev');
    });
    $('.big-slider__next').click(function (event) {
        $('.big-slider').slick('slickNext');
    });

    $('.popular__heart1').click(function (evrnt) {
        $(this).hide().next().show();
    });
    $('.popular__heart2').click(function (evrnt) {
        $(this).hide().prev().show();
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
        $('.delivery-slider, .why-we-slider').slick('slickGoTo', slideno - 1);
    });

    if ($('.delivery-slider__items1').hasClass('slick-active')) {
        $('.circle__item1').addClass('active');
    };

    $('.header__link-open').click(function (event) {
        $('.head-link').removeClass('active');
        $(this).toggleClass('active').next().slideToggle(500);
        $('.header__link-open').removeClass('passive');
    });

    $('.head-link').click(function (event) {
        $('.head-link').removeClass('active');
        $(this).toggleClass('active');
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



    $('.product-about__el').click(function (event) {
        $('.product-about__el').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.select__item').click(function (event) {
        $('.select__item').removeClass('_active');
        $(this).toggleClass('_active');
        $('.select__icon').removeClass('_active');
    });
    $('.select__header').click(function (event) {
        $('.select__icon').toggleClass('_active');
    });


    $(document).mouseup(function (e) {
        var div = $('.select');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.select').removeClass('is-active');
            $('.select__icon').removeClass('_active');
        }
    });//скрыть селект при клике вне

    $('.consist-green').click(function (event) {
        $('.for-consist-green, .consist-green').addClass('active');
        $('.for-consist-orange, .for-consist-brown, .consist-orange, .consist-brown').removeClass('active');
    });
    $('.consist-orange').click(function (event) {
        $('.for-consist-orange, .consist-orange').addClass('active');
        $('.for-consist-green, .for-consist-brown, .consist-green, .consist-brown').removeClass('active');
    });
    $('.consist-brown').click(function (event) {
        $('.for-consist-brown, .consist-brown').addClass('active');
        $('.for-consist-green, .for-consist-orange, .consist-green, .consist-orange').removeClass('active');
    });

    //____________FILTER_________

    $('.filter__element').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $('.checkbox, .false-input, .filter__sub-submenu__item, .filter-close').click(function (event) {
        event.stopPropagation();
    });

    $('.filter__section').click(function (event) {
        $(this).toggleClass('active').children('.filter__sub-submenu').slideToggle(300);
    });

    $('.filter__clear').click(function (event) {
        $('.false-input, .for-input').removeClass('act-ive');
    });

    $('.filter-close1').click(function (event) {
        $('.filter__items1').find('.false-input, .for-input').removeClass('act-ive');
        $('.filter__items1').find('.checkbox').attr('checked', false);
    });
    $('.filter-close2').click(function (event) {
        $('.filter__items2').find('.false-input, .for-input').removeClass('act-ive');
        $('.filter__items2').find('.checkbox').attr('checked', false);
    });
    $('.filter-close3').click(function (event) {
        $('.filter__items3').find('.false-input, .for-input').removeClass('act-ive');
        $('.filter__items3').find('.checkbox').attr('checked', false);
    });
    $('.filter-close4').click(function (event) {
        $('.filter__items4').find('.false-input, .for-input').removeClass('act-ive');
        $('.filter__items4').find('.checkbox').attr('checked', false);
    });


    $('.false-input').click(function (event) {
        $(this).toggleClass('act-ive').next().toggleClass('act-ive');
        if ($('.false-input').hasClass('act-ive')) {
            $(this).prev('.checkbox').attr('checked', true);
            console.log('First click');
        } else {
            $('.checkbox').attr('checked', false);
            console.log('Second click');
        }
    });


    //-------select----


    $('.select-catalog').click(function (event) {
        $('.items-select').toggleClass('active');
    });

    $(document).mouseup(function (e) {
        var div = $('.items-select');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.items-select').removeClass('active');
        }
    });//клик вне селекта




    $('.sorter__item._price').click(function (event) {
        $(this).addClass('active');
        $('.sorter__item._reitings').removeClass('active');
    });

    $('.sorter__item._reitings').click(function (event) {
        $(this).addClass('active');
        $('.sorter__item._price').removeClass('active');
    });

    $('.filter__burger').click(function (event) {
        $(this).toggleClass('active');
        $('.catalog-choice__filter').slideToggle(300);
    });

    //_____CONTACTSPAGE_____
    $('.about-our-company__title').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(500);
    });

    //_________PROFIL-PAGE__________
    $('._p-header').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(400);
    });

    $('.popo').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(400);
    });

    $('.order-number').click(function (event) {//при клике на блок
        if (event.target.className == "order-number__header", "order-number__title", "order-number__marker") {//если клик был на
            $(this).toggleClass('active').children('.profil__wrapper').slideToggle(400);

        }
    });

    $('.profil-order__switch').click(function (event) {
        $('.profil-order__switch').removeClass('active');
        $(this).toggleClass('active');
    });


    $('.add-adres').click(function (event) {
        event.stopPropagation();
    });

    $('.order-number__remind').click(function (event) {
        event.stopPropagation();
    });

    $('.add-adres').click(function (event) {
        $('.popapp-add-adres').show();
        $('body').addClass('lock');
    });

    $('.profil-phone').mask('+7 (999) 999-99-99', {
        autoclear: false
    });

    $('.search-svg').on('click', function () {
        $('.profil-order__search-form').addClass('active');
        $('.profil-order__search-form').focus();
    });

    //_____FAVORITES__
    $('.heart-description1').click(function () {
        $(this).hide().next().show();
        if ($('.popular__heart1').hide()) {
            $('.about__favorites span').text('В избранном');
        }
    });
    $('.heart-description2').click(function () {
        $(this).hide().prev().show();
        if ($('.popular__heart1').show()) {
            $('.about__favorites span').text('В избранноe');
        }
    });


    /* $('.popular__heart1').click(function () {
        $(this).hide().next().show();
        if ($('.popular__heart1').hide()) {
            $('.about__favorites span').text('В избранном');
        }
    });
    $('.popular__heart2').click(function () {
        $(this).hide().prev().show();
        if ($('.popular__heart1').show()) {
            $('.about__favorites span').text('В избранноe');
        }
    }); */
    //_______BUSKET_________

    $('.heart1').click(function (event) {
        $(this).hide().next().show();
    });
    $('.heart2').click(function (event) {
        $(this).hide().prev().show();
    });


    //_____ORDERING________
    $.each($('.radiobuttons__item'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.radiobuttons__item', function (event) {
        $(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
        $(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    });

    $.each($('.point-data__items'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).children('.point-data__input').toggleClass('active');
        }
    });
    $(document).on('click', '.point-data__items', function (event) {
        $(this).parents('.point-data').find('.point-data__items, .point-data__input').removeClass('active');
        $(this).parents('.point-data').find('.point-data__items input').prop('checked', false);
        $(this).children('.point-data__input').toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    });

    $('.review-text').keydown(function () {
        var count = $(this).val().length;
        $(this).closest('.ordering__body-or').find('.counter').text(count);
    });
    $('.review-text').change(function () {
        var count = $(this).val().length;
        $(this).closest('.ordering__body-or').find('.counter').text(count);
    });

    $('.deliv1').click(function () {
        $('.ordering__body-adres, .choice-adres ').hide();
        $('._adres1').show();
        $('.ordering__footer').hide();
    });
    $('.deliv2').click(function () {
        $('.ordering__body-adres, ._adres1').hide();
        $('._adres2').show();
        $('.ordering__footer').show();
    });
    $('.deliv3').click(function () {
        $('.ordering__body-adres, .ordering__footer, .choice-adres ').hide();
        $('._adres3').show();
    });

    //_________________POP_UP_TITLE_PAGE_________
    $('.account__item_register').click(function () {
        $('.popup-register').show();
        $('.popup-autoriz').hide();
        $('body').addClass('lock');
        $('.reg-inp').css('background', '#f9fafc');
        $('.popup-register__error').hide();
    });
    $('.account__item_enter').click(function () {
        $('.popup-register').hide();
        $('.popup-autoriz').show();
        $('body').addClass('lock');
        $('.reg-inp').css('background', '#f9fafc');
        $('.popup-register__error').hide();
    });
    $('.account__items').click(function () {
        $('.popup-autoriz').show();
        $('body').addClass('lock');
    })

    $('.add-question').click(function () {
        $('.popup-question').show();
        $('body').addClass('lock');
    });

    $('.add-reviews').click(function () {
        $('.popup-reviews').show();
        $('body').addClass('lock');
    });

    $('.close-register__item, .popup-thx__button').click(function () {
        $('.popup-register, .popup-autoriz, .popapp-add-adres, .popup-question, .popup-reviews, .popup-quick, .popup-thx, .popup-del, .popup-pre-order, .popup-subscription, .popup-thx-order, popup-thx-profil').hide();
        $('body').removeClass('lock');
        $('.leave-reiting__value').text('4,8');
        $('.leave-reiting__item, leave-reiting__label').prop('checked', false);
        $('#reitings4').prop('checked', true);
    });

    $('._ur').click(function () {
        $(this).addClass('active').prev().removeClass('active');
        $('.popup-register__body').hide();
        $('.popup-register__body_ur').show();
        $('.reg-inp').css('background', '#f9fafc');
        $('.popup-register__error').hide();
    });

    $('._fz').click(function () {
        $(this).addClass('active').next().removeClass('active');
        $('.popup-register__body').show();
        $('.popup-register__body_ur').hide();
        $('.reg-inp').css('background', '#f9fafc');
        $('.popup-register__error').hide();
    });

    $('.eye-show, .eye-show2').click(function () {
        $(this).removeClass('active').next().toggleClass('active');
    });
    $('.eye-hide, .eye-hide2').click(function () {
        $(this).removeClass('active').prev().toggleClass('active');
    });

    $('body').on('click', '.eye-show', function () {
        if ($('.password-input').attr('type') == 'text') {
            $(this).removeClass('active');
            $('.password-input').attr('type', 'password');
        }
    });
    $('body').on('click', '.eye-hide', function () {
        if ($('.password-input').attr('type') == 'password') {
            $(this).removeClass('active');
            $('.password-input').attr('type', 'text');
        }
    });

    $('body').on('click', '.eye-show2', function () {
        if ($('.password-input2').attr('type') == 'text') {
            $(this).removeClass('active');
            $('.password-input2').attr('type', 'password');
        }
    });
    $('body').on('click', '.eye-hide2', function () {
        if ($('.password-input2').attr('type') == 'password') {
            $(this).removeClass('active');
            $('.password-input2').attr('type', 'text');
        }
    });

    $(function () {
        $(':submit').click(function (e) {
            $('.reg-inp').each(function () {
                if ($(this).val().length < 1) {
                    $(this).css('background', 'rgba(229, 78, 78, 0.06)');
                    $('.popup-register__error').show();
                    e.preventDefault();
                }
            });
        });
    });

    $('.reg-inp').focus(function () {
        $(this).css('background', '#f9fafc');
    });
    //-------------choice-adres---------
    $('.ordering__footer').click(function () {
        $(this).toggleClass('active').next().slideToggle();
    })

    $(document).on('click', '.choice-adres__items', function (e) {
        $('.choice-adres__items').removeClass('active');
        $(this).addClass('active');
        var name1 = $(this).children('.choice1').text();
        var name2 = $(this).children('.choice2').text();
        var name3 = $(this).children('.choice3').text();
        var name4 = $(this).children('.choice4').text();
        var name5 = $(this).children('.choice5').text();
        var name6 = $(this).children('.choice6').text();
        var name7 = $(this).children('.choice7').text();
        $("#region").val(name1);
        $("#city").val(name2);
        $("#street").val(name3);
        $("#house").val(name4);
        $("#frame").val(name5);
        $("#floor").val(name6);
        $("#apartment").val(name7);
    });

    $(document).on('click', '#reitings1', function (e) {
        $('.leave-reiting__value').text(1);
    });
    $(document).on('click', '#reitings2', function (e) {
        $('.leave-reiting__value').text(2);
    });
    $(document).on('click', '#reitings3', function (e) {
        $('.leave-reiting__value').text(3);
    });
    $(document).on('click', '#reitings4', function (e) {
        $('.leave-reiting__value').text(4);
    });
    $(document).on('click', '#reitings5', function (e) {
        $('.leave-reiting__value').text(5);
    });

    $('.popular__button2, .slider-rec__button2').click(function () {
        $('.popup-quick').show();
        $('body').addClass('lock');
    });
    $('.button-popup-quick').click(function () {
        $('.popup-thx').show();
        $('.popup-quick').hide();
    });

    $('.card-basket__close').click(function () {
        $('.popup-del').show();
        $('body').addClass('lock');
    });
    $('.popup-del__cancel').click(function () {
        $('.popup-del').hide();
        $('body').removeClass('lock');
    });

    $('.side-basket__button').click(function () {
        $('.popup-pre-order').show();
        $('body').addClass('lock');
    });

    $('.popup-pre-order__notice').click(function () {
        $('.popup-pre-order').hide();
        $('.popup-subscription').show();
    });

    $('.popup-pre-order__prepayment').click(function () {
        $('.popup-thx-order').show();
        $('.popup-pre-order').hide();
    });

    $('.save-data').click(function () {
        $('.popup-thx-profil').show();
        $('body').addClass('lock');
    });

    $('.side-basket__button-thx').click(function () {
        $('.popup-thx-order').show();
        $('body').addClass('lock');
    });

});

$(window).on('resize', function () {
    if ($(window).width() < 1020) {
        filterOut();
    }
});

var filterOut = function () {
    $(document).mouseup(function (e) {
        var div = $('.catalog-choice__filter, .filter__burger');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.catalog-choice__filter').slideUp(300);
            $('.filter__burger').removeClass('active');
        }

    });
}


$(window).on('resize', function () {
    if ($(window).width() < 1081) {
        inputHide();
    } else {
        inputShow();
    }
});

var inputHide = function () {
    $(document).ready(function () {
        $('.choice-adres__item').each(function () {
            if ($(this).text().length == '') {
                $(this).hide().prev().hide();
            }
        });
    });
}
var inputShow = function () {
    $(document).ready(function () {
        $('.choice-adres__item').each(function () {
            if ($(this).text().length == '') {
                $(this).show().show();
            }
        });
    });
}





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

var counts = document.querySelectorAll('.item-price__choice, .slider-rec__amt, .card-basket__amt');

counts.forEach(counterFunction);




new Swiper('.tradishon-swiper', {
    slidePerGroup: 1,
    loop: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.tradishon-next',
        prevEl: '.tradishon-prev',
    },
    pagination: {
        el: '.tradishon__dots',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass, zeroClass) {
            return '0<span class="' + currentClass + '"></span> ' +
                '<span class="' + zeroClass + '">/ 0</span>' +
                '<span class="' + totalClass + '"></span>';
        },
    },
    breakpoints: {
        545: {
            slidesPerView: 1.5,
        },
        240: {
            slidesPerView: 1,
        },
    },
});

new Swiper('.swiper-consist', {
    touchRatio: 0,
    navigation: {
        nextEl: '.consist__next',
        prevEl: '.consist__prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            watchOverFlow: true,
        },
        768: {
            slidesPerView: 1,
            watchOverFlow: false,
        },
        100: {
            slidesPerView: 1,
        },
    },
});

new Swiper('.swiper-characters', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.consist__next',
        prevEl: '.consist__prev',
    },
});

let elSwiper = new Swiper('.swiper-condition', {
    slidesPerView: 1,
    mode: 'horizontal',
    effect: 'fade',
    autoHeight: true,
    touchRatio: 0,
    fadeEffect: {
        crossFade: true,
    }
});
let pickUpSwiper = new Swiper('.swiper-pick-up', {
    slidesPerView: 1,
    effect: 'fade',
    touchRatio: 0,
    fadeEffect: {
        crossFade: true,
    }
});

$(document).ready(function () {
    $('.delivery-pay__item1').click(function (event) {
        $('.delivery-pay__item').removeClass('active');
        $(this).addClass('active');
        elSwiper.slideTo(0, 600);
    });
    $('.delivery-pay__item2').click(function (event) {
        $('.delivery-pay__item').removeClass('active');
        $(this).addClass('active');
        elSwiper.slideTo(1, 600);
    });
    $('.delivery-pay__item3').click(function (event) {
        $('.delivery-pay__item').removeClass('active');
        $(this).addClass('active');
        elSwiper.slideTo(2, 600);
    });
    $('.delivery-pay__item4').click(function (event) {
        $('.delivery-pay__item').removeClass('active');
        $(this).addClass('active');
        elSwiper.slideTo(3, 600);
    });
});
$(document).ready(function () {
    $('.pick1').click(function (event) {
        $('.pick-up__item').removeClass('active');
        $(this).addClass('active');
        pickUpSwiper.slideTo(0, 600);
    });
    $('.pick2').click(function (event) {
        $('.pick-up__item').removeClass('active');
        $(this).addClass('active');
        pickUpSwiper.slideTo(1, 600);
    });
    $('.pick3').click(function (event) {
        $('.pick-up__item').removeClass('active');
        $(this).addClass('active');
        pickUpSwiper.slideTo(2, 600);
    });
});

let ts = document.querySelector('.small-slider')
ts.append(...Array.from(ts.children).reverse());



let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active')
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};
select();







