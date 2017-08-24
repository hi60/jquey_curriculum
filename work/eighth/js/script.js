'use strict';

$(function(){
    $(window).on('scroll', function(){
        var windowPosition = $(window).scrollTop();
        if(windowPosition > 100){
            $('.scrollTopBtn').fadeIn()
        } else {
            $('.scrollTopBtn').fadeOut()
        }
    });

    $('.scrollTopBtn').on('click', function() {
        $('body').animate({
            scrollTop: $('body').offset().top
        })
    });

    $('.menu__btn').on('click', function() {
        var scrollPlaceType = $(this).data('scroll-place-type');
        $('.title').each(function() {
            $('body').animate({
                scrollTop: $('.title[data-scroll-place-type=' + scrollPlaceType + ']').offset().top
            })
        });
    });
});