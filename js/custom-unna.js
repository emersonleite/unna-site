var text = '<img src="/img/sacred-heart_250.png" width=100px> Sagrado </img>' ;

var dateAtual = new Date;

var elem = document.getElementById("msgSacre");
var day = dateAtual.getDate();

console.log(dateAtual);
console.log(elem);
console.log(day);


if (day == 14){
    elem.innerHTML = text;
}

