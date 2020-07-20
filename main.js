fetch('https://covid19-japan-web-api.now.sh/api/v1/prefectures', {
    headers: {
      'Content-Type': 'pplication/json; charset=utf-8'
    },
    body: JSON.parse
  })
   
    // 通信が成功したとき
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
    })
   
    // 通信が失敗したとき
    .catch(function(error) {
      console.error('Error:', error);
    });