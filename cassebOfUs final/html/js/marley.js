let idMapa = document.getElementById("mapaFaseTres");
let tamanhoMapaFaseTres = 60;
let vetorVida = [
  '<img src="imagens/canecaPequena.png">',
  '<img src="imagens/canecaPequena.png">',
  '<img src="imagens/canecaPequena.png">',
];

// definicao de spawn do personagem
let linha = 6;
let coluna = 1;

// criacao da matriz do mapa
const mapaFaseTres = [];

// laco de repeticao pra criar a matriz [x][y]
for (let x = 0; x < tamanhoMapaFaseTres; x++) {
  mapaFaseTres[x] = [];

  for (let y = 0; y < tamanhoMapaFaseTres; y++) {
    // definindo a matriz toda como um espaco em branco
    mapaFaseTres[x][y] = " ";
  }
}

// função pra gerar as linhas na horizontal
function retaNaHorizontal(tamanho, x, y) {
  for (let i = 0; i < tamanho; i++) {
    mapaFaseTres[x][y] = "<span class = 'parede'>*</span>";
    y++;
  }
}

// função pra gerar as linhas na vertical
function retaNaVertical(tamanho, x, y) {
  for (let i = 0; i < tamanho; i++) {
    mapaFaseTres[x][y] = "<span class = 'parede'>*</span>";
    x++;
  }
}

function espinhoNaVertical(tamanho, x, y) {
  for (let i = 0; i < tamanho; i++) {
    mapaFaseTres[x][y] = "<span class = 'espinho'>#</span>";
    x++;
  }
}
function espinhoNaHorizontal(tamanho, x, y) {
  for (let i = 0; i < tamanho; i++) {
    mapaFaseTres[x][y] = "<span class = 'espinho'>#</span>";
    y++;
  }
}

function apagadorNaVertical(tamanho, x, y) {
  for (let i = 0; i < tamanho; i++) {
    mapaFaseTres[x][y] = " ";
    x++;
  }
}
function apagadorNaHorizontal(tamanho, x, y) {
  for (let i = 0; i < tamanho; i++) {
    mapaFaseTres[x][y] = " ";
    y++;
  }
}

//essas funções formam o quadrado grande
retaNaHorizontal(60, 0, 0);
retaNaHorizontal(60, 59, 0);

retaNaVertical(60, 0, 0);
retaNaVertical(60, 0, 59);
//salas
retaNaHorizontal(60, 14, 0);
retaNaHorizontal(60, 29, 0);
retaNaHorizontal(60, 44, 0);
retaNaVertical(60, 0, 29); 
//sala 1 
retaNaHorizontal(2,8,27)
retaNaHorizontal(2,10,27)
retaNaHorizontal(14,5,1) 
retaNaHorizontal(14,9,1)
retaNaHorizontal(12,5,18)
retaNaVertical(4,1,14)  
retaNaVertical(4,10,14)  
retaNaVertical(14,1,18) 

//posicionamento dos caracteres
// TP's
mapaFaseTres[9][29] = ">"
mapaFaseTres[54][29] = "<"
mapaFaseTres[52][59] = ">"
mapaFaseTres[21][0] = "<"
mapaFaseTres[21][29] = ">"
mapaFaseTres[33][29] = "<"
mapaFaseTres[39][29] = ">"
mapaFaseTres[37][59] = ">"
mapaFaseTres[52][0] = "<"
mapaFaseTres[48][29] = ">"
mapaFaseTres[4][29] = "<"
mapaFaseTres[7][59] = ">"
mapaFaseTres[37][0] = "<"
mapaFaseTres[25][29] = "<"
// portas
mapaFaseTres[3][14] = "<span class = 'portaF'>D</span>"
mapaFaseTres[11][14] = "<span class = 'portaF'>D</span>"
mapaFaseTres[11][18] = "<span class = 'portaF'>D</span>"
mapaFaseTres[3][18] = "<span class = 'portaF'>D</span>"


