'use strict';

$(function(){
    $('#q1').css('color', 'red');
    
    $('#q2').on('click', function() {
        $(this).css('background', 'pink');
    });

    $('#q3').on('click', function() {
        $(this).fadeOut(2000);
    });

    $('#q4').on('click', function() {
        $(this).prepend('foward')
               .append('back')
               .before('forwardOut')
               .after('backOut');
    });

    $('#q5').on('click', function() {
        $(this).toggleClass('large');
    });

    $('#q6').on('click', function() {
        $(this).animate({
            'margin-top': '100px',
            'margin-left': '100px'
        }, 2000);
    });

    $('#q7').find('li').on('click', function() {
            console.log($(this).index());
            alert($(this).index());
    });

    $('#q8').hover(function() {
        $(this).addClass('large');
    },
    function() {
        $(this).removeClass('large');
    });

    $('#q9').on('click', function() {
        console.log($(this).data('text'));
    });

    $('#q10').find('li').on('click', function() {
        var listIndex = $('#q10').find('li').index(this);
        $('#q11').find('li').eq(listIndex).addClass('large');
    });

});