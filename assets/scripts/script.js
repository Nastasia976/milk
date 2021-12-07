

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
        prevArrow: $('.mainPage-prev'),
        nextArrow: $('.mainPage-next'),
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
    $('.why-we-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.why-we-prev'),
        nextArrow: $('.why-we-next'),
        dots: true,
        dots: false,
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
                    variableHeight: true,
                    slidesToShow: 1,
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

    $('.sertif-block__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.sertif-block-prev'),
        nextArrow: $('.sertif-block-next'),
        responsive: [
            {
                breakpoint: 1501,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
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
        $('.delivery-slider, .why-we-slider').slick('slickGoTo', slideno - 1);
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
        /* if($('.filter__menu').hasClass('one')) {
            $('.filter__element').not($(this)).removeClass('active');
            $('.filter__submenu').not($(this).next()).slideUp(300);
        
        } */ // при нажатии на следующее подменю, текущее закрывается
        $(this).toggleClass('active').next().slideToggle(300);
    });


    $('.filter__section').click(function (event) {
        $(this).children('.filter__sub-submenu').slideToggle(300);
    });
    $('.checkbox, .false-input, .filter__sub-submenu__item').click(function (event) {
        event.stopPropagation();
    });

    $('.filter__clear').click(function (event) {
        $('.filter__element, filter__section').removeClass('active').next().slideUp(300);
        $('.false-input, .for-input').removeClass('active');
    });

    $('.filter__item').click(function (event) {
        $(this).toggleClass('active');
    });

    $('.false-input').click(function (event) {
        $(this).toggleClass('active').next('.for-input').toggleClass('active');
    });

    $('.select-catalog').click(function (event) {
        $('.items-select').toggleClass('active');
    });

    $(document).mouseup(function (e) {
        var div = $('.items-select');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.items-select').removeClass('active');
        }
    });
    $('.sorter__item._price').click(function (event) {
        $(this).addClass('active');
        $('.sorter__item._reitings').removeClass('active');
    });

    $('.sorter__item._reitings').click(function (event) {
        $(this).addClass('active');
        $('.sorter__item._price').removeClass('active');
    });

    $('.sorter__icon-row').click(function (event) {
        $(this).addClass('active');
        $('.sorter__icon-grid ').removeClass('active');
        $('.catalog-choice__body').addClass('active');
        $('.catalog-choice__catalog').addClass('active');
        $('.catalog-choice').addClass('active');
    });

    $('.sorter__icon-grid').click(function (event) {
        $(this).addClass('active');
        $('.sorter__icon-row').removeClass('active');
        $('.catalog-choice__body').removeClass('active');
        $('.catalog-choice__catalog').removeClass('active');
        $('.catalog-choice').removeClass('active');
    });

    $('.filter__burger').click(function (event) {
        $(this).toggleClass('active');
        $('.catalog-choice__filter').slideToggle(300);
    });
});

$(window).on('resize', function () {
    if ($(window).width() < 1450) {
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

$(document).ready(function () {
    function classFunction() {
        if ($('body').width() < 1071) {
            $('.catalog-choice, .catalog-choice__catalog, .catalog-choice__body, .sorter__icon-row').removeClass('active');
        }
    }

    classFunction();
    $(window).resize(classFunction);
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




new Swiper('.tradishon-swiper', {
    slidePerGroup: 1,
    loop: true,
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
            slidesPerView: 2,
            watchOverFlow: false,
        },
        100: {
            slidesPerView: 1,
        },
    },
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


/* let selectCatalog = function () {
    let selectCatalogHeader = document.querySelectorAll('.select-catalog__header');
    let selectCatalogItem = document.querySelectorAll('.select-catalog__item');

    selectCatalogHeader.forEach(selectCatalogitem => {
        selectCatalogitem.addEventListener('click', selectCatalogToggle)
    });

    selectCatalogItem.forEach(selectCatalogitem => {
        selectCatalogitem.addEventListener('click', selectCatalogChoose);
    });

    function selectCatalogToggle() {
        this.parentElement.classList.toggle('is-active')
    }

    function selectCatalogChoose() {
        let selectCatalogtext = this.innerText,
        selectCatalog = this.closest('.select-catalog'),
            currentText = selectCatalog.querySelector('.select-catalog__current');
        currentText.innerText = selectCatalogtext;
        selectCatalog.classList.remove('is-active');
    }


};


selectCatalog(); */





