
//querySelector e Inner's

// const titulo = document.querySelector('h1')
// const span = document.querySelector('span')



// console.log(titulo.innerHTML)
// console.log(titulo.innerText)
// console.log(titulo.textContent)


// titulo.innerText = 'Nathan dorme de boca aberta-'
// --------------------------------------------------------------------------------------------

// const body = document.querySelector('body')
// const ancora = document.createElement('a')

// ancora.setAttributes('href', 'https://www.ifro.edu.br')
// ancora.setAttribute('target', '_blank')
// ancora.textContent = 'IFRO'
// ancora.style.color = 'f1f1f1'

// body.appendChild(ancora)

const body = document.querySelector('body')
const ul = document.createElement('ul')
const ancora = document.createElement('a')

const l1 = document.createElement('li')
const l2 = document.createElement('li')
const l3 = document.createElement('li')

l1.textContent = 'lista-1'
l2.textContent = 'lista-2'
l3.textContent = 'lista-3'

ancora.setAttribute('href', 'https://www.ifro.edu.br')
ancora.textContent = 'IFRO'
ancora.style.color = '#f0f00'
ancora.style.fontWeight = 'bold'
ancora.style.fontSize = '20px'
body.querySelector('h1').remove()

ul.appendChild(l1)
ul.appendChild(l2)
ul.appendChild(l3) 
 

body.appendChild(ul)
body.appendChild(ancora)

//prepend é a função que adiciona uma element no inicio