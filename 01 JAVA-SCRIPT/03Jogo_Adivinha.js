//<meta charset="UTF-8">

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

console.log(numeroPensado); // Me mostra o resultado no console.
    
var tentativas = 1;
while(tentativas <= 3) {

    var numeroPensado = Math.round(Math.random() * 10);
    var chute = parseInt(prompt("Adivinhe um Número"));
        
    if(chute == numeroPensado) {
    document.write("Você Acertou<br><br>");

    break; // ele quebra a estrutura e sai.
    tentativas = 4; // outra forma de quebrar a estrutura.
        
} else {
    document.write("Você errou<br><br>");
}

tentativas++;
}