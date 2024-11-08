const p = document.querySelector('#paragrafo')
const divImg = document.querySelector('#divImg')

//divImg.addEventListener('click', () => {
//    divImg.style.border = '2px solid black'
//})

function pMouse() {
    divImg.style.border = '2px solid black'
}

function sMouse() {
    divImg.style.border = 'none'
}

divImg.addEventListener('mouseover', pMouse)
divImg.addEventListener('mouseout', sMouse)

p.onclick = () =>{
    alert('Parágrafo clicado!')
}

const clique = () => {
    console.log('Botão clicado!')
    alert('Botão clicado!')
}

const pressTecla = () => {
    if(window.getComputedStyle(divImg, null).getPropertyValue('background-color') === 'rgb(0, 0, 0)'){
        divImg.style.backgroundColor = 'rgb(255, 255, 255)'
    }
    else{
        divImg.style.backgroundColor = 'rgb(0, 0, 0)'
    }
}

console.log()