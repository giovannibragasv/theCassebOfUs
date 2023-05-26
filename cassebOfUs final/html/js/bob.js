let idMapa = document.getElementById("mapaFaseDois");
let tamanhoMapaFaseDois = 30;
let vetorVida = [
  '<img src="imagens/canecaPequena.png">',
  '<img src="imagens/canecaPequena.png">',
  '<img src="imagens/canecaPequena.png">',
];

// definicao de spawn do personagem
let linha = 6;
let coluna = 1;

// criacao da matriz do mapa
const mapaFaseDois = [];

// laco de repeticao pra criar a matriz [x][y]
for (let x = 0; x < tamanhoMapaFaseDois; x++) {
  mapaFaseDois[x] = [];

  for (let y = 0; y < tamanhoMapaFaseDois; y++) {
    // definindo a matriz toda como um espaco em branco
    mapaFaseDois[x][y] = " ";
  }
}

// função pra gerar as linhas na horizontal
function retaNaHorizontal(tamanho, x, y) {
  for (let i = 0; i < tamanho; i++) {
    mapaFaseDois[x][y] = "<span class = 'parede'>*</span>";
    y++;
  }
}

// função pra gerar as linhas na vertical
function retaNaVertical(tamanho, x, y) {
  for (let i = 0; i < tamanho; i++) {
    mapaFaseDois[x][y] = "<span class = 'parede'>*</span>";
    x++;
  }
}

function espinhoNaVertical(tamanho, x, y) {
  for (let i = 0; i < tamanho; i++) {
    mapaFaseDois[x][y] = "<span class = 'espinho'>#</span>";
    x++;
  }
}
function espinhoNaHorizontal(tamanho, x, y) {
  for (let i = 0; i < tamanho; i++) {
    mapaFaseDois[x][y] = "<span class = 'espinho'>#</span>";
    y++;
  }
}

//essas funções formam o quadrado grande
retaNaHorizontal(24, 0, 3);
retaNaHorizontal(24, 29, 3);

retaNaVertical(24, 3, 0);
retaNaVertical(24, 3, 29);
//segundo quadrado
retaNaHorizontal(22, 5, 4);
retaNaHorizontal(22, 24, 4);
retaNaVertical(20, 5, 4);
retaNaVertical(20, 5, 25);
//espiral
retaNaHorizontal(14, 7, 8);
retaNaVertical(10, 11, 5);
retaNaVertical(10, 11, 24);
retaNaHorizontal(11, 23, 9);
retaNaVertical(8, 12, 22);
retaNaHorizontal(9, 10, 11);
retaNaVertical(8, 12, 9);
retaNaHorizontal(8, 21, 11);
retaNaVertical(5, 15, 20);
retaNaHorizontal(5, 13, 13);
retaNaVertical(5, 14, 12);
retaNaHorizontal(3, 19, 14);
// salas
retaNaHorizontal(5, 5, 1);
retaNaHorizontal(5, 5, 24);
retaNaHorizontal(5, 24, 1);
retaNaHorizontal(5, 24, 24);
retaNaVertical(5, 0, 4);
retaNaVertical(5, 0, 25);
retaNaVertical(5, 24, 25);
retaNaVertical(5, 24, 4);
//espinhos de cima
espinhoNaVertical(3, 1, 6);
espinhoNaVertical(2, 3, 8);
espinhoNaVertical(2, 1, 10);
espinhoNaVertical(3, 1, 12);
espinhoNaVertical(2, 3, 14);
espinhoNaVertical(3, 2, 16);
espinhoNaVertical(2, 1, 18);
espinhoNaVertical(2, 3, 20);
espinhoNaVertical(2, 1, 22);
//espinhos de baixo
espinhoNaVertical(3, 25, 6);
espinhoNaVertical(2, 27, 8);
espinhoNaVertical(2, 25, 10);
espinhoNaVertical(3, 25, 12);
espinhoNaVertical(2, 27, 14);
espinhoNaVertical(3, 26, 16);
espinhoNaVertical(2, 25, 18);
espinhoNaVertical(2, 27, 20);
espinhoNaVertical(2, 25, 22);

