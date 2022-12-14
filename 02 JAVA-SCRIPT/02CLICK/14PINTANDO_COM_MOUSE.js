//<html><canvas width="600" height="400"></canvas></html>

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 1600, 800);

// TEXTO DA TELA
pincel.font = "40px Georgia";
pincel.fillStyle='black';
pincel.fillText("DESENHE NA TELA", 600, 50);

var desenha = false;

// atribuindo diretamente a função anônima
tela.onmousemove = function(evento) {

    if(desenha) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = 'blue';
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
    }
    // console.log(x + ',' + y);
}

tela.onmousedown = function() {

    desenha = true;
}

    tela.onmouseup = function() {

    desenha = false;
}