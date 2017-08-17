'use strict';

$(function(){
    $('.select').change(
        function(){
            var getValue = $('.select').val();
            $('.list').children('li').each(
                function(){
                    var getData = $(this).data('category-type'); //thisで通って、.list > li だと'css'が９個吐き出されたこれいかに
                    if ( getValue === 'all' ){
                        $('.list').children().show();
                    } else if ( getValue !== getData) {
                        $(this).hide();
                    } else {
                        $(this).show();
                    }
                }
            )
        }
    )
});