const jogadores = [rafa, paulo];

const rafa = {
  //chave  valor  
    nome: 'Rafa',
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos:0
}
const paulo = {
    nome: 'Paulo',
    vitorias: 1,
    empates: 5,
    derrotas: 2,
    pontos:0
}

function calculoPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    jogador.pontos = pontos;
    
    return pontos;
}

function exibeJogadores(jogadores) { // estrutura para exibir os jogadores na tabela
    let elemento  = ''

    for (x=0;x<jogadores.length;x++) {
        elemento += '<tr>' // o operador += adiciona um novo valor à variável, sem sobreescrever o anterior
        elemento += '<td>' + jogadores[x].nome + '</td>'
        elemento += '<td>' + jogadores[x].vitorias + '</td>'
        elemento += '<td>' + jogadores[x].empates + '</td>'
        elemento += '<td>' + jogadores[x].derrotas + '</td>'
        elemento += '<td>' + jogadores[x].pontos + '</td>'
        elemento += '<td><button onClick="adicionarVitoria(' + x + ')">Vitória</button></td>'
        elemento += '<td><button onClick="adicionarEmpate(' + x + ')">Empate</button></td>'
        elemento += '<td><button onClick="adicionarDerrota(' + x + ')">Derrota</button></td>'
        elemento += '</tr>'

    }

    const tabelaJogadores = document.getElementById('tabelaJogadores');
    tabelaJogadores.innerHTML = elemento;

}

function adicionarVitoria(x) { // é necessário referenciar o indice do array para que a função anterior possa recebê-lo
    let jogador = jogadores[x]; // por estar fora das funções, o array é de escopo global e pode ser acessado por outras funções
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}

function adicionarEmpate(x) {
    let jogador = jogadores[x]; // por estar fora das funções, o array é de escopo global e pode ser acessado por outras funções
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}

function adicionarDerrota(x) {
    let jogador = jogadores[x]; // por estar fora das funções, o array é de escopo global e pode ser acessado por outras funções
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}