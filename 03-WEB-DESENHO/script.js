var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

var paleta = document.querySelector('input'); // paleta de cor

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 1400, 600);

pincel.fillStrokeStyle = "black";
pincel.strokeRect(470, 15, 450, 50);

// TEXTO DA TELA
pincel.font = "40px Georgia";
pincel.fillStyle='black';
pincel.fillText("DESENHE NA TELA", 500, 50);

var desenha = false;

// atribuindo diretamente a função anônima
tela.onmousemove = function(evento) {

    if(desenha) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        pincel.fillStyle = paleta.value;

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