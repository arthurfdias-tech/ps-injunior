let quantidadeDigitada = parseInt(prompt("Digite quantos números você irá digitar: "))

let arrayNumerosDigitados = []
for (let i = 0; i < quantidadeDigitada; i++) {
    let valorDigitado = parseInt(prompt("Digite o valor: "))
    arrayNumerosDigitados.push(valorDigitado)
}

let contador = 0
for (let i = 0; i < arrayNumerosDigitados.length - 1; i ++) {
    if (arrayNumerosDigitados[i] < arrayNumerosDigitados[i + 1]) {
        contador++
    }
}

console.log(contador)