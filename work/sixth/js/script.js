'use strict';

$(function(){
    $('.input').keyup(
        function(){
            var textCount = $(this).val().replace(/\s+/g,'').length;
            var restCount = 30 - textCount;
            $('.rest-count').html(restCount);
            if (restCount <= -1){
                $('.rest-count').addClass('red');
            } else {
                $('.rest-count').removeClass('red');
            }
        }
    )
});

// restCount -= textCount
// としてrestCountをコンソールに表示したら正常値が出たが、
// $('.rest-count').html(restCount);だと値が累乗された様に減っていった。何故。。。