document.querySelector('button').addEventListener('click', adicionarFilme);

function adicionarFilme() {
    const campoFilme = document.getElementById('filme').value;

    if (campoFilme.endsWith('.jpg')) { // .endsWith verifica o final do valor do elemento, declarado entre os parênteses. nesse caso,se termina com o formato .jpg
        listarFilmes(campoFilme); // devido à componentização das funções, é necessário informar para a outra function o que deverá ser enviado para ela, dentro dos parênteses
    }
    else {
        // console.error('Link inválido... Por favor, informe um link de uma imagem em formato .jpg'); // o console.error além de informar no console o que está entre os parênteses, mas com uma marcação de erro
        alert('Link inválido... Por favor, informe um link de uma imagem em formato .jpg');
    }
    
    campoFilme.value = '';
}

function listarFilmes(campoFilme) { // é necessário referenciar entre os parênteses o nome da informação que será recebida. nesse caso, como o nome foi informado na function de cima, poderia ser colocado qualquer nome nessa function
    const elementoFilme = '<img src=' + campoFilme + '>';
    let listaFilmes = document.getElementById('listaFilmes');
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme; //não se usa o índice nesse caso porque está sendo feita a adição de um elemento

}