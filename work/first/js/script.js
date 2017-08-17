'use strict';

$(function(){
    $('#q1').css('color', 'red');
    
    $('#q2').click(
        function(){
            $('#q2').css('background', 'pink');
        }
    );

    $('#q3').click(
        function(){
            $('#q3').fadeOut(2000);
        }
    );

    $('#q4').click(
        function(){
            $('#q4').prepend('foward')
                    .append('back')
                    .before('forwardOut')
                    .after('backOut');
        }
    );

    $('#q5').click(
        function(){
            $('q5').toggleClass('large');
        }
    );

    $('#q6').click(
        function(){
            $('#q6').animate({
                'margin-top': '100px',
                'margin-left': '100px'
            }, 2000);
        }
    );

    $('#q7 > li').click(
        function(){
            console.log($('#q7 > li').index(this));alert($('#q7 > li').index(this));
        }
    );

    $('#q8').hover(
        function(){$('#q8').addClass('large');},
        function(){$('#q8').removeClass('large');}
    );

    $('#q9').click(
        function(){
            console.log($(this).data('text'));
        }
    );

    $('#q10 > li').click(
        function(){
            var listIndex = $('#q10 > li').index(this);
            $('#q11 > li').eq(listIndex).addClass('large');
        }
    );

    // $('#q10 > li').each(function(index, Element){
    //     $(this).click(
    //         function(){
    //             $('#q11 > li').addClass('large');
    //         }
    //     )
    // });

});