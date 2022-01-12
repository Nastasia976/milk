$(document).ready(function () {
    $('.swiper-product').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.swiper-product-prev'),
        nextArrow: $('.swiper-product-next'),
        autoplay: true,
        autoplaySpeed: 100,
        speed: 4000,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 2000,
                    speed: 2000,
                }
            }
        ]
    });
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.product-slider__prev'),
        nextArrow: $('.product-slider__next'),
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    $('.product-slider-see').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.product-slider-see__prev'),
        nextArrow: $('.product-slider-see__next'),
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    $('.progress-slider').slick({
        slidesToShow: 4,
        infinite: false,
        prevArrow: $('.progress-prev'),
        nextArrow: $('.progress-next'),
        responsive: [
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

    $('.sl1').slick({
        asNavFor: ".sl2, .sl3, .sl4",
        arrows: false,
        speed: 100,
        infinite: false,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            //FYI just have a look at the object to find aviable information
            //press f12 to access the console
            //you could also debug or look in the source
            return (i + 1) + ' из ' + slider.slideCount;
        },
        appendDots: '.compare__dots',
    })
    $('.sl2').slick({
        asNavFor: ".sl1, .sl3, .sl4",
        arrows: false,
        speed: 100,
        infinite: false,
    });
    $('.sl3').slick({
        asNavFor: ".sl2, .sl1, .sl4",
        arrows: false,
        speed: 100,
        infinite: false,
    });
    $('.sl4').slick({
        asNavFor: ".sl1, .sl2, .sl3",
        arrows: false,
        speed: 100,
        infinite: false,
    });


    $('.sl5').slick({
        asNavFor: ".sl6, .sl7, .sl8",
        arrows: false,
        speed: 100,
        infinite: false,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            //FYI just have a look at the object to find aviable information
            //press f12 to access the console
            //you could also debug or look in the source
            return (i + 1) + ' из ' + slider.slideCount;
        },
        appendDots: '.compare__dots2',
    })
    $('.sl6').slick({
        asNavFor: ".sl7, .sl8, .sl5",
        arrows: false,
        speed: 100,
        infinite: false,
    });
    $('.sl7').slick({
        asNavFor: ".sl8, .sl5, .sl6",
        arrows: false,
        speed: 100,
        infinite: false,
    });
    $('.sl8').slick({
        asNavFor: ".sl5, .sl6, .sl7",
        arrows: false,
        speed: 100,
        infinite: false,
    });

    $('.publication__slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.publication__prev'),
        nextArrow: $('.publication__next'),
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 945,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    $('.small-location').hover(
        function () {
            $('.location').css("opacity", "1");
            $(this).css("opacity", "0");
            $('.location-main').css("opacity", "1");
            $('.popup__title').html($(this).attr('location-data'));
            $('.popup').show();
        },
        function () {
        }
    );

    $('.location-main').hover(
        function () {
            $(this).css("opacity", "1");
            $('.location').css("opacity", "1");
            $('.popup').hide();
        },
        function () {
            $(this).css("opacity", "0");
            $('.location').css("opacity", "0");
        }
    );


    $('.school').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '150px',
                'left': '550px'
            });
        }
    });
    $('.hospital').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '40px',
                'left': '565px'
            });
        }
    });
    $('.azs').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '60px',
                'left': '250px'
            });
        }
    });
    $('.autoservise').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '240px',
                'left': '305px'
            });
        }
    });
    $('.hotel').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '175px',
                'left': '280px'
            });
        }
    });
    $('.restaurant').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '190px',
                'left': '325px'
            });
        }
    });
    $('.shop').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '270px',
                'left': '440px'
            });
        }
    });
    $('.office').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '320px',
                'left': '530px'
            });
        }
    });
    $('.bakery').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '380px',
                'left': '600px'
            });
        }
    });
    $('.delivery').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '210px',
                'left': '420px'
            });
        }
    });
    $('.clining').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '220px',
                'left': '430px'
            });
        }
    });
    $('.fabrica').on({
        mouseenter: function () {
            $('.popup').css({
                'top': '180px',
                'left': '500px'
            });
        }
    });
    $('._icon-search').on('click', function () {
        $('.search-form__input').focus();
    });

    $('.header__burger').click(function () {
        $(this).toggleClass('active');
        $('.burger-menu, .burger__conteiner, .burger').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('#1catalog-menu').click(function () {
        $('.catalog-menu').toggleClass('active');
        $('body').addClass('passive');
    });
    $('.body-catalog__close').click(function () {
        $('.catalog-menu').removeClass('active');
        $('body').removeClass('passive');
    });

    $('._catalog').click(function (e) {
        $(this).toggleClass('active');
        $('._hide-footer-list').slideToggle(300)

    }); //каталог в футере

    $('.heart-out').click(function (e) {
        $(this).hide().prev().show();
    });
    $('.heart-in').click(function (e) {
        $(this).hide().next().show();
    }); //сердечко в карточках

    $('.choice-about__item').click(function () {
        $('.choice-about__item').removeClass('active');
        $(this).toggleClass('active');
    }) //описание, характеристики, сертификат

    $('.packing__item').click(function () {
        $('.packing__item').removeClass('active');
        $(this).toggleClass('active');
    })
    $('.packing-product__item').click(function () {
        $('.packing-product__item').removeClass('active');
        $(this).toggleClass('active');
    })//фасовка


    $('.select__item, .select__el').click(function (event) {
        $('.select__item, .select__el').removeClass('active');
        $(this).toggleClass('active');
        $('.select__icon').removeClass('active');
    });

    $('.select__header').click(function () {
        $(this).parent().find('.select__icon').toggleClass('active');
        /*  $(this).parent().toggleClass('is-active'); */
    });

    $('._phone').mask('+7 (999) 999-99-99', {
        autoclear: false
    });
    $('._phone2').mask('+7 999 999-99-99', {
        autoclear: false
    });

    $('.button-request').click(function (event) {
        $('.popup-request').toggleClass('active');
        $('body').addClass('passive');
    })

    $('.popup__close, .will-aut, .will-reg, .send-response').click(function (event) {
        $('.popup-request, .popup-reg, .popup-reg2, .popup-reg3, .popup-autoriz, .popup-forgot').removeClass('active');
        $('body').removeClass('passive');
    })

    $('.form-write__button').click(function (event) {
        $('.send-message').toggleClass('active');
        $('body').addClass('passive');
    })
    $('.popups__close').click(function (event) {
        $('.popups').removeClass('active');
        $('body').removeClass('passive');
    })

    $('.will-reg, .user-reg').click(function () {
        $('.popup-reg').toggleClass('active');
        $('body').addClass('passive');
    })

    $('.button-next').click(function () {
        $('.popup-reg').removeClass('active');
        $('.popup-reg2').toggleClass('active');
    })
    $('.button-next2').click(function () {
        $('.popup-reg2').removeClass('active');
        $('.popup-reg3').toggleClass('active');
    })
    $('.button-reg').click(function () {
        $('.popup-reg3').removeClass('active');
        $('.popups-reg').toggleClass('active');
    })

    $('.header-exit, .will-aut, .user-exit').click(function () {
        $('.popup-autoriz').toggleClass('active');
        $('body').addClass('passive');
    })
    $('.popup__forget').click(function () {
        $('.popup-autoriz').removeClass('active');
        $('.popup-forgot').toggleClass('active');
    })

    $('.prev-popup').click(function () {
        $('.popup-autoriz').toggleClass('active');
        $('.popup-forgot').removeClass('active');
    })

    $('.button-restore').click(function () {
        $('.check-your-email').toggleClass('active');
        $('.popup-forgot').removeClass('active');
    })

    $('.button-accept').click(function () {
        $('.popup-cooki').removeClass('active');
    })

    $('.header__element-basket').click(function () {
        $('.add-basket').toggleClass('active');
    });

    $('.add-basket__add').click(function () {
        $('.add-basket').removeClass('active');
        $('.create-basket').toggleClass('active');
        $('body').addClass('passive');
    })
    $('.add-basket__close').click(function () {
        $('.add-basket').removeClass('active');
    });

    $('.button-cancel ').click(function () {
        $('.filter-catalog__item, .control__item').removeClass('active');
        $('.filter-catalog__item input, .control__item input').attr('checked', false);
    })

    $('.filter-click').click(function () {
        $('.filter-catalog2, .sidebar-p-catalog2').slideToggle();
    })
    $('.fav').click(function () {
        $(this).toggleClass('active');
    });

    $('.request').click(function () {
        $('.popup-request').toggleClass('active');
    });

    $('._ok').click(function () {
        $('.popups').removeClass('active');
        $('body').removeClass('passive');
    })
    //-------results-search---

    $('.sidebar-p-catalog__more').click(function () {
        $(this).hide().next().show();
        $(this).parent().find('.sidebar-p-catalog__link._last ~ .sidebar-p-catalog__link').slideToggle(500);
    })

    $('.roll-up').click(function () {
        $(this).hide().prev().show();
        $(this).parent().find('.sidebar-p-catalog__link._last ~ .sidebar-p-catalog__link').slideToggle(500);
    })

    $('.sidebar-p-catalog__items').each(function () {
        let a = parseInt($('.sidebar-p-catalog__items').children('.how-mach').text());
        let b = parseInt($('.sidebar-p-catalog__items').children('.hm').text());
        let c = a - b;
        $('.sidebar-p-catalog__items').children('.balance').text(c);
    });


    $('.el').hover(
        function () {
            $(this).toggleClass('active');
        },
        function () {
            $(this).removeClass('active');
        }
    );
    $('.el1').hover(
        function () {
            $('.elem1').toggleClass('active');
        },
        function () {
            $('.elem1').removeClass('active');
        }
    );
    $('.el2').hover(
        function () {
            $('.elem2').toggleClass('active');
        },
        function () {
            $('.elem2').removeClass('active');
        }
    );
    $('.el3').hover(
        function () {
            $('.elem3').toggleClass('active');
        },
        function () {
            $('.elem3').removeClass('active');
        }
    );
    $('.el4').hover(
        function () {
            $('.elem4').toggleClass('active');
        },
        function () {
            $('.elem4').removeClass('active');
        }
    );
    $('.el5').hover(
        function () {
            $('.elem5').toggleClass('active');
        },
        function () {
            $('.elem5').removeClass('active');
        }
    );
    $('.el6').hover(
        function () {
            $('.elem6').toggleClass('active');
        },
        function () {
            $('.elem6').removeClass('active');
        }
    );
    $('.el7').hover(
        function () {
            $('.elem7').toggleClass('active');
        },
        function () {
            $('.elem7').removeClass('active');
        }
    );
    $('.el8').hover(
        function () {
            $('.elem8').toggleClass('active');
        },
        function () {
            $('.elem8').removeClass('active');
        }
    );
    $('.el9').hover(
        function () {
            $('.elem9').toggleClass('active');
        },
        function () {
            $('.elem9').removeClass('active');
        }
    );
    $('.spoiler-mobile__item').click(function (event) {
        if ($('.footer-mobile').hasClass('mobile')) {
            $('.spoiler-mobile__item').not($(this)).removeClass('active');
            $('.spoiler-mobile__body').not($(this).next()).slideUp(300);

        } // при нажатии на следующее подменю, текущее закрывается
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $('.spoiler-mobile__link').click(function () {
        $('.spoiler-mobile__item').removeClass('active');
        $('.spoiler-mobile__body').not($(this).next()).slideUp(300);
    });

    $('.footer-mobile__map').click(function () {
        $('.our-adres').toggleClass('active');
        $('body').addClass('passive');
    });
    $('.popups__close_x').click(function () {
        $('.our-adres').removeClass('active');
        $('body').removeClass('passive');
    });
    $(document).mouseup(function (e) {
        var div = $('.our-adres');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.our-adres').removeClass('active');
            $('body').removeClass('passive');
        }
    });

    $('.control__button').click(function () {
        $('.delit-list').addClass('active');
    });
    $('.title-char').click(function () {
        $(this).toggleClass('active').next().slideToggle();
        $('.sl2').slick('reinit');
        $('.sl6').slick('reinit');
    });
    $('.title-advantage').click(function () {
        $(this).toggleClass('active').next().slideToggle();
        $('.sl3').slick('reinit');
        $('.sl7').slick('reinit');
    });
});




$(document).on('click', '.popup__check', function (event) {
    if ($('.remember-me').hasClass('active')) {
        $(this).find('input').attr('checked', false);
        $('.remember-me').removeClass('active');
    } else {
        $(this).find('input').attr('checked', true);
        $('.remember-me').toggleClass('active');
    }
    return false;
});//чекбокс в попапе авторизация

$(document).on('click', '.filter-catalog__item, .control__item, .sidebar-lk__item', function (event) {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active').find('input').attr('checked', false);
    } else {
        $(this).toggleClass('active').find('input').attr('checked', true);
    }
    return false;
});//чекбоксы в каталоге



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


