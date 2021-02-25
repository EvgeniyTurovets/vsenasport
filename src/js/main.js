$(function() {
    // бургер
    $('.burger').on('click', function() {
        $(this).toggleClass('active')
        $('.header__right').toggleClass('active')
        $('.header').addClass('sroll')
    })
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".header"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.burger').removeClass('active')
            $('.header__right').removeClass('active')
        }
    });

    // шапка
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass('sroll')
        } else {
            $('.header').removeClass('sroll')
        }
    });

    // капча
    if ($('.g-recaptcha').length > 0) {
        let captcha = grecaptcha.getResponse();
    }
    // cлайдер
    if ($('.soob-slider__wrap').length > 0) {
        $('.soob-slider__wrap').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
        })


        $('.soob-slider__btn--next').on('click', function() {
            $('.soob-slider__wrap').slick('slickNext');
        })
        $('.soob-slider__btn--prev').on('click', function() {
            $('.soob-slider__wrap').slick('slickPrev');
        })
    }

    // виджет
    $('.soob1__item .soob1__item__link').on('click', function(e) {
        e.preventDefault()

        let attr = $(this).attr('href')
        console.log($(attr))
        $('body').addClass('hidden')
        $(attr).fadeIn()
    })
    $('.vidget').mouseup(function(e) { // событие клика по веб-документу
        var div = $(".vidget__wrap"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.vidget').fadeOut()
            $('body').removeClass('hidden')
        }
    });
    $('.vidget .close').on('click', function() {
        $('.vidget').fadeOut()
        $('body').removeClass('hidden')
    })

    // акордион
    if ($('.b-faq').length > 0) {

        $(".js-faq-title").on("click", function(e) {

            e.preventDefault();
            var $this = $(this);

            if (!$this.hasClass("faq__active")) {
                $(".js-faq-content").slideUp(800);
                $(".js-faq-title").removeClass("faq__active");
                $('.js-faq-rotate').removeClass('faq__rotate');
            }

            $this.toggleClass("faq__active");
            $this.next().slideToggle();
            $('.js-faq-rotate', this).toggleClass('faq__rotate');
        });

    }


})