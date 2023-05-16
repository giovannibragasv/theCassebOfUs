let idMapa = document.getElementById("mapaFaseDois");
let tamanhoMapaFaseDois = 30;
let vetorVida = ['<img src="imagens/canecaPequena.png">', '<img src="imagens/canecaPequena.png">', '<img src="imagens/canecaPequena.png">'];



// definicao de spawn do personagem
let linha = 4;
let coluna = 1;

// criacao da matriz do mapa
const mapaFaseDois = [];

// laco de repeticao pra criar a matriz [x][y]
for (let x = 0; x < tamanhoMapaFaseDois; x++) {

  mapaFaseDois[x] = [];

  for (let y = 0; y < tamanhoMapaFaseDois; y++) {

    // definindo a matriz toda como um espaco em branco
    mapaFaseDois[x][y] = " ";
  };
};

// função pra gerar as linhas na horizontal

function retaNaHorizontal(tamanho, x, y) {
  for (let y = 0; y < tamanho; y++) {
    if (y < 3 || y >= tamanho - 3) {
      mapaFaseDois[x][y] = " ";
    } else {
      mapaFaseDois[x][y] = "*";
    }
  }
}

// função pra gerar as linhas na vertical
function retaNaVertical(tamanho,x,y) {
  for (let x = 0; x < tamanho; x++) {
    if (x < 4 || y >= tamanho) {
      mapaFaseDois[x][y] = " "
    } else {
      mapaFaseDois[x][y] = "*"
    }
    
    if (x > 25 || y >= tamanho) {
      mapaFaseDois[x][y] = " "
    }   
  };
}



//essas funções formam o quadrado grande
retaNaHorizontal(30,0,0); 
retaNaHorizontal(30,29,0); 
retaNaVertical(30,0,0);
retaNaVertical(30,0,29);
// posicionamento de caracteres no mapa
mapaFaseDois[4][0] = "=";
mapaFaseDois[1][2] = "*";
mapaFaseDois[2][1] = "*";
mapaFaseDois[3][0] = "*";
mapaFaseDois[28][2] = "*";
mapaFaseDois[27][1] = "*";
mapaFaseDois[26][0] = "*";

mapaFaseDois[1][27] = "*";
mapaFaseDois[2][28] = "*";
mapaFaseDois[3][29] = "*";
mapaFaseDois[28][27] = "*";
mapaFaseDois[27][28] = "*";
mapaFaseDois[26][29] = "*";
mapaFaseDois[15][15] = "#";


function trocarVida(){

  if (contadorDeErro > 0) {
    // mudando o vetorVida da posicao do contador de vidas para a imagem da caneca vazia
    vetorVida[contadorDeErro] = '<img src="imagens/canecaVaziaPequena2.png">';

    // mudando a labelVidaDois no html pelo vetorVida novo usando join para retornar a string nova com a caneca vazia na posicao do contador (maximo 3)
    document.getElementById("labelVidaDois").innerHTML = "VIDA : " + vetorVida.join("");
    

    contadorDeErro--;
  }

  else if (contadorDeErro === 0) {
    location.href = "gameover.html";
  };
};

 
// function de geracao do mapa
function geracaoDoMapa() {

  // definicao da variavel do espaco do mapa
  let espacoMapa = " ";

  for (let x = 0; x < tamanhoMapaFaseDois; x++) {

    // colocando a quebra de linha na linha X
    espacoMapa += "\n";

    for (let y = 0; y < tamanhoMapaFaseDois; y++) {

      // colocando o espaço entre os personagens na coluna Y
      espacoMapa += " ";

      // condicional if para verificar se x e y sao iguais à posição do personagem
      if (linha === x && coluna === y) {
        espacoMapa += "&";
      }
      else {
        espacoMapa += mapaFaseDois[x][y];
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

     if(boolNoClip == false){     
      // condicional para fazer com que o personagem so se movimente se a linha em cima dele for diferente
      // de * e D
      if (mapaFaseDois[linha - 1][coluna] !== "*" && mapaFaseDois[linha - 1][coluna] !== "D") {
  
        // verificação se há um "#" na posição anterior à posição atual do personagem na matriz
        if (mapaFaseDois[linha - 1][coluna] === "#") {
          linha = 4;
          coluna = 1;
          geracaoDoMapa();
          trocarVida();
        } else {
          // linha-- porque a cada linha que diminiui o personagem vai pra cima, porque a matriz vai de 0 a 14
          // entao o movimento de ir pra cima é "decrescente"
          linha--;
          geracaoDoMapa();
        }
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
      if (mapaFaseDois[linha + 1][coluna] !== "*" && mapaFaseDois[linha + 1][coluna] !== "D") {
        // verificação se há um "#" na posição anterior à posição atual do personagem na matriz
        if (mapaFaseDois[linha + 1][coluna] === "#") {
          linha = 4;
          coluna = 1;
          geracaoDoMapa();
          trocarVida();
        }
        else {
          linha++;
          geracaoDoMapa();
        }
      }
    } else {
      linha++;
      geracaoDoMapa();
    }
  };

  // tecla D
  if (teclaPressionada === 68) {

    if (boolNoClip == false){
      // condicional para fazer com que o personagem so se movimente se a linha na direita dele for diferente
      // de * e D
      if (mapaFaseDois[linha][coluna + 1] !== "*" && mapaFaseDois[linha][coluna + 1] !== "D") {
        // verificação se há um "#" na posição anterior à posição atual do personagem na matriz
        if (mapaFaseDois[linha][coluna + 1] === "#") {
          linha = 4;
          coluna = 1;
          geracaoDoMapa();
          trocarVida();
        }
        else{
          coluna++;
          geracaoDoMapa();
        }
      };
    } else {
      coluna++;
      geracaoDoMapa();
    }
  };

  // tecla A
  if (teclaPressionada === 65) {

    // condicional para fazer com que o personagem so se movimente se a linha na esquerda dele for diferente
    // de * e D
    if (boolNoClip == false) {
      if (mapaFaseDois[linha][coluna - 1] !== "*" && mapaFaseDois[linha][coluna - 1] !== "D") {
          if (mapaFaseDois[linha][coluna - 1] === "#") {
            linha = 4;
            coluna = 1;
            geracaoDoMapa();
            trocarVida();
          }
          else{
            coluna--
            geracaoDoMapa();
          }
      };
    } else {
      coluna--
      geracaoDoMapa();
    }
  };

  // tecla I
  if (teclaPressionada === 73) {

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
      document.getElementById('labelVidaDois').innerHTML += vetorVida[x];
  }

  let contadorDeErro = 2;
  
  function trocarVida(){
  
    if (contadorDeErro > 0) {
      // mudando o vetorVida da posicao do contador de vidas para a imagem da caneca vazia
      vetorVida[contadorDeErro] = '<img src="imagens/canecaVaziaPequena2.png">';
  
      // mudando a labelVidaDois no html pelo vetorVida novo usando join para retornar a string nova com a caneca vazia na posicao do contador (maximo 3)
      document.getElementById("labelVidaDois").innerHTML = "VIDA : " + vetorVida.join("");
      
  
      contadorDeErro--;
    }
  
    else if (contadorDeErro === 0) {
      location.href = "gameover.html";
    };
  };
  