setTimeout(() => { $('.popup-cooki').addClass('active') }, 5000);
setTimeout(() => { $('.multy-basket').addClass('active') }, 1500);

/* $(document).click(function (e) {
    var div = $('.burger, .burger-menu, .header__burger');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.burger, .header__burger, .burger-menu, .burger__conteiner').removeClass('active');
        $('body').removeClass('lock');
    }
}); */

/* $(document).mouseup(function (e) {
    var div = $('.popups__conteiner');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.popups').removeClass('active');
        $('body').removeClass('passive');
    }
}); */
let myMainBtn = document.querySelector('.main-button')
let mySliderTitle = new Swiper('.slider-title', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 300,
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

/* myMainBtn.addEventListener('mouseenter', function () {
    console.log('ok');
    mySliderTitle.autoplay.stop();
});
myMainBtn.addEventListener('mouseleave', function () {
    mySliderTitle.params.autoplay.delay = 5000;
    mySliderTitle.autoplay.start();
}); */

/* window.onresize = function(event)
{
document.location.reload(true);
} */

new Swiper('.swiper-progress', {
    slidesPerView: 2,
    spaceBetween: 7,
    navigation: {
        nextEl: '.progress-next',
        prevEl: '.progress-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 7,
        },
        620: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});


new Swiper('.small-swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.small-swiper__dots',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        200: {
            direction: 'horizontal',
        },
        768: {
            direction: 'vertical',
        },
    },
});

