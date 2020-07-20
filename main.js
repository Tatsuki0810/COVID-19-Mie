$(function() {
      $.getJSON('https://covid19-japan-web-api.now.sh/api/v1/prefectures',)
        .done(function(data) {
            console.log(data.cases[24]);
         });
});