var request = new XMLHttpRequest();
var npatients = 0;
var ncurrentpatients = 0;

request.open('GET', 'https://www.stopcovid19.jp/data/covid19japan.json', true);
request.responseType = 'json';
request.onload = function (){
    var data = this.response;
    var npatients = data[23].npatients;
    var ncurrentpatients = data[23].ncurrentpatients;
};
 
request.send();

$(function(){
    $("#npatients").text(npatients);
    $("#ncurrentpatients").text(ncurrentpatients);
});

