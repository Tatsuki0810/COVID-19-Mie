// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var npatients = 0;
var ncurrentpatients = 0;

request.open('GET', 'https://www.stopcovid19.jp/data/covid19japan.json', true);
request.responseType = 'json';
request.onload = function (){
    var data = JSON.parse(request.responseText);
    var npatients = getElementById("npatients");
    npatients.innerHTML = data[23].npatients;
    var ncurrentpatients = getElementById("ncurrentpatients");
    ncurrentpatients.innerHTML = data[23].ncurrentpatients;
};
request.send();