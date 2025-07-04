let coeficienteA = parseFloat(prompt("Digite o coeficiente A: "))
let coeficienteB = parseFloat(prompt("Digite o coeficiente B: "))
let coeficienteC = parseFloat(prompt("Digite o coeficiente C: "))

if(isNaN(coeficienteA) || isNaN(coeficienteB) || isNaN(coeficienteC)) {
    alert("Digite apenas números.")
} else {
    if (coeficienteA !== 0 || typeof(coeficienteA) ){
    
    let delta = (coeficienteB ** 2) - 4 * coeficienteA * coeficienteC
    let raizDelta = delta ** (1/2)
    let x1 = (- coeficienteB + raizDelta) / (2 * coeficienteA)

    if (delta === 0){
        console.log(`O valor de X é ${x1}.`)
    } else if (delta > 0) {
        let x2 = (- coeficienteB - raizDelta) / (2 * coeficienteA)
        console.log(`O valor de X1 é ${x1} e de X2 é ${x2}.`)
    } else {
        alert("Sua equação não possui raízes reais.")
    }

    } else {
        alert("Sua equação não é de segundo grau!")
    }
}