//<meta charset="UTF-8">

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
    // TABUADA
var tabuada = parseInt(prompt("Qual o número da tabuada."));

// FOR
for(var a = 0; a <= 10; a++) {
    var resultado = tabuada * a;

    mostra("A tabuada de " + tabuada + " X " + a + " = " + resultado);
}