// posicionamento de caracteres no mapa
//portas abertas
mapaFaseDois[6][0] = "=";
//paredes independentes
mapaFaseDois[8][7] = "<span class = 'parede'>*</span>";
mapaFaseDois[9][6] = "<span class = 'parede'>*</span>";
mapaFaseDois[10][5] = "<span class = 'parede'>*</span>";
mapaFaseDois[8][22] = "<span class = 'parede'>*</span>";
mapaFaseDois[9][23] = "<span class = 'parede'>*</span>";
mapaFaseDois[10][24] = "<span class = 'parede'>*</span>";
mapaFaseDois[21][6] = "<span class = 'parede'>*</span>";
mapaFaseDois[22][7] = "<span class = 'parede'>*</span>";
mapaFaseDois[23][8] = "<span class = 'parede'>*</span>";
mapaFaseDois[22][20] = "<span class = 'parede'>*</span>";
mapaFaseDois[21][21] = "<span class = 'parede'>*</span>";
mapaFaseDois[20][22] = "<span class = 'parede'>*</span>";
mapaFaseDois[1][2] = "<span class = 'parede'>*</span>";
mapaFaseDois[2][1] = "<span class = 'parede'>*</span>";
mapaFaseDois[3][0] = "<span class = 'parede'>*</span>";
mapaFaseDois[28][2] = "<span class = 'parede'>*</span>";
mapaFaseDois[27][1] = "<span class = 'parede'>*</span>";
mapaFaseDois[26][0] = "<span class = 'parede'>*</span>";
mapaFaseDois[1][27] = "<span class = 'parede'>*</span>";
mapaFaseDois[2][28] = "<span class = 'parede'>*</span>";
mapaFaseDois[3][29] = "<span class = 'parede'>*</span>";
mapaFaseDois[28][27] = "<span class = 'parede'>*</span>";
mapaFaseDois[27][28] = "<span class = 'parede'>*</span>";
mapaFaseDois[26][29] = "<span class = 'parede'>*</span>";
mapaFaseDois[11][21] = "<span class = 'parede'>*</span>";
mapaFaseDois[10][20] = "<span class = 'parede'>*</span>";
mapaFaseDois[11][10] = "<span class = 'parede'>*</span>";
mapaFaseDois[12][9] = "<span class = 'parede'>*</span>";
mapaFaseDois[20][10] = "<span class = 'parede'>*</span>";
mapaFaseDois[20][19] = "<span class = 'parede'>*</span>";
mapaFaseDois[19][20] = "<span class = 'parede'>*</span>";
mapaFaseDois[14][19] = "<span class = 'parede'>*</span>";
mapaFaseDois[13][18] = "<span class = 'parede'>*</span>";
mapaFaseDois[14][12] = "<span class = 'parede'>*</span>";
mapaFaseDois[19][13] = "<span class = 'parede'>*</span>";
mapaFaseDois[18][17] = "<span class = 'parede'>*</span>";

//espaços em branco
mapaFaseDois[3][4] = " ";
mapaFaseDois[3][25] = " ";
mapaFaseDois[26][25] = " ";
mapaFaseDois[24][27] = " ";
mapaFaseDois[16][14] = " ";
//botões
mapaFaseDois[1][3] = "O";
mapaFaseDois[1][26] = "O";
mapaFaseDois[28][3] = "O";
mapaFaseDois[28][26] = "O";
//portas fechadas
mapaFaseDois[14][29] = "<span class = 'portaF'>D</span>";
mapaFaseDois[5][2] = "<span class = 'portaF'>D</span>";
mapaFaseDois[24][2] = "<span class = 'portaF'>D</span>";
mapaFaseDois[5][27] = "<span class = 'portaF'>D</span>";
mapaFaseDois[24][23] = "<span class = 'portaF'>D</span>";
//chaves
mapaFaseDois[23][1] = "<span class = 'chave'>@</span>";
mapaFaseDois[26][1] = "<span class = 'chave'>@</span>";
mapaFaseDois[4][15] = "<span class = 'chave'>@</span>";
mapaFaseDois[25][5] = "<span class = 'chave'>@</span>";
//mistery
mapaFaseDois[16][15] = "?";

function trocarVida() {
  if (contadorDeErro > 0) {
    // mudando o vetorVida da posicao do contador de vidas para a imagem da caneca vazia
    vetorVida[contadorDeErro] = '<img src="imagens/canecaVaziaPequena2.png">';

    // mudando a labelVidaDois no html pelo vetorVida novo usando join para retornar a string nova com a caneca vazia na posicao do contador (maximo 3)
    document.getElementById("labelVidaDois").innerHTML =
      "VIDA : " + vetorVida.join("");

    contadorDeErro--;
  } else if (contadorDeErro === 0) {
    location.href = "gameover.html";
  }
}

// criacao de variaveis para gerar o mapa apenas no raio de 3 unidades do &
let raioVisaoUser = 3;

