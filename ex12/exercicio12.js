function encontrarElementoUnico(arrayNumeros){
    for(let numero of arrayNumeros){
        if (arrayNumeros.indexOf(numero) == arrayNumeros.lastIndexOf(numero)){
            return numero  
        }
    } 
}

let valoresRecebidos = [1, 1, 2, 2, 3]
console.log(encontrarElementoUnico(valoresRecebidos))