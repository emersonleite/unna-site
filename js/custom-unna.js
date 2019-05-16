

var text = '<img src="/img/sacred-heart_250.png" width=75px></img>' ;
var dateAtual = new Date;
var elem = document.getElementById("msgSacre");
var div1 = document.getElementById("div-footer");
var elem1 = document.getElementById("text-author");
var elem2 = document.getElementById("text-version");

var day = dateAtual.getDate();
var weekday = dateAtual.getDay();

if (weekday == 4 | weekday == 2 ){
    div1.removeChild(elem1);
    div1.removeChild(elem2);
    elem.innerHTML = text;
}