let myFirst = new Swiper('.slider', {
    simulateTouch: false,
    touchRatio: 0,
    freeMode: true,
    spaceBetween: 24,
    whatchOverflow: true,
    navigation: {
        nextEl: '.slider-compare__arrow-next',
        prevEl: '.slider-compare__arrow-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        980: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        200: {
            slidesPerView: 1,
            spaceBetween: 10,
            simulateTouch: true,
            touchRatio: 1,
        }
    },
});

new Swiper('.blog-swiper', {
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    mousewheel: true,
    navigation: {
        nextEl: '.top-block__arrow',
    },
});

var sliderIndex = 8;
let myShaddow = document.querySelector('.scrollbar__shaddow');
let mySlideScroll = document.querySelector('._last-slide');
let myArN = document.querySelector('.scrollbar__next');

let myScroll = new Swiper('.scrollbar', {
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    mousewheel: true,
    navigation: {
        nextEl: '.scrollbar__next',
        prevEl: '.scrollbar__prev'
    },
});

myScroll.on('reachEnd', function () { //когда слайдер коснется последнего слайда
    myShaddow.style.display = 'none';
});
myScroll.on('fromEdge', function () { //когда слайдер уйдет от последнего или первого слайда
    myShaddow.style.display = 'block';

});


/* $(document).ready(function () {
    $('.scrollbar').scroll(function(){
        if($('.scrollbar__next').hasClass('swiper-button-disabled')){
            $('.scrollbar__shaddow').hide();
        }else{
            $('.scrollbar__shaddow').show();
        }
    })
}); */




