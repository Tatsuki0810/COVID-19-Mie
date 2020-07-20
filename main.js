var ajax = new XMLHttpRequest();
 
ajax.open("get", "https://www.stopcovid19.jp/data/covid19japan.json");
ajax.send(); // 通信させます。
ajax.addEventListener("load", function(){ // loadイベントを登録します。
	console.log(this.response.area[23].npatients); // 通信結果を出力します。
}, false);