document.querySelector("#goleiro").onclick = function(){
    let jogador = document.querySelector("#texto").value;
    document.querySelector("#tdGoleiro").textContent = jogador;
};

document.querySelector("#fixo").onclick = function(){
    let jogador = document.querySelector("#texto").value;
    document.querySelector("#tdFixo").textContent = jogador;
};

document.querySelector("#alaesquerda").onclick = function(){
    let jogador = document.querySelector("#texto").value;
    document.querySelector("#tdAlaEsquerda").textContent = jogador;
};

document.querySelector("#aladireita").onclick = function(){
    let jogador = document.querySelector("#texto").value;
    document.querySelector("#tdAlaDireita").textContent = jogador;
};

document.querySelector("#pivo").onclick = function(){
    let jogador = document.querySelector("#texto").value;
    document.querySelector("#tdPivo").textContent = jogador;
};