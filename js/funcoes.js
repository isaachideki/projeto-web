//cria uma variavel para manipular o arquivo xml
xmlhttp = new XMLHttpRequest();
// ler um determinado arquivo no XML nodiretório do projeto
xmlhttp.open("GET","xml/conteudo.xml", false);
//envia o arquivo aberto para leitura
xmlhttp.send();
// envia uma resposta do tipo XML
xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("postagem");


function funcaoConteudo(){
    for(i=0; i<=2; i++){
    document.write(
        "<tr>"  +
        "<td>" + x[i].getAttribute("codigo") + "</td>" +
        "<td><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue+"' width='150'></td>" +
        "<td>C</td>" +
        "<td>D</td>" +
       "</tr>"
       );
    }
}