function geracaoDoMapa() {
  // definicao da variavel do espaco do mapa
  let espacoMapa = " ";

  for (let x = linha - raioVisaoUser; x <= linha + raioVisaoUser; x++) {
    if (x >= 0 && x < tamanhoMapaFaseDois) {
      // colocando a quebra de linha na linha X
      espacoMapa += "\n";

      for (let y = coluna - raioVisaoUser; y <= coluna + raioVisaoUser; y++) {
        if (y >= 0 && y < tamanhoMapaFaseDois) {
          // colocando o espaço entre os personagens na coluna Y
          espacoMapa += " ";

          // condicional if para verificar se x e y sao iguais à posição do personagem
          if (x === linha && y === coluna) {
            espacoMapa += "&";
          } else {
            espacoMapa += mapaFaseDois[x][y];
          }
        }
      }
    }
  }

  // definindo o mapa no id do html
  idMapa.innerHTML = espacoMapa;
}

// colocando a function fora de qualquer outra para fazer ela gerar ao iniciar da pagina
geracaoDoMapa();

// criacao de um booleano pra nao ter colisao com nada quando ele for true (apertando o botão ])
let boolNoClip = false;

let BoolGeradorUmLig = false;
let BoolGeradorDoisLig = false;
let BoolGeradorTresLig = false;
let BoolGeradorQuatroLig = false;