/* $("body").on('click', '[href="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
}); *///скролл до нужного блока

$("body").on('click', '[href="#progress-block"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

$("body").on('click', '[href="#description"], [href="#characters"], [href="#sertificates"], [href="#duties"], [href="#our-wishes"], [href="#we-offer"], [href="#weoffer"], [href="#expert"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

$(window).on('resize', function () {
    if ($(window).width() < 521) {
        $("body").on('click', '[href*="#description"], [href*="#characters"], [href*="#sertificates"]', function (e) {
            var fixed_offset = 15;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
            e.preventDefault();
        });
    }
});
$(window).on('resize', function () {
    if ($(window).width() < 521) {
        $("body").on('click', '[href*="#weoffer"], [href*="#expert"]', function (e) {
            var fixed_offset = 0;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
            e.preventDefault();
        });
    }
});

$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if (scrolled > 1) {
        $('.header').addClass('scrolled');
        $('.podlozhka').addClass('active');
    }
    if (scrolled <= 1) {
        $('.header').removeClass('scrolled');
        $('.podlozhka').removeClass('active');
    }
    if (scrolled > 600) {
        $('.fixed__conteiner, .slider-compare__arrow').addClass('active');
    } else {
        $('.fixed__conteiner, .slider-compare__arrow').removeClass('active');
    }
});//шапка становится фиксированной

