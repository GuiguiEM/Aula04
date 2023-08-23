'use strict'

const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')
const botaoMostrarNumerosMultiplosTresQuatro = document.getElementById('botao-mostrar-numeros-multiplos-tres')
const botaoMostrarNumerosMultiplosTresOuQuatro = document.getElementById('botao-mostrar-numeros-multiplos-tres-quatro')




function mostrarTodosNumeros() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')

    container.replaceChildren('')
    const ultmoIndice = numeros.length
    for (let contador = 0; contador < ultmoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
    }
}

function MostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultmoIndice = numeros.length

    for (let contador = 0; contador < ultmoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function MostrarNumerosimpares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultmoIndice = numeros.length

    for (let contador = 0; contador < ultmoIndice; contador++) {
        if (numeros[contador] % 2 != 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function MostrarNumerosMultiplosTresQuatro() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-tres-quatro')

    container.replaceChildren('')
    const ultmoIndice = numeros.length

    for (let contador = 0; contador < ultmoIndice; contador++) {
        if (numeros[contador] % 3 == 0 && numeros[contador] % 4 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function MostrarNumerosMultiplosTresOuQuatro() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-tres-ou-quatro')

    container.replaceChildren('')
    const ultmoIndice = numeros.length

    for (let contador = 0; contador < ultmoIndice; contador++) {
        if (numeros[contador] % 4 == 0 || numeros[contador] % 4 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)
botaoMostrarNumerosPares.addEventListener('click', MostrarNumerosPares)
botaoMostrarNumerosImpares.addEventListener('click', MostrarNumerosimpares)
botaoMostrarNumerosMultiplosTres.addEventListener('click', MostrarNumerosMultiplosTresQuatro)
botaoMostrarNumerosMultiplosTresOuQuatro.addEventListener('click', MostrarNumerosMultiplosTresOuQuatro)