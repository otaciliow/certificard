document.querySelector('button').addEventListener('click', chutar);

// o atributo math.random() atribui um valor numérico aleatório entre 0 e 1.
let numeroSecreto = parseInt(Math.random() * 11); // multiplicar o número por 11 faz ele estar sempre entre 0 e 10

function chutar() {
    let chute = parseInt(document.getElementById('valor').value);
    
    if (chute == numeroSecreto) {
        document.getElementById('final').style.display = 'flex';
        document.getElementById('resultado').innerHTML = 'Acertou!';
    }
    else if (chute > 10 || chute < 0) {
        document.getElementById('final').style.display = 'flex';
        document.getElementById('resultado').innerHTML = 'Número não é válido! Por favor, digite um número de 0 a 10';
    }
    else {
        document.getElementById('final').style.display = 'flex';
        document.getElementById('resultado').innerHTML = 'Errou!';
    }
}