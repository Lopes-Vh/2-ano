/* Crie um menu de navegação responsivo, que seja populado dinamicamente a partir de
um array de itens:*/

const itensMenu = [
    {nome: 'Inicio', url: 'index.html'},
    {nome: 'Sobre', url: 'sobre.html'},
    {nome: 'Contato', url: 'contato.html'},
    {nome: 'Contato', url: 'contato.html'},
    {nome: 'Contato', url: 'contato.html'}
]

const body = document.querySelector('body')

const getList = () => {
    const itemLi = document.createElement('li')    
    
    itensMenu.forEach(menu => {
        const a = document.createElement('a')
        a.setAttribute("href", menu.url)
        a.textContent = menu.nome.toUpperCase()
        a.style.color = 'white'
        a.style.textDecoration = 'none'
        itemLi.appendChild(a)        
    })
    return itemLi
}

const makeEstructor = () => {
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')    
    const li = getList()
    console.log(li)
    ul.appendChild(li)
    nav.appendChild(ul)
    header.appendChild(nav)
    body.appendChild(header)

    header.style.background= "#071D41"
    header.style.fontFamily = 'Arial'

    ul.style.display = 'flex'
    ul.style.alignItems = 'center'
    ul.style.justifyContent = 'center'
    ul.style.height = '40px'
    
    li.style.display = 'flex'
    li.style.gap = '20px'

}

makeEstructor()