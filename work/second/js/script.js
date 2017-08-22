'use strict';

$(function(){
    $('.modal-show').on('click', function(){
        $('.modal').fadeIn('slow');
    });
    $('.modal-close').on('click', function(){
        $('.modal').fadeOut('slow');
    });

});