$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if (scrolled > 620) {
        $('.fixed__conteiners2, .fixed__conteiners, .compare__dots, .compare__dots2').addClass('active');
    } else {
        $('.fixed__conteiners2, .fixed__conteiners, .compare__dots, .compare__dots2').removeClass('active');
    }
});


/* let sliderBlock = document.querySelector('.slider-title__slide');
let mySlider = document.querySelector('.slider-title');
 
sliderBlock.addEventListener("mouseenter", function (e) {
    mySlider.params.autoplay.disableOnInteraction = false;
    mySlider.params.autoplay.delay = 500;
    mySlider.autoplay.start();
});
 
sliderBlock.addEventListener("mouseleave", function (e) {
    mySlider.autoplay.stop();
}) */   //попробовать сделать остановку слайдера при наведении мыши


function isInView(elem) {
    return $('._last').offset().left - $('.scrollbar__body').scrollLeft() < $(elem).width(); //последний элемент в прокручиваемом блоке
}
$('.scrollbar__body').scroll(function () {
    if (isInView($('._last'))) {
        $('.scrollbar__next, .scrollbar__shaddow').hide();
    } else {
        $('.scrollbar__next, .scrollbar__shaddow').show();
    }
    //fire whatever you what 
})

//функция вывода названия прикрепленного файла, если файлов больше чем 1 - выводится количество
function readyInputFile() {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {
            console.log(this.files);
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length++);
            else
                fileName = this.files[0].name;
            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });
};
document.addEventListener("DOMContentLoaded", readyInputFile);



function counterFunction(count) {

    var plus = count.querySelector('._plus');
    var minus = count.querySelector('._minus');
    var number = count.querySelector('.amount__numbers');
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

var counts = document.querySelectorAll('.amount');

counts.forEach(counterFunction);





$(document).mouseup(function (e) {
    var div = $('.select, .item-select');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.select, .item-select').removeClass('is-active');
        $('.select__icon').removeClass('active');
    }
});


