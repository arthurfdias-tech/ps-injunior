function calcularFibonacci(indice) {
    if (indice < 2) {
        return indice
    } else {
        return calcularFibonacci(indice - 1) + calcularFibonacci(indice - 2)
    }
}

let posicao = parseInt(prompt("Digite até onde a sequência vai: "))

if (posicao < 0) {
    alert("Input inválido. Recarregue a página.")
} else {
    for (let i = 0; i <= posicao; i++){
        console.log(calcularFibonacci(i))
    }

}