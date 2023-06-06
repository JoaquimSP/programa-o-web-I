document.querySelector("#not").style.display = "none";
document.querySelector("#categorias").onclick = function(){
    if(document.querySelector("#not").style.display === "block")
      document.querySelector("#not").style.display = "none";
    else 
      document.querySelector("#not").style.display = "block";
};