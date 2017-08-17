'use strict';

$(function(){
    $('.modal-show').click(
        function(){
            $('.modal').fadeIn('slow');
        }
    )
    $('.modal-close').click(
        function(){
            $('.modal').fadeOut('slow');
        }
    )

});