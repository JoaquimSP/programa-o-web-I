document.querySelector("#not").style.display = "none";
document.querySelector("#noticias").onclick = function(){
    if(document.querySelector("#not").style.display === "block")
      document.querySelector("#not").style.display = "none";
    else 
      document.querySelector("#not").style.display = "block";
};

document.querySelector("#not").style.display = "none";
document.querySelector("#centro").onclick = function(){
    if(document.querySelector("#not").style.display === "block")
      document.querySelector("#not").style.display = "none";
    else 
      document.querySelector("#not").style.display = "block";
};

document.querySelector("#not").style.display = "none";
document.querySelector("#parceiros").onclick = function(){
    if(document.querySelector("#not").style.display === "block")
      document.querySelector("#not").style.display = "none";
    else 
      document.querySelector("#not").style.display = "block";
};

document.querySelector("#altoContrasteOn").onclick = function() {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "orange";
    document.querySelector("#link").style.color = "orange";
}

document.querySelector("#altoContrasteOff").onclick = function() {
    document.querySelector("body").style.backgroundColor = "#D90000";
    document.querySelector("body").style.color = "#FFFFFF";
    document.querySelector("#link").style.color = "#FFFFFF";
};

document.querySelector("#aumentarFonte").onclick = function(){
    document.querySelector("body").style.fontSize = "20px";
};