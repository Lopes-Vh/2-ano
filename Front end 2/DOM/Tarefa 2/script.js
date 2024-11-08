const imagens = document.querySelectorAll('.miniatura')
const imgAmpliada = document.querySelector('#imgAmpliada')

imagens.forEach(miniatura => {
        miniatura.addEventListener('click', () => {
            imagens.forEach(element => {
                element.style.opacity = '0.4'
            });
            imgAmpliada.src = miniatura.src
            imgAmpliada.style.display = 'block'
            miniatura.style.opacity = '1'

    })
})