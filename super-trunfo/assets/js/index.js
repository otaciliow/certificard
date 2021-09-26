let carta1 = {
    nome: 'Bulbassauro',
    atributos: {
        ataque: 7,
        defesa: 8,
        spataque: 6
    }
}
let carta2 = {
    nome: 'Squirtle',
    atributos: {
        ataque: 9,
        defesa: 8,
        spataque: 2
    }
}
let carta3 = {
    nome: 'Charmander',
    atributos: {
        ataque: 5,
        defesa: 9,
        spataque: 10
    }
}

const cartas = [carta1,carta2,carta3];
let cartaMaquina = 0;
let cartaJogador = 0;

function sortearCarta() {
    let numCartaMaquina = parseInt(Math.random() * 3);
    let numCartaJogador = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numCartaMaquina];
    while (numCartaMaquina == numCartaJogador) {
        let numCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numCartaJogador];

    document.getElementById('btnSortear').disabled = 'true';
    document.getElementById('btnJogar').removeAttribute('disabled');
    exibirOpcoes();
}

document.getElementById('btnSortear').addEventListener('click', sortearCarta);

function exibirOpcoes() {
    const opcoes = document.getElementById('opcoes');
    let opcoesTexto = ''
    
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += '<input type="radio" name="atributo" value="' + atributo + '">' + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributo() {
    let radioAtributos = document.getElementsByName('atributo');

    for (x=0;x<radioAtributos.length;x++) {
        if (radioAtributos[x].checked == true) {
            return radioAtributos[x].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributo();
    let elementoResultado = document.getElementById('resultado');
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = '<h2>Você venceu!</h2>';
    }
    else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = '<h2>Você perdeu!</h2>';
    }
    else {
        elementoResultado.innerHTML = '<h2>Empatou!</h2>';
    }
}

document.getElementById('btnJogar').addEventListener('click', jogar);