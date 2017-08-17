'use strict';

$(function(){
    $('.nav').find('li').click(
        function(){
            var getList = $(this).index();
            $('.contents').find('li').addClass('is-hidden');
            $('.contents').find('li').eq(getList).removeClass('is-hidden');
        }
    );

});