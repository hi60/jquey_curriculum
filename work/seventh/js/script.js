'use strict';

$(function(){
    var slideWidth = $('.slider-list').children('li').width();
    var slideCount = $('.slider-list').children('li').length;
    var sliderAreaWidth = slideWidth * slideCount;
    $('slider-list').css('width', sliderAreaWidth);

    var slideLocation = 0;

    function slideMove(){
        if(slideLocation < 0){
            slideLocation = slideCount - 1;
        } else if(slideLocation > slideCount - 1){
            slideLocation = 0;
        }
        $('.slider-list').animate({
            left: slideLocation * -slideWidth
        });
    }

    $('button').on('click', function(){
        var dataType = $(this).data('ctrl');
        if (dataType === 'prev'){
            slideLocation--;
        } else {
            slideLocation++;
        }
        slideMove();
    });
});