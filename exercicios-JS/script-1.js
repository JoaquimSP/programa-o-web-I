document.querySelector("#btnUm").onclick = function (){
    alert("Clicou");
}

document.querySelector("#btnDois").onmouseenter = function (){
    alert("Passou");
}

document.querySelector("#btnTres").onmouseout = function (){
    alert("Saindo");
}

document.querySelector("#exercicio4btn1").onclick = function(){
    
}

document.querySelector("#btnExercicio3").onclick = function() {
    let variavel = parseInt(document.querySelector("#inputExercicio3").value)
    let saida = "";
    for(let i = variavel; i >= 1; i--){
        saida+=i;
    }
    document.querySelector("#paragrafoExercicio4")
}