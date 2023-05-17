let idMapa = document.getElementById("mapaFaseUm");
let tamanhoMapaFaseUm = 15;
let vetorVida = ['<img src="imagens/canecaPequena.png">', '<img src="imagens/canecaPequena.png">', '<img src="imagens/canecaPequena.png">'];



// definicao de spawn do personagem
let linha = 13;
let coluna = 1;

// criacao da matriz do mapa
const mapaFaseUm = [];

// laco de repeticao pra criar a matriz [x][y]
for (let x = 0; x < tamanhoMapaFaseUm; x++) {

  mapaFaseUm[x] = [];

  for (let y = 0; y < tamanhoMapaFaseUm; y++) {

    // definindo a matriz toda como um espaco em branco
    mapaFaseUm[x][y] = " ";
  };
};

// função pra gerar as linhas na horizontal
function retaNaHorizontal(tamanho,x,y) {
  for (let y = 0; y < tamanho; y++) {

    mapaFaseUm[x][y] = "*";
  };
}
// função pra gerar as linhas na vertical
function retaNaVertical(tamanho,x,y) {
  for (let x = 0; x < tamanho; x++) {

    mapaFaseUm[x][y] = "*";
  
  };
}
//essas funções formam o quadrado grande
retaNaHorizontal(15,0,0); 
retaNaHorizontal(15,14,0); 
retaNaVertical(15,0,0)
retaNaVertical(15,0,14)
retaNaVertical(15,0,7)
// funções pra gerar as retas dentro do mapa
retaNaHorizontal(15,7,0);
retaNaHorizontal(15,3,0);
retaNaHorizontal(15,11,0);
// pontos especificos no mapa
mapaFaseUm[11][5] = " ";
mapaFaseUm[7][2] = "D";
mapaFaseUm[13][13] = "@";
mapaFaseUm[9][1] = "@";
mapaFaseUm[11][11] = "D";
mapaFaseUm[8][7] = " ";
mapaFaseUm[1][7] = "D";
mapaFaseUm[3][12] = "D";
mapaFaseUm[3][3] = " ";
mapaFaseUm[4][7] = " ";
mapaFaseUm[6][13] = "@";
mapaFaseUm[1][1] = "@";
mapaFaseUm[1][14] = "=";
 
// function de geracao do mapa
function geracaoDoMapa() {

  // definicao da variavel do espaco do mapa
  let espacoMapa = " ";

  for (let x = 0; x < tamanhoMapaFaseUm; x++) {

    // colocando a quebra de linha na linha X
    espacoMapa += "\n";

    for (let y = 0; y < tamanhoMapaFaseUm; y++) {

      // colocando o espaço entre os personagens na coluna Y
      espacoMapa += " ";

      // condicional if para verificar se x e y sao iguais à posição do personagem
      if (linha === x && coluna === y) {
        espacoMapa += "&";
      }
      else {
        espacoMapa += mapaFaseUm[x][y];
      };
    };
  };

  // definindo o mapa no id do html
  idMapa.innerHTML = espacoMapa;
};

// colocando a function fora de qualquer outra para fazer ela gerar ao iniciar da pagina
geracaoDoMapa();

// criacao de um booleano pra nao ter colisao com nada quando ele for true (apertando o botão ])
let boolNoClip = false;

window.addEventListener("keydown", function testePersonagem(event) {
  const teclaPressionada = event.keyCode;

  // tecla W
  if (teclaPressionada === 87) {

    if (boolNoClip == false) {
      // condicional para fazer com que o personagem so se movimente se a linha em cima dele for diferente
      // de * e D
      if (mapaFaseUm[linha - 1][coluna] !== "*" && mapaFaseUm[linha - 1][coluna] !== "D") {
  
        // linha-- porque a cada linha que diminiui o personagem vai pra cima, porque a matriz vai de 0 a 14
        // entao o movimento de ir pra cima é "decrescente"
        linha--;
        geracaoDoMapa();
      };
    } else {
        linha--;
        geracaoDoMapa();
    }
  };

  // tecla S
  if (teclaPressionada === 83) {

    if (boolNoClip == false) {
    // condicional para fazer com que o personagem so se movimente se a linha em baixo dele for diferente
    // de * e D
    if (mapaFaseUm[linha + 1][coluna] !== "*" && mapaFaseUm[linha + 1][coluna] !== "D") {
      linha++;
      geracaoDoMapa();
    }
    } else {
      linha++;
      geracaoDoMapa();
    }

  };

  // tecla D
  if (teclaPressionada === 68) {

    if (boolNoClip == false) {
      // condicional para fazer com que o personagem so se movimente se a linha na direita dele for diferente
      // de * e D
      if (mapaFaseUm[linha][coluna + 1] !== "*" && mapaFaseUm[linha][coluna + 1] !== "D") {
        coluna++;
        geracaoDoMapa();
      };
    } else {
      coluna++;
      geracaoDoMapa();
    }
    if (linha === 1 && coluna === 14) {
      this.window.location.href  = "bob.html";
    };
  };

  // tecla A
  if (teclaPressionada === 65) {

    if (boolNoClip == false) {

      // condicional para fazer com que o personagem so se movimente se a linha na esquerda dele for diferente
      // de * e D
      if (mapaFaseUm[linha][coluna - 1] !== "*" && mapaFaseUm[linha][coluna - 1] !== "D") {
        coluna--;
        geracaoDoMapa();
      };
    } else {
      coluna--;
      geracaoDoMapa();
    }
  };

  // tecla I
  if (teclaPressionada === 73) {
    if (linha === 9 && coluna === 1) {
      // transforma o botao em um espaco em branco
      mapaFaseUm[9][1] = " ";

      // transforma a porta fechada em =
      mapaFaseUm[11][11] = "=";

      geracaoDoMapa();
    }
    else if (linha === 13 && coluna === 13) {

      mapaFaseUm[13][13] = " ";

      mapaFaseUm[7][2] = "=";

      geracaoDoMapa();
    } else if (linha === 6 && coluna === 13) {
      mapaFaseUm[6][13] = " ";

      mapaFaseUm[1][7] = "=";

      geracaoDoMapa();
    }

     else if (linha === 1 && coluna === 1) {
        // adicao de uma classe no css usando classList.add para fazer o balanco da tela caso o user pegue a chave falsa
        this.document.getElementsByClassName("cardJack")[0].classList.add("cardJackShake");
        mapaFaseUm[10][13] = "<abbr title='independente das dificuldades, siga em frente até o fim e a luz estará com você'>?</abbr>";
     }
    };

    if (teclaPressionada === 221){
      boolNoClip = true;
    }
    if (teclaPressionada === 219){
      boolNoClip = false;
    }
  });












function voltar(params) {
  location.href = "index.html";
}

for (let x = 0; x < vetorVida.length; x++) {
    document.getElementById('labelVida').innerHTML += vetorVida[x];
}

let contadorDeErro = 2;

function trocarVida(){

  if (contadorDeErro > 0) {
    // mudando o vetorVida da posicao do contador de vidas para a imagem da caneca vazia
    vetorVida[contadorDeErro] = '<img src="imagens/canecaVaziaPequena2.png">';

    // mudando a labelVida no html pelo vetorVida novo usando join para retornar a string nova com a caneca vazia na posicao do contador (maximo 3)
    document.getElementById("labelVida").innerHTML = "VIDA : " + vetorVida.join("");
    

    contadorDeErro--;
  }

  else if (contadorDeErro === 0) {
    location.href = "gameover.html";
  };
};
