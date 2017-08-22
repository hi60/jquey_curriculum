'use strict';

$(function(){
    $.ajax({
        url: './data.json'
    })
    .done(jsonRead);
    function jsonRead(data){
        data.colorsArray.forEach(function(item) {
            // console.log(item);
            $('.colorList').append(
                '<li class="colorList__item">' + 
                    '<p class="colorList__title" style="background-color:' + item.hexValue + ' ;">' + 
                        item.colorName + 
                    '</p>' + 
                '</li>'
            )
        });
    }
})