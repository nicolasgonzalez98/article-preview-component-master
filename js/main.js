let botonCompartir = document.querySelector('.compartir');

botonCompartir.addEventListener('click', () => {
    let flecha = document.querySelector('.flecha');
    let box = document.querySelector('.share');

    flecha.classList.toggle('desactivar')
    box.classList.toggle('desactivar')
    botonCompartir.classList.toggle('fondo_negro');
})