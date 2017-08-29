$(function() {
    'use strict';

    $('button').on('click', function(){
        var searchWord = $('input').val();
        searchBooks(searchWord);
    });

    function searchBooks(searchWord) {
        $.ajax({
            url: 'https://app.rakuten.co.jp/services/api/BooksTotal/Search/20130522',
            type: 'GET',
            datatype: 'json',
            data: {
              // 「区分:サービス固有パラメーター」を確認して、必要な情報をdata内に入れましょう。
              applicationId: '1019399324990976605', // (今回はこのIDを使用してください)
              booksGenreId: '001',
              hits: 20,
              page: 1,
              keyword: searchWord
            },
        }).done(function(data) {
            // console.log(data);
            $('.lists').empty();
            $('.message').remove();
            // console.log(data.Items);
            if (data.Items.length === 0) {
                $('.container').append(
                    '<div class="message">' +
                        '<p>検索結果が見つかりませんでした。</p>' +
                        '<p>別のキーワードで検索して下さい。</p>' +
                    '</div>'
                )
            } else {
                data.Items.forEach(function(item) {
                    $('.lists').append(
                        "<li class='lists__item'>" +
                            "<div class='lists__item__inner'>" +
                                "<a href='" + item.Item.itemUrl + "' class='lists__item__link' target='_blank'>" +
                                    "<img src='" + item.Item.largeImageUrl + "' class='lists__item__img' alt=''>" +
                                    "<p class='lists__item__detail'>作品名：" + item.Item.title + "</p>" +
                                    "<p class='lists__item__detail'>作者　：" + item.Item.author + "</p>" +
                                    "<p class='lists__item__detail'>出版社：" + item.Item.publisherName + "</p>" +
                                "</a>" +
                            "</div>" +
                        "</li>"
                    )
                });
            }
        }).fail(function(data){
            // console.log(data.responseJSON);
            alert('error: ' + data.responseJSON.error + '\n' +
            'error_description: ' + data.responseJSON.error_description)
        }
        )
    }
});
