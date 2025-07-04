function calcularFatorial(valor) {
    if (valor == 1) {
        return valor
    } else {
        return valor * calcularFatorial(valor - 1)
    }
}

while (true) {
    try {
        let valorDigitado = parseInt(prompt("Digite um valor: "))

        if (valorDigitado < 1){
            throw new Error("Valor inválido")
        } else {
            let resultadoFatorial = calcularFatorial(valorDigitado)
            console.log(`${valorDigitado}! = ${resultadoFatorial}`)
        }

        pergunta = prompt("Quer continuar? [s/n] ").toLowerCase()
        if (pergunta == "n") {
            alert("Finalizando...")
            break
        } else {
            continue
    }
    } catch(erro) {
        alert(erro.message)
    }
}