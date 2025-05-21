
document.addEventListener('DOMContentLoaded', function() {

    const barra = document.querySelector('.barra');


    const pontoDeRolagem = 50;


    window.addEventListener('scroll', function() {

        if (window.scrollY > pontoDeRolagem) {

            barra.classList.add('reduzida');
        } else {
            barra.classList.remove('reduzida');
        }
    });
});