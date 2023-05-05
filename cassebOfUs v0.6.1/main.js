document.getElementById("bi").innerHTML="<button class='button' onclick='csb()'><div class='textb'>INICIAR</div></button>"

function csb(params) {
    document.getElementById("bi").style.display = "none";
    document.getElementById("i").innerHTML=" <button  class='button2' onclick='bsc()'><div class='textb'>JOGAR</div></button> "
    document.getElementById("t").innerHTML=" <button  class='button3' onclick='scb()'><div class='textb'>TUTORIAL</div></button> " 
    document.getElementById("s").innerHTML=" <button  class='button4' onclick='bcs()'><div class='textb'>SAIR</div></button> "    
}

function bcs(params) {
    window.close("index.html")
}  

function scb(params) {
    location.href = "tutorial.html";
}
 
function bsc(params) { 
    location.href = "cutscene1.html";
} 

function cs(params) {
    location.href = "index.html";
}

function jogarFaseUm(params) {
    location.href = "jack.html";
}

function traduzir(params){
    let fraseUm = document.getElementsByClassName("fraseUm")[0];
    let fraseDois = document.getElementsByClassName("fraseDois")[0];
    let fraseTres = document.getElementsByClassName("fraseTres")[0];
    let fraseQuatro = document.getElementsByClassName("fraseQuatro")[0];
    let fraseCinco = document.getElementsByClassName("fraseCinco")[0];

    fraseUm.innerHTML = "Casseb acorda em uma madrugada pronto para tomar o seu primeiro cafe do dia";
    fraseDois.innerHTML = "entretanto percebe que seu cachorrinho Caminito (eu) acabou desaparecendo";
    fraseTres.innerHTML = "e em seu lugar um bilhete de um antigo inimigo de Casseb aparece, Girotto";
    fraseQuatro.innerHTML = "contendo a seguinte mensagem 'Venha buscar seu precioso cachorro na argo, Casseb'...";
    fraseCinco.innerHTML = "Seu destino se tornou me salvar das maos do seu inimigo.";

    document.getElementById("textoBotaoTraducao").style.display = "none";

    document.getElementById("botaoJogar").innerHTML = " <button  class='botaoJogar' onclick='jogarFaseUm()'><div class='textb'>JOGAR</div></button> ";
}