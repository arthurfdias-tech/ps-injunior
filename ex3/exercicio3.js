function verificarIdade(arrayAnosDeNascimento, anoAtual){
    let classificacoes = []
    
    for (let i = 0; i < arrayAnosDeNascimento.length; i++){
        let anoNascimento = arrayAnosDeNascimento[i]
        let idade = anoAtual - anoNascimento

        if (idade >= 18){
            classificacoes.push("Maior")
        } else {
            classificacoes.push("Menor") 
        }
    }

    for (let i = 0; i < classificacoes.length; i++){
        console.log(`Pessoa ${i + 1}: ${classificacoes[i]} de idade`)
    }
    
    return classificacoes
}

let anos = [2000, 2005, 1995, 2009]

let anoAtual = parseInt(prompt("Digite o ano atual: "))

if (anoAtual >= 1900){
    let resultadoFinal = verificarIdade(anos, anoAtual)
    console.log(`O resultado final é = ${resultadoFinal}`)
} else {
    alert("Input inválido. Recarregue a página.")
}