window.addEventListener("keydown", function testePersonagem(event) {
  const teclaPressionada = event.keyCode;

  // tecla W
  if (teclaPressionada === 87) {
    if (boolNoClip == false) {
      // condicional para fazer com que o personagem so se movimente se a linha em cima dele for diferente
      // de <span class = 'parede'>*</span> e D
      if (
        mapaFaseDois[linha - 1][coluna] !== "<span class = 'parede'>*</span>" &&
        mapaFaseDois[linha - 1][coluna] !== "<span class = 'portaF'>D</span>"
      ) {
        // verificação se há um "#" na posição anterior à posição atual do personagem na matriz
        if (
          mapaFaseDois[linha - 1][coluna] === "<span class = 'espinho'>#</span>"
        ) {
          linha = 6;
          coluna = 1;
          geracaoDoMapa();
          trocarVida();
        } else {
          // linha-- porque a cada linha que diminiui o personagem vai pra cima, porque a matriz vai de 0 a 14
          // entao o movimento de ir pra cima é "decrescente"
          linha--;
          geracaoDoMapa();
        }
      }
    } else {
      linha--;
      geracaoDoMapa();
    }
  }

  // tecla S
  if (teclaPressionada === 83) {
    if (boolNoClip == false) {
      // condicional para fazer com que o personagem so se movimente se a linha em baixo dele for diferente
      // de <span class = 'parede'>*</span> e D
      if (
        mapaFaseDois[linha + 1][coluna] !== "<span class = 'parede'>*</span>" &&
        mapaFaseDois[linha + 1][coluna] !== "<span class = 'portaF'>D</span>"
      ) {
        // verificação se há um "#" na posição anterior à posição atual do personagem na matriz
        if (
          mapaFaseDois[linha + 1][coluna] === "<span class = 'espinho'>#</span>"
        ) {
          linha = 6;
          coluna = 1;
          geracaoDoMapa();
          trocarVida();
        } else {
          linha++;
          geracaoDoMapa();
        }
      }
    } else {
      linha++;
      geracaoDoMapa();
    }
  }

  // tecla D
  if (teclaPressionada === 68) {
    if (boolNoClip == false) {
      // condicional para fazer com que o personagem so se movimente se a linha na direita dele for diferente
      // de <span class = 'parede'>*</span> e D
      if (
        mapaFaseDois[linha][coluna + 1] !== "<span class = 'parede'>*</span>" &&
        mapaFaseDois[linha][coluna + 1] !== "<span class = 'portaF'>D</span>"
      ) {
        // verificação se há um "#" na posição anterior à posição atual do personagem na matriz
        if (
          mapaFaseDois[linha][coluna + 1] === "<span class = 'espinho'>#</span>"
        ) {
          linha = 6;
          coluna = 1;
          geracaoDoMapa();
          trocarVida();
        } else {
          coluna++;
          geracaoDoMapa();
        }
      }
    } else {
      coluna++;
      geracaoDoMapa();
    }
    if (linha === 14 && coluna === 29) {
      this.window.location.href = "cutscene3.html";
    }
  }

  // tecla A
  if (teclaPressionada === 65) {
    // condicional para fazer com que o personagem so se movimente se a linha na esquerda dele for diferente
    // de <span class = 'parede'>*</span> e D
    if (boolNoClip == false) {
      if (
        mapaFaseDois[linha][coluna - 1] !== "<span class = 'parede'>*</span>" &&
        mapaFaseDois[linha][coluna - 1] !== "<span class = 'portaF'>D</span>"
      ) {
        if (
          mapaFaseDois[linha][coluna - 1] === "<span class = 'espinho'>#</span>"
        ) {
          linha = 6;
          coluna = 1;
          geracaoDoMapa();
          trocarVida();
        } else {
          coluna--;
          geracaoDoMapa();
        }
      }
    } else {
      coluna--;
      geracaoDoMapa();
    }
  }

  // tecla I
  if (teclaPressionada === 73) {
    //aumento do campo de visão
    if (BoolGeradorUmLig == false) {
      if (linha === 1 && coluna === 3) {
        raioVisaoUser += 6;
        geracaoDoMapa();
        BoolGeradorUmLig = true;
      }
    }
    if (BoolGeradorDoisLig == false) {
      if (linha === 1 && coluna === 26) {
        raioVisaoUser += 10;
        geracaoDoMapa();
        BoolGeradorDoisLig = true;
      }
    }
    if (BoolGeradorTresLig == false) {
      if (linha === 28 && coluna === 26) {
        raioVisaoUser += 6;
        geracaoDoMapa();
        BoolGeradorTresLig = true;
      }
    }
    if (BoolGeradorQuatroLig == false) {
      if (linha === 28 && coluna === 3) {
        raioVisaoUser += 6;
        geracaoDoMapa();
        BoolGeradorQuatroLig = true;
      }
    }
    //funcionamento das chaves
    if (linha === 23 && coluna === 1) {
      mapaFaseDois[23][1] = " ";
      mapaFaseDois[5][2] = "=";
      geracaoDoMapa()
    }
    if (linha === 4 && coluna === 15) {
      mapaFaseDois[24][2] = "=";
      mapaFaseDois[4][15] = " ";
      geracaoDoMapa()
    }
    if (linha === 26 && coluna === 1) {
      mapaFaseDois[5][27] = "=";
      mapaFaseDois[26][1] = " ";
      geracaoDoMapa()
    }
    if (linha === 25 && coluna === 5) {
      mapaFaseDois[24][23] = "=";
      mapaFaseDois[25][5] = " ";
      geracaoDoMapa()
    }
    if (linha === 16 && coluna === 15) {
      mapaFaseDois[16][15] = " ";
      //espinhos da espiral
      espinhoNaHorizontal(3, 9, 7);
      espinhoNaHorizontal(2, 13, 6);
      espinhoNaHorizontal(3, 11, 7);
      espinhoNaHorizontal(2, 16, 7);
      espinhoNaHorizontal(2, 22, 8);
      espinhoNaHorizontal(2, 12, 10);
      espinhoNaHorizontal(2, 12, 20);
      espinhoNaHorizontal(2, 18, 6);
      espinhoNaHorizontal(2, 20, 8);
      espinhoNaVertical(5, 13, 10);
      espinhoNaVertical(3, 15, 17);
      espinhoNaHorizontal(3, 15, 14);
      espinhoNaVertical(2, 16, 14);
      //espinhos avulsos
      mapaFaseDois[11][22] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[9][22] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[9][20] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[9][16] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[9][12] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[8][18] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[8][14] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[8][10] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[14][6] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[11][18] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[11][14] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[6][2] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[7][2] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[7][1] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[19][12] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[12][16] = "<span class = 'espinho'>#</span>";
      mapaFaseDois[14][29] = "=";
      geracaoDoMapa();
    }
  }
  //cheat
  if (teclaPressionada === 221) {
    boolNoClip = true;
  }
  if (teclaPressionada === 219) {
    boolNoClip = false;
  }
});

function voltar(params) {
  location.href = "index.html";
}

for (let x = 0; x < vetorVida.length; x++) {
  document.getElementById("labelVidaDois").innerHTML += vetorVida[x];
}

let contadorDeErro = 2;

function trocarVida() {
  if (contadorDeErro > 0) {
    // mudando o vetorVida da posicao do contador de vidas para a imagem da caneca vazia
    vetorVida[contadorDeErro] = '<img src="imagens/canecaVaziaPequena2.png">';

    // mudando a labelVidaDois no html pelo vetorVida novo usando join para retornar a string nova com a caneca vazia na posicao do contador (maximo 3)
    document.getElementById("labelVidaDois").innerHTML =
      "VIDA : " + vetorVida.join("");

    contadorDeErro--;
  } else if (contadorDeErro === 0) {
    location.href = "gameover.html";
  }
}