let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item, .select__el');

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
            select = this.closest('.select, .item-select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};
select();


$(document).ready(function () {
    $('#review-text').keyup(function () {
        $('#counter').text(this.value.length++);
    });
    $('.placeholder-textarea, textarea').click(function () {
        $('.textarea').addClass('active');
        $('.ready-textarea').show();
        $('.current-text').show();
        $('.placeholder-textarea').hide();
        $('textarea').focus();
    });
    $('.review-text').focus(function () {
        $('.textarea').addClass('active');
        $('.ready-textarea').show();
        $('.current-text').show();
        $('.placeholder-textarea').hide();
        $('textarea').focus();
    })
    $('.member-input').focus(function () {
        $(this).toggleClass('active');
    })
    $('.member-input').focusout(function () {
        $(this).removeClass('active');
    })

    $('.review-text').focusout(function () {
        $('.ready-textarea').hide().next().hide();
        $('.textarea').removeClass('active');
        $('.placeholder-textarea').show();
        $('.placeholder-textarea').removeClass('scale')
        if ($('#review-text').val().length > 0) {
            $('.placeholder-textarea').addClass('scale');
            $('.textarea').removeClass('active');
        }
    })
    $('.ready-textarea').click(function () {
        $(this).hide().next().hide();
        $('.textarea').removeClass('active');
        $('.placeholder-textarea').show();
        $('.placeholder-textarea').removeClass('scale')
        if ($('#review-text').val().length > 0) {
            $('.placeholder-textarea').addClass('scale');
            $('.textarea').removeClass('active');
        }
    });
});

//==============delivery-page=============
$(document).ready(function () {
    $('.delyvery-page__header').click(function () {
        $(this).toggleClass('active').next().slideToggle();
    });
});

//-----activities-------

$(document).ready(function () {
    $('.activities__item').click(function () {
        $('.kind').toggleClass('active');
        $('body').addClass('passive');
    });
});

//--------tov-matrix---------
$(document).ready(function () {
    $('.in-tov-matrix').click(function () {
        $('.editing-matrix').toggleClass('active');
        $('body').addClass('passive');
    });
    $('.filter-matrix__button').click(function () {
        $('.extend-matrix').toggleClass('active');
        $('body').addClass('passive');
    });
});
//-------baskets--------
$(document).ready(function () {
    $('.baskets__to-clear').click(function () {
        $('.delit-all-product').toggleClass('active');
        $('body').addClass('passive');
    });

    $('.comment-basket__button').click(function () {
        $('.order-sent').toggleClass('active');
        $('body').addClass('passive');
    });
});

//--------lk-----------
$(document).ready(function () {
    $('.agreed-tab').click(function () {
        $('.body-lk__tab').removeClass('active');
        $('.body-lk__body').removeClass('active');
        $('.agreed-orders').addClass('active');
        $(this).addClass('active');
        var textContent = $(this).text();
        $('.order-status').text(textContent);
    });
    $('.inconsistent-tab').click(function () {
        $('.body-lk__tab').removeClass('active');
        $('.body-lk__body').removeClass('active');
        $('.inconsistent-orders').addClass('active');
        $(this).addClass('active');
        var textContent = $(this).text();
        $('.order-status').text(textContent);
    });
    $('.orders-tab').click(function () {
        $('.body-lk__tab').removeClass('active');
        $('.body-lk__body').removeClass('active');
        $('.orders-pending').addClass('active');
        $(this).addClass('active');
        var textContent = $(this).text();
        $('.order-status').text(textContent);
    });

    $('.claim, .submitaclaim, .sidebar-lk__link_claim').click(function () {
        $('.registration-claim').toggleClass('active');
        $('body').addClass('passive');
    });

    $('.sidebar-lk__el').click(function () {
        $('.sub-menu-lk').slideToggle();
        $('.arrow-lk').toggleClass('active');
    });

    $('._edit').click(function () {
        $('.lk_add-adres').show();
    })
    $('.order-tab').click(function(){
        $('.order-tab').removeClass('active');
        $(this).toggleClass('active')
        $('.personal-data-wrapper').removeClass('active');
    });

    $('#personal-data-tab').click(function (){
        $('#personal-data').toggleClass('active');
    });
    $('#order-tab').click(function (){
        $('#orders').toggleClass('active');
    });
    $('#quick-order-tab').click(function (){
        $('#quick-order').toggleClass('active');
    });
    $('#delivery-address-tab').click(function (){
        $('#delivery-address').toggleClass('active');
    });

});


