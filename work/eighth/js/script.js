'use strict';

$(function(){
    $(window).scroll(
        function(){
            var windowPosition = $(window).scrollTop();
            if(windowPosition > 100){
                $('.scrollTopBtn').fadeIn()
            } else {
                $('.scrollTopBtn').fadeOut()
            }
        }
    );

    $('.scrollTopBtn').click(
        function(){
            $('body').animate({
                scrollTop: $('body').offset().top
            })
        }
    );

    $('.menu__btn').click(
        function(){
            var scrollPlaceType = $(this).data('scroll-place-type');
            if(scrollPlaceType === 'home'){
                $('body').animate({
                    scrollTop: $('.title[data-scroll-place-type="home"]').offset().top
                })
            } else if(scrollPlaceType === 'news'){
                $('body').animate({
                    scrollTop: $('.title[data-scroll-place-type="news"]').offset().top
                })
            } else if(scrollPlaceType === 'about'){
                $('body').animate({
                    scrollTop: $('.title[data-scroll-place-type="about"]').offset().top
                })
            }
        }
    );

});