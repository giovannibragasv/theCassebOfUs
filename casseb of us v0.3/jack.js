let idMapa = document.getElementById("mapaFaseUm"); 
let tamanhoMapaFaseUm = 15;

// definicao de spawn do personagem
let linhaX = 13;
let colunaY = 1;

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
  
// criacao das salas do mapa (esquerda em baixo)
/*mapaFaseUm[13][4] = "*";
mapaFaseUm[12][4] = "*";
mapaFaseUm[11][4] = "D";
mapaFaseUm[10][3] = "*";
mapaFaseUm[9][2] = "*";
mapaFaseUm[9][1] = "*";
mapaFaseUm[10][2] = "@";

// direita em cima

mapaFaseUm[0][13] = "=";
mapaFaseUm[4][13] = "D";
mapaFaseUm[4][12] = "*";
mapaFaseUm[4][11] = "*";
mapaFaseUm[3][10] = "*";
mapaFaseUm[2][9] = "*";
mapaFaseUm[1][9] = "*";


// esquerda em cima
mapaFaseUm[4][1] = "*";
mapaFaseUm[4][2] = "*";
mapaFaseUm[3][3] = "*";
mapaFaseUm[1][3] = "*";
mapaFaseUm[1][1] = "@";*/

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
      if (linhaX === x && colunaY === y) {
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
      if (mapaFaseUm[linhaX - 1][colunaY] !== "*" && mapaFaseUm[linhaX - 1][colunaY] !== "D") {

        // linhaX-- porque a cada linha que diminiui o personagem vai pra cima, porque a matriz vai de 0 a 14
        // entao o movimento de ir pra cima é "decrescente"
        linhaX--;
        geracaoDoMapa();
      };

      if (linhaX === 1 && colunaY === 14) {
        this.alert("Você terminou a fase.");
        geracaoDoMapa();
      };
    };

    // tecla S
    if (teclaPressionada === 83) {

      // condicional para fazer com que o personagem so se movimente se a linha em baixo dele for diferente
      // de * e D
      if (mapaFaseUm[linhaX + 1][colunaY] !== "*" && mapaFaseUm[linhaX + 1][colunaY] !== "D") {
      
        linhaX++;
        geracaoDoMapa(); 
      }
    };
  
    // tecla D
    if (teclaPressionada === 68) {

      // condicional para fazer com que o personagem so se movimente se a linha na direita dele for diferente
      // de * e D
      if (mapaFaseUm[linhaX][colunaY + 1] !== "*" && mapaFaseUm[linhaX][colunaY + 1] !== "D") {
        
        colunaY++;
        geracaoDoMapa(); 
      };
      if (linhaX === 1 && colunaY === 14) {
        this.alert("Você terminou a fase.");
        geracaoDoMapa();
      };
    };
  
    // tecla A
    if (teclaPressionada === 65) {

      // condicional para fazer com que o personagem so se movimente se a linha na esquerda dele for diferente
      // de * e D
      if (mapaFaseUm[linhaX][colunaY - 1] !== "*" && mapaFaseUm[linhaX][colunaY - 1] !== "D") {
        
        colunaY--;
        geracaoDoMapa(); 
      };
    };
  
    // tecla I
    if (teclaPressionada === 73) {
      if (linhaX === 9 && colunaY === 1) {
        // transforma o botao em um espaco em branco
        mapaFaseUm[9][1] = " ";

        // transforma a porta fechada em =
        mapaFaseUm[11][11] = "=";

        geracaoDoMapa();
      }
      else if (linhaX === 13 && colunaY === 13) {
        
        mapaFaseUm[13][13] = " ";

        mapaFaseUm[7][2] = "=";

        geracaoDoMapa();
      }
        else if (linhaX === 6 && colunaY === 13) {
        mapaFaseUm[6][13] = " ";

        mapaFaseUm[1][7] = "=";

        geracaoDoMapa();
       }
    };
}); 
function voltar(params) {
    location.href = "index.html"; 
}