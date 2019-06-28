

var text = '<p><img src="/img/sacred-heart_250.png" width=75px></img></p><div id="msgS"><p>DOMINE Iesu, noverim eu, noverim te,</p> <p>Nec aliquid cupiam nisi te.</p> <p>Oderim me et amem te.</p><p> Omnia agam propter te.</p></div>' ;
var dateAtual = new Date;
var elem = document.getElementById("msgSacre");
var div1 = document.getElementById("div-footer");
var elem1 = document.getElementById("text-author");
var elem2 = document.getElementById("text-version");

var day = dateAtual.getDate();
var weekday = dateAtual.getDay();
var hour = dateAtual.getHours();

if (weekday == 5 && hour >= 0 && hour < 24 ){
    div1.removeChild(elem1);
    div1.removeChild(elem2);
    elem.innerHTML = text;
}

