//<html><canvas width="600" height="400"></canvas></html>

function desenhaBandeiraBrasil() {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle="green";
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle="yellow";
    pincel.beginPath();
    pincel.moveTo(300, 50);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(50, 200);
    pincel.lineTo(300, 350);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.fillStyle="darkblue";
    pincel.beginPath();

    pincel.arc(300, 200, 100, 0, 2* 3.14);
    pincel.fill();
}
function desenhaBandeiraAlemanha() {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'black';
    pincel.fillRect(0, 0, 600, 133);

    pincel.fillStyle = 'red';
    pincel.fillRect(0, 133, 600, 133);

    pincel.fillStyle = 'yellow';
    pincel.fillRect(0, 266, 600, 133);
}

// ANIMAÇÃO A CADA 3 SEGUNDO TROCA A BANDEIRA.
var mostraBrasil = true;

function trocaBandeira() {

    if(mostraBrasil == true) {
        desenhaBandeiraBrasil();
        mostraBrasil = false;
    } else {
        desenhaBandeiraAlemanha();
        mostraBrasil = true;
    }
}

setInterval(trocaBandeira, 3000); // a cada 3 segundos