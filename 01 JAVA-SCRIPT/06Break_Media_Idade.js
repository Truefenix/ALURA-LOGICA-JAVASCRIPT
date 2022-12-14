//<meta charset="UTF-8">

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
    
// Acumular Valores pelo While
    
var totalFamiliares = parseInt(prompt("Qual a quantidade de Familiares"));
var numero = 1;
var totalIdade = 0;

while(numero <= totalFamiliares) {
    var idade = parseInt(prompt("Qual a idade do Familiar"));
    var totalIdade = totalIdade + idade;

    numero++;
}

var media = totalIdade / totalFamiliares;
mostra("A media da idade de seus Familiares é: " + media);