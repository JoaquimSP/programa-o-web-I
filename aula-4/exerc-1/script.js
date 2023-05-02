const paragrafo = document.querySelector("#paragrafo2");

paragrafo.addEventListener('click', alertar);

function alertar(){
    var nome = window.prompt("Qual é seu nome?");
    paragrafo.textContent = "Bem vindo, " +nome;
}