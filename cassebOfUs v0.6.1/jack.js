let idMapa = document.getElementById("mapaFaseUm"); 
let tamanhoMapaFaseUm = 15;

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

// laco de repeticao de x (parede de cima e de baixo)
for (let y = 0; y < tamanhoMapaFaseUm; y++) {

  mapaFaseUm[0][y] = "*";

  mapaFaseUm[tamanhoMapaFaseUm - 1][y] = "*"; 
};

// laco de repeticao de y (parede da esquerda e direita)
for (let x = 0; x < tamanhoMapaFaseUm; x++) {

  mapaFaseUm[x][0] = "*";

  mapaFaseUm[x][tamanhoMapaFaseUm - 1] = "*";
};
//paredes na vertical 
for (let x = 0; x < tamanhoMapaFaseUm; x++) {

    mapaFaseUm[x][7] = "*";
  
    mapaFaseUm[x][tamanhoMapaFaseUm - 1] = "*";
  };
  for (let y = 0; y < tamanhoMapaFaseUm; y++) {

    mapaFaseUm[7][y] = "*";
  
    mapaFaseUm[3][y] = "*"; 
    mapaFaseUm[11][y] = "*"; 
  };
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

  for (let x = 0; x < tamanhoMapaFaseUm; x++){

    // colocando a quebra de linha na linha X
    espacoMapa += "\n";

    for (let y = 0; y < tamanhoMapaFaseUm; y++){

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

window.addEventListener("keydown", function testePersonagem(event) {
  const teclaPressionada = event.keyCode;

    // tecla W
    if (teclaPressionada === 87) {

      // condicional para fazer com que o personagem so se movimente se a linha em cima dele for diferente
      // de * e D
      if (mapaFaseUm[linha - 1][coluna] !== "*" && mapaFaseUm[linha - 1][coluna] !== "D") {

        // linha-- porque a cada linha que diminiui o personagem vai pra cima, porque a matriz vai de 0 a 14
        // entao o movimento de ir pra cima é "decrescente"
        linha--;
        geracaoDoMapa();
      };
    };

    // tecla S
    if (teclaPressionada === 83) {

      // condicional para fazer com que o personagem so se movimente se a linha em baixo dele for diferente
      // de * e D
      if (mapaFaseUm[linha + 1][coluna] !== "*" && mapaFaseUm[linha + 1][coluna] !== "D") {
        linha++;
        geracaoDoMapa(); 
      }
    };
  
    // tecla D
    if (teclaPressionada === 68) {

      // condicional para fazer com que o personagem so se movimente se a linha na direita dele for diferente
      // de * e D
      if (mapaFaseUm[linha][coluna + 1] !== "*" && mapaFaseUm[linha][coluna + 1] !== "D") {  
        coluna++;
        geracaoDoMapa(); 
      };
      if (linha === 1 && coluna === 14) {
        //this.window.location.href = "index.html";
      };
    };
  
    // tecla A
    if (teclaPressionada === 65) {

      // condicional para fazer com que o personagem so se movimente se a linha na esquerda dele for diferente
      // de * e D
      if (mapaFaseUm[linha][coluna - 1] !== "*" && mapaFaseUm[linha][coluna - 1] !== "D") {
        
        coluna--;
        geracaoDoMapa(); 
      };
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
      } else if (linha === 1 && coluna === 1) {
        // adicao de uma classe no css usando classList.add para fazer o balanco da tela caso o user pegue a chave falsa
        this.document.getElementsByClassName("cardJack")[0].classList.add("cardJackShake");
      }
    };
}); 

function voltar(params) {
    location.href = "index.html"; 
}