let valorDigitado = parseInt(prompt("Digite um valor: "))

if (valorDigitado % 15 == 0){
    console.log(`${valorDigitado} é divisível por 3 e 5 ao mesmo tempo.`)
} else if (valorDigitado % 3 == 0) {
    console.log(`${valorDigitado} é divisìvel por 3.`)
} else if (valorDigitado % 5 == 0) {
    console.log(`${valorDigitado} é divisível por 5.`)
}

