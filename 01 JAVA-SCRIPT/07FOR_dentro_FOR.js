//<meta charset="UTF-8">

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
    
// FOR dentro de FOR
    
for(var linha = 1; linha <= 3; linha++) {
    for(var coluna = 1; coluna <= 10; coluna++) {
        document.write("*");
    }
    pulaLinha();
}