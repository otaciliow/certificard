let carta1 = {
    nome: 'Bulbassauro',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    atributos: {
        ataque: 7,
        defesa: 8,
        spataque: 6
    }
}
let carta2 = {
    nome: 'Squirtle',
    imagem: 'https://e7.pngegg.com/pngimages/700/421/png-clipart-pokemon-squirtle-squirtle-pokemon-games-pokemon-thumbnail.png',
    atributos: {
        ataque: 9,
        defesa: 8,
        spataque: 2
    }
}
let carta3 = {
    nome: 'Charmander',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
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
    // exibirOpcoes();
    exibirCartaJogador();
}

document.getElementById('btnSortear').addEventListener('click', sortearCarta);

// function exibirOpcoes() {
//     const opcoes = document.getElementById('opcoes');
//     let opcoesTexto = ''
    
//     for (let atributo in cartaJogador.atributos) {
//         opcoesTexto += '<input type="radio" name="atributo" value="' + atributo + '">' + atributo;
//     }
//     opcoes.innerHTML = opcoesTexto;
// }

function exibirCartaJogador() {
    let divCartaJogador = document.getElementById('carta-jogador');
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    let  moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = '<div id="opcoes" class="carta-status">'
    let opcoesTexto = ''
    
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += '<input type="radio" name="atributo" value="' + atributo + '">' + atributo + " " + cartaJogador.atributos[atributo] + '<br>';
    }
    let nomeCarta = `<p class="carta-subtitle"> ${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nomeCarta + tagHTML + opcoesTexto + '</div>';
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
        htmlResultado = '<p class="resultado-final">Você venceu!</p>';
    }
    else if (valorCartaMaquina > valorCartaJogador) {
        htmlResultado = '<p class="resultado-final">Você perdeu!</p>';
    }
    else {
        htmlResultado = '<p class="resultado-final">Você empatou!</p>';
    }
    elementoResultado.innerHTML = htmlResultado;
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    let  moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = '<div id="opcoes" class="carta-status">'
    let opcoesTexto = ''
    
    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto += '<p type="text" name="atributo" value="' + atributo + '">' + atributo + ' ' + cartaMaquina.atributos[atributo] + '</p>';
    }
    let nomeCarta = `<p class="carta-subtitle"> ${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nomeCarta + tagHTML + opcoesTexto + '</div>';
}

document.getElementById('btnJogar').addEventListener('click', jogar);
document.getElementById('refresh').addEventListener('click', refreshPage);

function refreshPage() {
    window.refreshPage;
}