'use strict'

const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')
const botaoMostrarNumerosMultiplosTresEQuatro = document.getElementById('botao-mostrar-numeros-multiplos-tres-e-quatro')
const botaoMostrarNumerosMultiplosTresOuQuatro = document.getElementById('botao-mostrar-numeros-multiplos-tres-ou-quatro')
const botaoMostrarNumeroAnterior = document.getElementById('botao-mostrar-anterior')
const botaoMostrarTriplo = document.getElementById('botao-mostrar-triplo')




function MostrarTodosNumeros(){
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

function MostrarNumerosPares(){
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

function MostrarNumerosimpares(){
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

function MostrarNumerosMultiplosTresEQuatro(){
     const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-tres-e-quatro')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 3 == 0 && numeros[contador] % 4 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function MostrarNumerosMultiplosTresOuQuatro(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-tres-ou-quatro')

    container.replaceChildren('')
    const ultmoIndice = numeros.length

    for (let contador = 0; contador < ultmoIndice; contador++) {
        if (numeros[contador] % 3 == 0 || numeros[contador] % 4 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function MostrarAnterior(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-anterior')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador] - 1
        container.appendChild(novoSpan)
    }
}

function MostrarTriplo(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-triplo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador] * 3
        container.appendChild(novoSpan)
    }
}

botaoMostrarTodosNumeros.addEventListener('click', MostrarTodosNumeros)
botaoMostrarNumerosPares.addEventListener('click', MostrarNumerosPares)
botaoMostrarNumerosImpares.addEventListener('click', MostrarNumerosimpares)
botaoMostrarNumerosMultiplosTresEQuatro.addEventListener('click', MostrarNumerosMultiplosTresEQuatro)
botaoMostrarNumerosMultiplosTresOuQuatro.addEventListener('click', MostrarNumerosMultiplosTresOuQuatro)
botaoMostrarNumeroAnterior.addEventListener('click', MostrarAnterior)
botaoMostrarTriplo.addEventListener('click', MostrarTriplo)