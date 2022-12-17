var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

var x = 20;
var y = 20;

var peixe = document.querySelector('peixe');

// códigos do teclado

var esquerda = 65;
var cima = 87;
var direita = 68;
var baixo = 83;

var taxa = 10;

function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = peixe;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}


function atualizaTela() {

    limpaTela();
    desenhaCirculo(x, y, 10);
}

setInterval(atualizaTela, 20);

function pagina(evento) {
    var X = evento.pageX - tela.offsetLeft;
    var Y = evento.pageY - tela.offsetTop;
    console.log("X= " + X + "  Y= " + Y);
}
tela.onclick = pagina;

function leDoTeclado(evento) {
                   
    if(evento.keyCode == cima) {
        y = y - taxa;
                 
    } else if (evento.keyCode == baixo) {
                
        y = y + taxa;
                
    } else if (evento.keyCode == esquerda) {
                
        x = x - taxa;
                
    } else if (evento.keyCode == direita) {
                
        x = x + taxa;
    }
}

document.onkeydown = leDoTeclado;