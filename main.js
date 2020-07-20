var ajax = new XMLHttpRequest();
 
ajax.open("get", "https://covid19-japan-web-api.now.sh/api/v1/prefectures");
ajax.send(); // 通信させます。
ajax.addEventListener("load", function(){ // loadイベントを登録します。
	console.log(this.response.cases[24]); // 通信結果を出力します。
}, false);