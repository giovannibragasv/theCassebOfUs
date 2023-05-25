document.getElementById("bi").innerHTML="<button class='button' onclick='csb()'><div class='textb'>INICIAR</div></button>"

function csb(params) {
    document.getElementById("bi").style.display = "none";
    document.getElementById("i").innerHTML=" <button  class='button2' onclick='bsc()'><div class='textb'>JOGAR</div></button> "
    document.getElementById("t").innerHTML=" <button  class='button3' onclick='scb()'><div class='textb'>TUTORIAL</div></button> " 
    document.getElementById("s").innerHTML=" <button  class='button4' onclick='sair()'><div class='textb'>SAIR</div></button> "    
}

function bcs(params) {
    window.close();
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
function jogarFaseDois(params) {
    location.href = "bob.html";
} 

function sair(params) {
location.href = "creditos.html"; 
}
function sairg(params) {
    location.href = "https://www.google.com.br"; 
}
// tradução do texto e depois leva para a contextualização
function traduzir(params){
    let fraseUm = document.getElementsByClassName("fraseUm")[0];
    let fraseDois = document.getElementsByClassName("fraseDois")[0];
    let fraseTres = document.getElementsByClassName("fraseTres")[0];
    let fraseQuatro = document.getElementsByClassName("fraseQuatro")[0];
    let fraseCinco = document.getElementsByClassName("fraseCinco")[0];

    fraseUm.innerHTML = "Casseb acorda em uma madrugada pronto para tomar o seu primeiro cafe do dia";
    fraseDois.innerHTML = "entretanto percebe que seu cachorrinho Caminito (eu) acabou desaparecendo";
    fraseTres.innerHTML = "e em seu lugar um bilhete de um antigo inimigo de Casseb, Girotto, aparece";
    fraseQuatro.innerHTML = 'contendo a seguinte mensagem "Boa sorte para encontrar outro cachorro, Casseb"...';
    fraseCinco.innerHTML = "Seu destino se tornou me salvar das mãos de Girotto antes que algo aconteça.";

    document.getElementById("textoBotaoTraducao").style.display = "none";

    document.getElementById("botaoJogar").innerHTML = " <button  class='botaoJogar' onclick='traduzir2()'><div class='textb'>PRÓXIMO</div></button> ";
}
// texto de contextualização da historia e botão que leva pro jogo
function traduzir2(params){
    let fraseUm = document.getElementsByClassName("fraseUm")[0];
    let fraseDois = document.getElementsByClassName("fraseDois")[0];
    let fraseTres = document.getElementsByClassName("fraseTres")[0];
    let fraseQuatro = document.getElementsByClassName("fraseQuatro")[0];
    let fraseCinco = document.getElementsByClassName("fraseCinco")[0];

    fraseUm.innerHTML = "Preste atenção!!";
    fraseDois.innerHTML = "estamos vivendo num mundo apocaliptco e poucas coisas ainda estão da mesma forma que eram antes";
    fraseTres.innerHTML = "então é melhor tomar bastante cuidado com os destroços e monstros que pode encontrar no caminho.";
    fraseQuatro.innerHTML = "Além disso, a cidade está muito diferente do que de costume, qualquer tipo de ajuda pode facilitar o seu caminho";
    fraseCinco.innerHTML = "fique atento.";

    document.getElementById("textoBotaoTraducao").style.display = "none";

    document.getElementById("botaoJogar").innerHTML = " <button  class='botaoJogar' onclick='jogarFaseUm()'><div class='textb'>JOGAR</div></button> ";
}


function traduzirBob(params){
    let fraseUm = document.getElementsByClassName("fraseUm")[0];
    let fraseDois = document.getElementsByClassName("fraseDois")[0];
    let fraseTres = document.getElementsByClassName("fraseTres")[0];
    let fraseQuatro = document.getElementsByClassName("fraseQuatro")[0];
    let fraseCinco = document.getElementsByClassName("fraseCinco")[0];

    fraseUm.innerHTML = "Preste muita atenção!";
    fraseDois.innerHTML = "O local que você vai entrar agora sofreu danos severos com o apocalipse.";
    fraseTres.innerHTML = "A luz da área foi totalmente desligada por vândalos";
    fraseQuatro.innerHTML = "Porém, em alguns lugares existem geradores que vão ligar a luz";
    fraseCinco.innerHTML = "Tome muito cuidado, porque os vândalos deixaram armadilhas para aqueles que tentassem passar.";

    document.getElementById("textoBotaoTraducao").style.display = "none";

    document.getElementById("botaoJogar").innerHTML = " <button  class='botaoJogar' onclick='jogarFaseDois()'><div class='textb'>JOGAR</div></button> ";
}
