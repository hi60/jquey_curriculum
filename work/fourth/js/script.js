'use strict';

$(function(){
    $('.menu__list').children('li').hover(
        function(){
            $(this).children('ul').stop().slideDown(500);
        },
        function(){
            $(this).children('ul').stop().slideUp(500);
        }
    );

});

// function(){
//     $(this).children('p').next().stop().slideDown(500);
// },
// function(){
//     $(this).children('p').next().stop().slideUp(500);
// これでもいける理由