//chaves
mapaFaseTres[13][15] = "<span class = 'chave'>@</span>"
mapaFaseTres[2][1] = "<span class = 'chave'>@</span>"
mapaFaseTres[11][1] = "<span class = 'chave'>@</span>"
mapaFaseTres[2][28] = "<span class = 'chave'>@</span>"


function trocarVida() {
  if (contadorDeErro > 0) {
    // mudando o vetorVida da posicao do contador de vidas para a imagem da caneca vazia
    vetorVida[contadorDeErro] = '<img src="imagens/canecaVaziaPequena2.png">';

    // mudando a labelVidaTres no html pelo vetorVida novo usando join para retornar a string nova com a caneca vazia na posicao do contador (maximo 3)
    document.getElementById("labelVidaTres").innerHTML =
      "VIDA : " + vetorVida.join("");

    contadorDeErro--;
  } else if (contadorDeErro === 0) {
    location.href = "gameover.html";
  }
}

// criacao de variaveis para gerar o mapa apenas no raio de 3 unidades do &
let raioVisaoUser = 60;

function geracaoDoMapa() {
  // definicao da variavel do espaco do mapa
  let espacoMapa = " ";

  for (let x = 0; x <= linha + raioVisaoUser; x++) {
    if (x >= 0 && x < tamanhoMapaFaseTres) {
      // colocando a quebra de linha na linha X
      espacoMapa += "\n";

      for (let y = 0; y <= coluna + raioVisaoUser; y++) {
        if (y >= 0 && y < tamanhoMapaFaseTres) {
          // colocando o espaço entre os personagens na coluna Y
          espacoMapa += " ";

          // condicional if para verificar se x e y sao iguais à posição do personagem
          if (x === linha && y === coluna) {
            espacoMapa += "&";
          } else {
            espacoMapa += mapaFaseTres[x][y];
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
let boolSalaUm = false;
let contadorLetras = 0;

window.addEventListener("keydown", function testePersonagem(event) {
  const teclaPressionada = event.keyCode;

  // tecla W
  if (teclaPressionada === 87) {
    if (boolNoClip == false) {
      // condicional para fazer com que o personagem so se movimente se a linha em cima dele for diferente
      // de * e D
      if (
        mapaFaseTres[linha - 1][coluna] !== "<span class = 'parede'>*</span>" &&
        mapaFaseTres[linha - 1][coluna] !== "<span class = 'portaF'>D</span>"
      ) {
        // verificação se há um "#" na posição anterior à posição atual do personagem na matriz
        if (
          mapaFaseTres[linha - 1][coluna] === "<span class = 'espinho'>#</span>"
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
      // de * e D
      if (
        mapaFaseTres[linha + 1][coluna] !== "<span class = 'parede'>*</span>" &&
        mapaFaseTres[linha + 1][coluna] !== "<span class = 'portaF'>D</span>"
      ) {
        // verificação se há um "#" na posição anterior à posição atual do personagem na matriz
        if (
          mapaFaseTres[linha + 1][coluna] === "<span class = 'espinho'>#</span>"
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
      // de * e D
      if (
        mapaFaseTres[linha][coluna + 1] !== "<span class = 'parede'>*</span>" &&
        mapaFaseTres[linha][coluna + 1] !== "<span class = 'portaF'>D</span>" &&
        mapaFaseTres[linha][coluna + 1] !== "<"
      ) {
        // verificação se há um "#" na posição anterior à posição atual do personagem na matriz
        if (
          mapaFaseTres[linha][coluna + 1] === "<span class = 'espinho'>#</span>"
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
      if (linha === 9 && coluna === 29) {
        linha = 54;
        coluna = 30;
        
        if(boolSalaUm == false){
          //sala 2
          retaNaHorizontal(5,53,30);
          retaNaHorizontal(6,50,32);
          retaNaHorizontal(23,47,32);
          retaNaHorizontal(13,56,42);
          retaNaVertical(6,53,35); 
          retaNaVertical(9,50,38); 
          retaNaVertical(3,47,32); 
          retaNaVertical(9,47,54); 
          retaNaVertical(15,45,57); 
          retaNaVertical(9,48,42); 
          //mistery
          mapaFaseTres[58][34] = "<span class = 'interrogacao'>?</span>"
          mapaFaseTres[48][33] = "<span class = 'interrogacao'>?</span>"
          //porta
          mapaFaseTres[55][35] = "<span class = 'portaF'>D</span>"
          geracaoDoMapa();
          boolSalaUm = true
        }
      }
      if (linha === 52 && coluna === 59) {
        linha = 21;
        coluna = 1;
        //sala 3
        espinhoNaVertical(11,18,3)
        espinhoNaVertical(11,15,6)
        espinhoNaVertical(11,18,9)
        espinhoNaVertical(11,15,12)
        espinhoNaHorizontal(2,25,1)
        espinhoNaHorizontal(10,25,12)
        espinhoNaHorizontal(13,22,16)
        espinhoNaVertical(9,15,16)
        mapaFaseTres[15][14] = "<span class = 'interrogacao'>?</span>"
        
        geracaoDoMapa();
      }
      if (linha === 21 && coluna === 29) {
        linha = 33;
        coluna = 30;
        // sala 4 
        espinhoNaVertical(10,32,32)
        espinhoNaHorizontal(3,41,32)
        espinhoNaHorizontal(3,32,32)
        mapaFaseTres[30][36] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[32][36] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[34][36] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[36][36] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[38][36] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[40][36] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[42][36] = "<span class = 'espinho'>#</span>"

        mapaFaseTres[31][39] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[33][39] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[35][39] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[37][39] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[39][39] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[41][39] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[43][39] = "<span class = 'espinho'>#</span>"

        mapaFaseTres[30][42] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[32][42] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[34][42] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[36][42] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[38][42] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[40][42] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[42][42] = "<span class = 'espinho'>#</span>"

        mapaFaseTres[31][45] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[33][45] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[35][45] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[37][45] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[39][45] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[41][45] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[43][45] = "<span class = 'espinho'>#</span>"

        mapaFaseTres[30][48] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[32][48] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[34][48] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[36][48] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[38][48] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[40][48] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[42][48] = "<span class = 'espinho'>#</span>"

        mapaFaseTres[31][51] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[33][51] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[35][51] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[37][51] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[39][51] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[41][51] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[43][51] = "<span class = 'espinho'>#</span>"

        mapaFaseTres[30][54] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[32][54] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[34][54] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[36][54] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[38][54] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[40][54] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[42][54] = "<span class = 'espinho'>#</span>"

        mapaFaseTres[31][57] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[33][57] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[35][57] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[37][57] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[39][57] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[41][57] = "<span class = 'espinho'>#</span>"
        mapaFaseTres[43][57] = "<span class = 'espinho'>#</span>"

        geracaoDoMapa();
      }
      if (linha === 37 && coluna === 59) {
        linha = 52;
        coluna = 1;
          // SALA 5
          // Pt1
          retaNaVertical(14,45,2)
          mapaFaseTres[45][1] = "O"
          geracaoDoMapa();
      }
      if (linha === 48 && coluna === 29) {
        linha = 4;
        coluna = 30;
        // sala 6
        //Pt1
        espinhoNaVertical(6,1,35)
        espinhoNaVertical(4,3,33)
        espinhoNaHorizontal(6,7,30)
        espinhoNaHorizontal(2,3,31)
        mapaFaseTres[6][34] = "O"
        mapaFaseTres[2][31] = "<span class = 'espinho'>#</span>"
        geracaoDoMapa();
      }
      if (linha === 7 && coluna === 59) {
        linha = 37;
        coluna = 1;
        // apagando a cruz grande 
        apagadorNaVertical(29,15,29)
        apagadorNaHorizontal(58,29,1)
        //apagando sala 3
        apagadorNaVertical(12,15,16)
        apagadorNaVertical(14,15,1)
        apagadorNaVertical(7,18,7)
        apagadorNaHorizontal(13,15,1) 
        apagadorNaHorizontal(10,18,7) 
        apagadorNaHorizontal(13,22,16) 
        apagadorNaHorizontal(17,28,1) 
        apagadorNaVertical(6,22,10)
        apagadorNaHorizontal(4,22,10) 
        apagadorNaHorizontal(3,19,2) 
        apagadorNaHorizontal(3,17,5)
        apagadorNaHorizontal(3,21,4)  
        apagadorNaHorizontal(2,23,5) 
        apagadorNaHorizontal(3,25,13) 
        apagadorNaVertical(5,23,3)
        apagadorNaVertical(3,25,5)
        apagadorNaVertical(4,25,18)
        apagadorNaVertical(4,23,20)
        apagadorNaVertical(4,25,22)
        apagadorNaVertical(4,23,24)
        apagadorNaVertical(4,25,26)
        apagadorNaVertical(3,20,12)
        apagadorNaVertical(3,20,11)
        mapaFaseTres[21][1] = " "
        mapaFaseTres[15][14] = " "
        mapaFaseTres[16][12] = " "
        mapaFaseTres[16][11] = " "
        mapaFaseTres[17][15] = " "
        mapaFaseTres[17][14] = " "
        
        mapaFaseTres[15][13] = " "
        mapaFaseTres[16][16] = " "
        mapaFaseTres[28][28] = " "
        //apagando sala 4
        apagadorNaVertical(10,32,32)
        apagadorNaHorizontal(3,41,32)
        apagadorNaHorizontal(3,32,32)
        mapaFaseTres[30][36] = " "
        mapaFaseTres[32][36] = " "
        mapaFaseTres[34][36] = " "
        mapaFaseTres[36][36] = " "
        mapaFaseTres[38][36] = " "
        mapaFaseTres[40][36] = " "
        mapaFaseTres[42][36] = " "

        mapaFaseTres[31][39] = " "
        mapaFaseTres[33][39] = " "
        mapaFaseTres[35][39] = " "
        mapaFaseTres[37][39] = " "
        mapaFaseTres[39][39] = " "
        mapaFaseTres[41][39] = " "
        mapaFaseTres[43][39] = " "

        mapaFaseTres[30][42] = " "
        mapaFaseTres[32][42] = " "
        mapaFaseTres[34][42] = " "
        mapaFaseTres[36][42] = " "
        mapaFaseTres[38][42] = " "
        mapaFaseTres[40][42] = " "
        mapaFaseTres[42][42] = " "

        mapaFaseTres[31][45] = " "
        mapaFaseTres[33][45] = " "
        mapaFaseTres[35][45] = " "
        mapaFaseTres[37][45] = " "
        mapaFaseTres[39][45] = " "
        mapaFaseTres[41][45] = " "
        mapaFaseTres[43][45] = " "

        mapaFaseTres[30][48] = " "
        mapaFaseTres[32][48] = " "
        mapaFaseTres[34][48] = " "
        mapaFaseTres[36][48] = " "
        mapaFaseTres[38][48] = " "
        mapaFaseTres[40][48] = " "
        mapaFaseTres[42][48] = " "

        mapaFaseTres[31][51] = " "
        mapaFaseTres[33][51] = " "
        mapaFaseTres[35][51] = " "
        mapaFaseTres[37][51] = " "
        mapaFaseTres[39][51] = " "
        mapaFaseTres[41][51] = " "
        mapaFaseTres[43][51] = " "

        mapaFaseTres[30][54] = " "
        mapaFaseTres[32][54] = " "
        mapaFaseTres[34][54] = " "
        mapaFaseTres[36][54] = " "
        mapaFaseTres[38][54] = " "
        mapaFaseTres[40][54] = " "
        mapaFaseTres[42][54] = " "

        mapaFaseTres[31][57] = " "
        mapaFaseTres[33][57] = " "
        mapaFaseTres[35][57] = " "
        mapaFaseTres[37][57] = " "
        mapaFaseTres[39][57] = " "
        mapaFaseTres[41][57] = " "
        mapaFaseTres[43][57] = " "
        //sala 7
        retaNaHorizontal(11,22,24)
        retaNaHorizontal(11,32,24)
        retaNaVertical(11,22,24)
        retaNaVertical(11,22,34)
        mapaFaseTres[27][29] = "C"
        mapaFaseTres[15][58] = "<span class = 'chave'>@</span>"
        mapaFaseTres[15][1] = "<span class = 'chave'>@</span>"
        mapaFaseTres[43][1] = "<span class = 'chave'>@</span>"
        mapaFaseTres[43][58] = "<span class = 'chave'>@</span>"
        geracaoDoMapa();
      }
      
      if (linha === 39 && coluna === 29) {
        linha = 25;
        coluna = 30;
        geracaoDoMapa();
      }
    } else {
      coluna++;
      geracaoDoMapa();
    }
   
  }

  // tecla A
  if (teclaPressionada === 65) {
    // condicional para fazer com que o personagem so se movimente se a linha na esquerda dele for diferente
    // de * e D
    if (boolNoClip == false) {
      if (
        mapaFaseTres[linha][coluna - 1] !== "<span class = 'parede'>*</span>" &&
        mapaFaseTres[linha][coluna - 1] !== "<span class = 'portaF'>D</span>" &&
        mapaFaseTres[linha][coluna - 1] !== ">"
      ) {
        if (
          mapaFaseTres[linha][coluna - 1] === "<span class = 'espinho'>#</span>"
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
      if (linha == 54 && coluna === 29) {
          linha = 9;
          coluna = 28;
          geracaoDoMapa();
      }
      if (linha === 21 && coluna === 0) {
        linha = 52;
        coluna = 58;
        geracaoDoMapa();
      }
      if (linha === 33 && coluna === 29) {
        linha = 21;
        coluna = 28;
        geracaoDoMapa();
      }
      if (linha === 52 && coluna === 0) {
        linha = 37;
        coluna = 58;
        geracaoDoMapa();
      }
      if (linha === 4 && coluna === 29) {
        linha = 48;
        coluna = 28;
        geracaoDoMapa();
      }
      if (linha === 37 && coluna === 0) {
        linha = 7
        coluna = 58;
        geracaoDoMapa();
      }
      if (linha === 25 && coluna === 29) {
        linha = 39
        coluna = 28;
        geracaoDoMapa();
      }
    } else {
      coluna--;
      geracaoDoMapa();
    }
  }

  // tecla I 
  
  if (teclaPressionada === 73) {
    if (linha === 13 && coluna === 15) {
      mapaFaseTres[13][15] = " "
      mapaFaseTres[3][14] = "="
      geracaoDoMapa(); 
    }
    if (linha === 2 && coluna === 1) {
      mapaFaseTres[2][1] = " "
      mapaFaseTres[11][14] = "="
      geracaoDoMapa(); 
    }
    if (linha === 11 && coluna === 1) {
      mapaFaseTres[11][1] = " "
      mapaFaseTres[3][18] = "="
      geracaoDoMapa(); 
    }
    if (linha === 2 && coluna ===28) {
      mapaFaseTres[2][28] = " "
      mapaFaseTres[11][18] = "="
      geracaoDoMapa(); 
    }
    if (linha === 58 && coluna === 34) {
      mapaFaseTres[58][34] = " "
      mapaFaseTres[7][1] = "<span class = 'chave'>@</span>"
      geracaoDoMapa();
    }
    if (linha === 7 && coluna === 1 && mapaFaseTres[58][34] === " ") {
      mapaFaseTres[7][1] = " "
      mapaFaseTres[55][35] = "="
      geracaoDoMapa(); 
    }
    if (linha === 48 && coluna === 33) {
      retaNaHorizontal(5,50,46);
      retaNaHorizontal(5,54,46);
      retaNaVertical(5,50,46); 
      retaNaVertical(5,50,50); 
      mapaFaseTres[48][33] = " "
      mapaFaseTres[48][42] = " "
      mapaFaseTres[49][42] = " "
      mapaFaseTres[54][48] = "<span class = 'portaF'>D</span>" 
      mapaFaseTres[58][31] = "<span class = 'chave'>@</span>"
      mapaFaseTres[52][48] = "<span class = 'interrogacao'>?</span>"
      geracaoDoMapa()
    }
    if (linha === 58 && coluna === 31 && mapaFaseTres[58][31] === "<span class = 'chave'>@</span>") {
        mapaFaseTres[58][31] = " "
        mapaFaseTres[54][48] = "="
        geracaoDoMapa()
    }
    if (linha === 52 && coluna === 48) {
        mapaFaseTres[52][54] = "="
        mapaFaseTres[52][57] = "="
        geracaoDoMapa()
    }
    if (linha === 15 && coluna === 14) {
      // apagando a sala 3
      apagadorNaVertical(11,18,3)
      apagadorNaVertical(11,15,6)
      apagadorNaVertical(11,18,9)
      apagadorNaVertical(11,15,12)
      apagadorNaHorizontal(2,25,1)
      apagadorNaHorizontal(10,25,12)
      apagadorNaHorizontal(13,22,16)
      apagadorNaVertical(9,15,16)
      //sala 3 pt 2
      espinhoNaVertical(12,15,16)
      espinhoNaVertical(14,15,1)
      espinhoNaVertical(7,18,7)
      espinhoNaHorizontal(13,15,1) 
      espinhoNaHorizontal(10,18,7) 
      espinhoNaHorizontal(13,22,16) 
      espinhoNaHorizontal(17,28,1) 
      espinhoNaVertical(6,22,10)
      espinhoNaHorizontal(4,22,10) 
      espinhoNaHorizontal(3,19,2) 
      espinhoNaHorizontal(3,17,5)
      espinhoNaHorizontal(3,21,4)  
      espinhoNaHorizontal(2,23,5) 
      espinhoNaHorizontal(3,25,13) 
      espinhoNaVertical(5,23,3)
      espinhoNaVertical(3,25,5)
      espinhoNaVertical(4,25,18)
      espinhoNaVertical(4,23,20)
      espinhoNaVertical(4,25,22)
      espinhoNaVertical(4,23,24)
      espinhoNaVertical(4,25,26)
      espinhoNaVertical(3,20,12)
      espinhoNaVertical(3,20,11)
      mapaFaseTres[21][1] = " "
      mapaFaseTres[15][14] = " "
      mapaFaseTres[16][12] = "<span class = 'espinho'>#</span>"
      mapaFaseTres[16][11] = "<span class = 'espinho'>#</span>"
      mapaFaseTres[17][15] = "<span class = 'espinho'>#</span>"
      mapaFaseTres[17][14] = "<span class = 'espinho'>#</span>"
      
      mapaFaseTres[15][13] = "<span class = 'espinho'>#</span>"
      mapaFaseTres[16][16] = "<span class = 'portaF'>D</span>"
      mapaFaseTres[28][28] = "<span class = 'chave'>@</span>"
      geracaoDoMapa();
    }
    if (linha === 28 && coluna == 28 && mapaFaseTres[15][14] === " ") {
      mapaFaseTres[28][28] = " "
      mapaFaseTres[16][16] = "="
      geracaoDoMapa();
    }
    if (linha === 45 && coluna === 1 && mapaFaseTres[45][1] === "O") {
    //apagando a Pt1
    apagadorNaVertical(14,45,2)
    mapaFaseTres[45][1] = " "
    //Pt2
    retaNaHorizontal(28,46,1)
    mapaFaseTres[45][28] = "O"
    geracaoDoMapa();
    }
    if (linha === 45 && coluna === 28 && mapaFaseTres[45][28] === "O") {
    //Apagando a Pt2
    apagadorNaHorizontal(28,46,1)
    mapaFaseTres[45][28] = " "
      //Pt3
    retaNaVertical(12,46,27)
    retaNaVertical(14,45,25)
    mapaFaseTres[58][28] = "O" 
    mapaFaseTres[46][28] = "<span class = 'parede'>*</span>"
    mapaFaseTres[57][28] = "<span class = 'parede'>*</span>"
    geracaoDoMapa();
    }
    if (linha === 58 && coluna === 28 && mapaFaseTres[58][28] === "O" ) {
      //apagando a P3
      apagadorNaVertical(12,46,27)
      apagadorNaVertical(14,45,25)
      mapaFaseTres[58][28] = " " 
      mapaFaseTres[46][28] = " "
      mapaFaseTres[57][28] = " "
      //Pt4
      retaNaHorizontal(28,57,1)
      mapaFaseTres[58][1] = "O" 
      geracaoDoMapa();
    }
    if (linha === 58 && coluna === 1 && mapaFaseTres[58][1] === "O") {
      //apagando a Pt4
      apagadorNaHorizontal(28,57,1)
      mapaFaseTres[58][1] = " " 
      //Pt5
      retaNaVertical(5,55,3)
      retaNaVertical(6,49,17)
      retaNaVertical(6,48,15)
      retaNaHorizontal(15,55,3)
      retaNaHorizontal(15,53,1)
      retaNaHorizontal(12,49,17)
      retaNaHorizontal(14,47,15)
      geracaoDoMapa();
    }
    if (linha === 6 && coluna === 34 && mapaFaseTres[6][34] === "O") {
          // sala 6
          //apagando a Pt1
          apagadorNaVertical(6,1,35)
          apagadorNaVertical(4,3,33)
          apagadorNaHorizontal(6,7,30)
          apagadorNaHorizontal(2,3,31)
          mapaFaseTres[6][34] = " "
          mapaFaseTres[2][31] = " "
          //Pt2
          espinhoNaVertical(12,1,33)
          espinhoNaVertical(11,1,58)
          espinhoNaVertical(10,1,35)
          espinhoNaVertical(10,3,37)
          espinhoNaVertical(10,1,39)
          espinhoNaVertical(10,3,41)
          espinhoNaVertical(5,5,43)
          espinhoNaVertical(10,1,54)
          espinhoNaHorizontal(26,12,33)
          espinhoNaHorizontal(12,3,41)
          espinhoNaHorizontal(11,5,43)
          espinhoNaHorizontal(15,10,43)
          mapaFaseTres[11][57] = "O" 
          geracaoDoMapa();
    }
    if (linha === 11 && coluna === 57 && mapaFaseTres[11][57] === "O") {
        //Sala 6
        //apagando a Pt2
          apagadorNaVertical(12,1,33)
          apagadorNaVertical(11,1,58)
          apagadorNaVertical(10,1,35)
          apagadorNaVertical(10,3,37)
          apagadorNaVertical(10,1,39)
          apagadorNaVertical(10,3,41)
          apagadorNaVertical(5,5,43)
          apagadorNaVertical(10,1,54)
          apagadorNaHorizontal(26,12,33)
          apagadorNaHorizontal(12,3,41)
          apagadorNaHorizontal(11,5,43)
          apagadorNaHorizontal(15,10,43)
          mapaFaseTres[11][57] = " " 
          //Pt3
          espinhoNaHorizontal(17,4,39)
          espinhoNaHorizontal(20,10,39)
          espinhoNaHorizontal(4,8,55)
          espinhoNaHorizontal(2,6,57)
          espinhoNaHorizontal(2,13,53)
          espinhoNaHorizontal(2,12,53)
          espinhoNaHorizontal(2,13,47)
          espinhoNaHorizontal(2,12,47)
          espinhoNaHorizontal(2,11,44)
          espinhoNaHorizontal(2,12,44)
          espinhoNaHorizontal(2,13,41)
          espinhoNaHorizontal(2,12,41)
          espinhoNaHorizontal(6,2,50)
          espinhoNaHorizontal(2,11,50)
          espinhoNaHorizontal(2,12,50)

          espinhoNaVertical(2,1,40)
          espinhoNaVertical(2,1,44)
          espinhoNaVertical(2,1,48)
          espinhoNaVertical(2,2,42)
          espinhoNaVertical(2,2,46)
          espinhoNaVertical(2,2,50)
          espinhoNaVertical(13,1,36)
          espinhoNaVertical(5,5,39)
          espinhoNaVertical(4,4,55)
          espinhoNaVertical(6,1,57)
          geracaoDoMapa();
    }
    if (linha === 15 && coluna === 58 && mapaFaseTres[15][58] === "<span class = 'chave'>@</span>") {
      // T
      contadorLetras++
      mapaFaseTres[15][58] = " "
      retaNaHorizontal(4,16,16)
      retaNaVertical(4,17,18)
      retaNaVertical(4,17,17)
      geracaoDoMapa();
      if (contadorLetras === 4) {
        apagadorNaHorizontal(11,22,24)
        apagadorNaHorizontal(11,32,24)
        apagadorNaVertical(11,22,24)
        apagadorNaVertical(11,22,34)
        geracaoDoMapa(); 
      }
    }
    if (linha === 15 && coluna === 1 && mapaFaseTres[15][1] === "<span class = 'chave'>@</span>") {
      //C
      contadorLetras++;
      mapaFaseTres[15][1] = " "
      retaNaVertical(5,16,21)
      retaNaVertical(5,16,22)
      retaNaHorizontal(2,16,23)
      retaNaHorizontal(2,20,23)
      geracaoDoMapa();
      if (contadorLetras === 4) {
        apagadorNaHorizontal(11,22,24)
        apagadorNaHorizontal(11,32,24)
        apagadorNaVertical(11,22,24)
        apagadorNaVertical(11,22,34)
        geracaoDoMapa(); 
      }
    }
    if (linha === 43 && coluna === 1 && mapaFaseTres[43][1] === "<span class = 'chave'>@</span>") {
      //O
      contadorLetras++;
      mapaFaseTres[43][1] = " " 
      retaNaVertical(5,16,27)
      retaNaVertical(5,16,26)
      retaNaVertical(5,16,30)
      retaNaVertical(5,16,31)
      mapaFaseTres[20][28] = "<span class = 'parede'>*</span>"
      mapaFaseTres[20][29] = "<span class = 'parede'>*</span>"
      mapaFaseTres[16][28] = "<span class = 'parede'>*</span>"
      mapaFaseTres[16][29] = "<span class = 'parede'>*</span>"
      geracaoDoMapa(); 
      if (contadorLetras === 4) {
        apagadorNaHorizontal(11,22,24)
        apagadorNaHorizontal(11,32,24)
        apagadorNaVertical(11,22,24)
        apagadorNaVertical(11,22,34)
        geracaoDoMapa(); 
      }
    } 
    if (linha === 43 && coluna === 58 && mapaFaseTres[43][58] === "<span class = 'chave'>@</span>") {
      //U
      contadorLetras++;
      mapaFaseTres[43][58] = " "
      retaNaVertical(5,16,38)
      retaNaVertical(5,16,37)
      retaNaVertical(5,16,33)
      retaNaVertical(5,16,34)
      retaNaHorizontal(3,20,34)
      geracaoDoMapa();
      if (contadorLetras === 4) {
        apagadorNaHorizontal(11,22,24)
        apagadorNaHorizontal(11,32,24)
        apagadorNaVertical(11,22,24)
        apagadorNaVertical(11,22,34)
        geracaoDoMapa(); 
      }
    }
    if (linha === 27 && coluna === 29 && mapaFaseTres[27][29] === "C") {
      this.location.href = "vitoria.html"
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
  document.getElementById("labelVidaTres").innerHTML += vetorVida[x];
}

let contadorDeErro = 2;

function trocarVida() {
  if (contadorDeErro > 0) {
    // mudando o vetorVida da posicao do contador de vidas para a imagem da caneca vazia
    vetorVida[contadorDeErro] = '<img src="imagens/canecaVaziaPequena2.png">';

    // mudando a labelVidaTres no html pelo vetorVida novo usando join para retornar a string nova com a caneca vazia na posicao do contador (maximo 3)
    document.getElementById("labelVidaTres").innerHTML =
      "VIDA : " + vetorVida.join("");

    contadorDeErro--;
  } else if (contadorDeErro === 0) {
    location.href = "gameover.html";
  }
}
