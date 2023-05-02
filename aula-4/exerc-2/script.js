const p1 = document.querySelector("#paragrafo1");
const p2 = document.querySelector("#paragrafo2");
const botao = document.querySelector("#enviar");
const botaoTrocaCor = document.querySelector("#trocaCor");

botao.addEventListener('click', trocarNome);
botaoTrocaCor.addEventListener('click', trocaCor);

function trocarNome(){
    let nome = document.querySelector("#nome").value;
    p1.textContent = "Bem vindo, " +nome+ "!";

    let email = document.querySelector("#email").value;
    p2.textContent = "Email: " +email;
}

function trocaCor(){
   botaoTrocaCor.style.backgroundColor = "orange";
   document.querySelector("#nome").style.backgroundColor = "orange";
   document.querySelector("#email").style.backgroundColor = "orange";
   botaoTrocaCor.style.backgroundColor = "orange"; 
}