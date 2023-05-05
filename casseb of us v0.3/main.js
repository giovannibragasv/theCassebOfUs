document.getElementById("bi").innerHTML="<button class='button' onclick='csb()'><div class='textb'>INICIAR</div></button>"

function csb(params) {
    document.getElementById("bi").style.display = "none";
    document.getElementById("i").innerHTML=" <button  class='button2' onclick='bsc()'><div class='textb'>JOGAR</div></button> "
    document.getElementById("t").innerHTML=" <button  class='button3' onclick='scb()'><div class='textb'>TUTORIAL</div></button> " 
    document.getElementById("s").innerHTML=" <button  class='button4' onclick='bcs()'><div class='textb'>SAIR</div></button> "    
}

function bcs(params) { 
    alert("obrigado por jogar The Casseb Of Us")
    window.close()
}  

function scb(params) {
    location.href = "tutorial.html";
}
 
function bsc(params) { 
    location.href = "jack.html";
} 
function cs(params) {
    location.href = "index.html";
    csb() 
}
