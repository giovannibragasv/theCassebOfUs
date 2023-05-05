let idMapa = document.getElementById("mapaFaseUm");
let tamanhoMapaFaseUm = 15;

let i = 12;
let j = 7;

const coordenadasFaseUm = [];

// paredes do mapa
for (let x = 0; x < tamanhoMapaFaseUm; x++) {
  
  // array (bidimensional) vazio para ser preenchido com os caracteres
  coordenadasFaseUm[x] = []

    // geracao do espaco branco do meio
    for (let y = 0; y < tamanhoMapaFaseUm; y++) {

      coordenadasFaseUm[x][y] = " ";
    };
};

// geracao das paredes de cima e de baixo
for (let y = 0; y < tamanhoMapaFaseUm; y++) {
  
  // paredes de cima
  coordenadasFaseUm[0][y] = "*";

  // paredes de baixo
  coordenadasFaseUm[tamanhoMapaFaseUm - 1][y] = "*";
};

for (let x = 0; x < tamanhoMapaFaseUm; x++) {

  // paredes da esquerda
  coordenadasFaseUm[x][0] = "*";

  // paredes da direita
  coordenadasFaseUm[x][tamanhoMapaFaseUm - 1] = "*";
}

// parede da esquerda em baixo
coordenadasFaseUm[13][4] = "*";
coordenadasFaseUm[12][4] = "*";
coordenadasFaseUm[11][4] = "D";
coordenadasFaseUm[10][3] = "*";
coordenadasFaseUm[9][2] = "*";
coordenadasFaseUm[9][1] = "*";
coordenadasFaseUm[10][2] = "@";


// parede da direita em cima

coordenadasFaseUm[0][13] = "=";
coordenadasFaseUm[4][13] = "D";
coordenadasFaseUm[4][12] = "*";
coordenadasFaseUm[4][11] = "*";
coordenadasFaseUm[3][10] = "*";
coordenadasFaseUm[2][9] = "*";
coordenadasFaseUm[1][9] = "*";


// parede da esquerda em cima
coordenadasFaseUm[4][1] = "*";
coordenadasFaseUm[4][2] = "*";
coordenadasFaseUm[2][4] = "*";
coordenadasFaseUm[1][4] = "*";
coordenadasFaseUm[1][1] = "@";

function geracaoDoMapa() {
  let espacoMapa = "";
  
  for (let  x = 0; x < tamanhoMapaFaseUm; x++) {
    for (let y = 0; y < tamanhoMapaFaseUm; y++) {
      // geracao do personagem
      if (i === x && j === y){
        espacoMapa += "&";
      }
      else {
        espacoMapa += coordenadasFaseUm[x][y];
      };

      // espaco entre os caracteres
      espacoMapa += " ";
    };

    // quebra de linha
    espacoMapa += "\n";
  };

  // innerHTML que bota o mapa no html 
  idMapa.innerHTML = espacoMapa;
};

// function para gerar toda vez que abrir a pagina
geracaoDoMapa();

// booleanos para conferir se a porta esta aberta e deixar isso falso como default
let portaUmAberta = false;
let portaDoisAberta = false;

// function para abrir a primeira porta
function abrirPortaUm() {
  
  // ! para fazer com que o codigo so funcione caso a porta estiver fechada
  if (!portaUmAberta) {

    // transforma o botao em um espaco em branco
    coordenadasFaseUm[1][1] = " ";

    // transforma a porta fechada em =
    coordenadasFaseUm[11][4] = "=";
    geracaoDoMapa();

    // booleano que agora faz com que a porta ser aberta esteja true, o que faz com que esse bloco de codigo nao funcione mais se
    // tentar novamente
    portaUmAberta = true;
  };
};

// function para abrir a segunda porta, mesma coisa do de cima só que com a coordenadas da outra porta
function abrirPortaDois() {
  if (!portaDoisAberta) {
    coordenadasFaseUm[10][2] = " ";
    coordenadasFaseUm[4][13] = "=";
    geracaoDoMapa();
    portaDoisAberta = true;
  };
};

// functions para gerar o movimento
function movimentoCima() {
  i--;
  geracaoDoMapa();
}

function movimentoBaixo() {
  i++;
  geracaoDoMapa();
}

function movimentoDireita() {
  j++;
  geracaoDoMapa();
}

function movimentoEsquerda() {
  j--;
  geracaoDoMapa();
}

// function de fim de fase
function terminarFase() {
    document.getElementById("teste").innerHTML = "Parabéns, você passou da primeira fase!"
}

// eventListener para pegar os inputs do teclado ("keydown, keyCode")
window.addEventListener("keydown", function testePersonagem(event) {
  const teclaPressionada = event.keyCode;

  // tecla W
  if (teclaPressionada === 87) {
    if (coordenadasFaseUm[i - 1][j] !== "*" && coordenadasFaseUm[i - 1][j] !== "D" ) {
      movimentoCima()
    }
    if (coordenadasFaseUm[i][j] == coordenadasFaseUm[0][13]) {
      if (i === 0 && j === 13) {
        terminarFase();
      }
    }
  };

  // tecla S
  if (teclaPressionada === 83) {
    if (coordenadasFaseUm[i + 1][j] !== "*" && coordenadasFaseUm[i + 1][j] !== "D") {
      movimentoBaixo()
    };
  };

  // tecla D
  if (teclaPressionada === 68) {
    if (coordenadasFaseUm[i][j + 1] !== "*" && coordenadasFaseUm[i][j + 1] !== "D") {
      movimentoDireita()
    };
  };

  // tecla A
  if (teclaPressionada === 65) {
    if (coordenadasFaseUm[i][j - 1] !== "*" & coordenadasFaseUm[i][j - 1] !== "D") {
      movimentoEsquerda() 
    };
  };

  // tecla I
  if (teclaPressionada === 73) {
    if (coordenadasFaseUm[i][j] === coordenadasFaseUm[1][1]){
      abrirPortaUm()
    }
    if (coordenadasFaseUm[i][j] === coordenadasFaseUm[10][2]){
      abrirPortaDois()
    }
  }
});

function voltar(params) {
    location.href = "index.html";
}