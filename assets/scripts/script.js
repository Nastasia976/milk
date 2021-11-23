$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger').toggleClass('active');
        $('.burg-menu.active').removeClass('active');
        $('.header__link-open').removeClass('active');
        $('.burg-menu').slideUp(500);
        $('.header__submenu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.head-link').removeClass('active');
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
                },
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
            },
        ]
    });
    $('.production-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite:false,
        arrows:true,
        prevArrow: $('.production-page-prev'),
        nextArrow: $('.production-page-next'),
        dots: true,
        appendDots: $('.production-page__dots'),
        responsive: [
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 1.3,
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
        waitForAnimate: false,
    });

    $('.categories-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.categories-prev'),
        nextArrow: $('.categories-next'),
        waitForAnimate: false,
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

    $('.popular__heart1').click(function() {
          $(this).toggleClass('passive');
        });

});

function counterFunction(count) {

    var plus = count.querySelector('._plus');
    var minus = count.querySelector('._minus');
    var number = count.querySelector('.item-price__numbers');
    var numberValue = parseFloat(number.value, 10);
  
    minus.addEventListener('click', function() {
  
      if (numberValue === 1) {
        return;
      };
  
      numberValue--;
      number.value = numberValue;
    });
  
    plus.addEventListener('click', function() {
      numberValue++;
      number.value = numberValue;
    });
  
  }
  
  var counts = document.querySelectorAll('.item-price__choice');
  
  counts.forEach(counterFunction);
