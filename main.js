var ajax = new XMLHttpRequest();
 
ajax.open("get", "https://covid19-japan-web-api.now.sh/api/v1/prefectures");
ajax.send();
ajax.addEventListener("load", function(){ 
    var r = JSON.parse(this.response);
    var total = document.getElementById("total");
    total.innerHTML = r[23].cases;
    var pcr = document.getElementById("pcr");
    pcr.innerHTML = r[23].pcr;
    var date = document.getElementById("date");
    date.innerHTML = r[23].last_updated.cases_date;
}, false);