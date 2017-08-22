'use strict';

$(function() {
    $.ajax({
      url: 'https://app.rakuten.co.jp/services/api/BooksTotal/Search/20130522',
      type: 'GET',
      datatype: 'json',
      data: {
        // 「区分:サービス固有パラメーター」を確認して、必要な情報をdata内に入れましょう。
        titile: '',
        author: '',
        publisherName: '',
        applicationId: '1019399324990976605', // (今回はこのIDを使用してください)
        booksGenreId: '001'
      },
    }).done(function(data) {
        // この中にデータ取得後の動きを記述していきます。
        console.log(data);
        console.log(data.page);
    });


});