$(function() {
    $('.burger').on('click', function() {
        $(this).toggleClass('active')
        $('.header__right').toggleClass('active')
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
    $(window).scroll(function() {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 1) {
            $('.header').addClass('sroll')
        } else {
            $('.header').removeClass('sroll')
        }
    });
})