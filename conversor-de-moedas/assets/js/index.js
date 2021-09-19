// ids: moeda (input), final(div)

document.querySelector('button').addEventListener('click', converter);

function converter() {
    let valorElemento = document.getElementById('valor').value;
    let valor = (parseFloat(valorElemento) * 5.29); //cotação do dólar no dia 18/09/2021 às 20:00;

    let resultado = document.getElementById('valor-convertido');
    let valorConvertido = 'Valor em real: R$' + valor;

    document.getElementById('final').style.display = 'flex';
    resultado.innerHTML = valorConvertido;
}