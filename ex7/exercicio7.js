let fraseDigitada = prompt("Digite uma frase: ").toLowerCase()

let arrayFrase = fraseDigitada.split(" ")

let fraseSemEspaco = "";
for (let indice in arrayFrase) {
    fraseSemEspaco += arrayFrase[indice]
}

let fraseInvertida = ""
for (let i = fraseSemEspaco.length - 1; i >= 0; i--) {
    fraseInvertida += fraseSemEspaco[i]
}

if (fraseInvertida == fraseSemEspaco) {
    console.log(`'${fraseDigitada}' é um palíndromo.`)
} else {
    console.log(`'${fraseDigitada}' não é um palíndromo.`)
}