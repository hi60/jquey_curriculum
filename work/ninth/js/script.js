'use strict';

$(function(){
    $.ajax({
        url: './data.json'
    })
    .done(function(data){
        var insert = jsonRead(data);
        $('.colorList').html(insert);
    });

    function jsonRead(data){
        var text = '';
        var color = '';
        var dataArray = data.colorsArray;
        for(var i in dataArray){
            text = text + dataArray[i].colorName;
            color = color + dataArray[i].hexValue;
            text = '<li><p>' + text + '</p></li>';
        }
        return text;
    }
})

// text = '<li class="colorList__item"><p class=colorList__titile style="background-color:' + color + ' ;">' + text + '</p></li>';