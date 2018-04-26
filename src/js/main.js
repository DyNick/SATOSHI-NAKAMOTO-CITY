$(document).ready(function(){
    AOS.init({
        startEvent: 'load',
    });
});



$(window).on('scroll',function() {
    if ($('#diagram').length !== 0) {
        if (checkVisible($('#diagram'))) {
            document.getElementById('diagram').play();
            $(window).off('scroll');
        }
    }
});


function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height() - 200, // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") {
        return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    }
    if (eval == "above") {
        return ((y < (viewportHeight + scrolltop)));
    }
}

if ($('#diagram').length !== 0) {
    if (checkVisible($('#diagram'))) {
        document.getElementById('diagram').play();
        $(window).off('scroll');
    }
}
$(document).ready(function(){

    $('.menu__Btn').click(function(){
        $('.navigation__popup').addClass('active')
    });

    $('.close-button').click(function(){
        $('.navigation__popup').removeClass('active')
    });


    $(".navigation__popup__list__item").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 100
        });
        $('.navigation__popup').removeClass('active');
    });


    $(".header__selectedLang").click(function() {
        $(".header__langList").toggleClass("header__langList_show");
        $(".header__socialsList").removeClass("header__socialsList_show");
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".header__selectedLang"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(".header__langList").removeClass("header__langList_show");
        }
    });

    $(".header__shareBtn").click(function() {
        $(".header__socialsList").toggleClass("header__socialsList_show");
        $(".header__langList").removeClass("header__langList_show");
    });







});
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".header__shareBtn"); // тут указываем ID элемента
    if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".header__socialsList").removeClass("header__socialsList_show");
    }
});