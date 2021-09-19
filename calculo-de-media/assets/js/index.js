document.querySelector('button').onclick = notaFinal;




// const media = mediaFinal.toFixed(2); transforma em string, com apenas duas casa decimais após o inicio da parte decimal

// document.getElementById('media').value = mediaFinal();

function notaFinal() {
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;
    let nota4 = document.getElementById('nota4').value;

    const mediaFinal = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
    
    let inputNota = document.getElementById('final')
    inputNota.style.display = 'flex';
    
    const mediaResult = document.getElementById('nota-final');
    
    mediaResult.value = mediaFinal;

    switch (mediaFinal) {
        case (mediaFinal)
    }
    
    return mediaFinal;
    
}

// desafio: exibir as notas em inputs e se o aluno está aprovado ou não 
