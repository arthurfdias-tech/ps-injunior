let cambioEuro = 6.1
let cambioDolar = 5.7

let valorReais = parseFloat(prompt("Digite o valor em R$: "))

console.log(`R$${valorReais} = $${cambioDolar / valorReais} = €${cambioEuro / valorReais}`)