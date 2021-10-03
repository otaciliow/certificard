document.querySelector('.tema').addEventListener('click', mudarTema);

function mudarTema() {
    document.body.classList.toggle('dark');
}