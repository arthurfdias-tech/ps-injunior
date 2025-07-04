let time = []

function adicionarJogador() {
    let jogador = {
        nome: "",
        idade: "",
        posicao: "",
        pontuacao: ""
    }

    jogador.nome = prompt("Digite o NOME: ")
    jogador.idade = parseInt(prompt("Digite a IDADE: "))
    jogador.posicao = prompt("Digite a POSIÇÃO: ")
    jogador.pontuacao = parseInt(prompt("Digite a PONTUAÇÃO: "))

    time.push(jogador)

    console.log(`${jogador.nome} adicionado ao time.`)
}

function buscarPorPosicao() {
    const posicaoDigitada = prompt("Qual posição você deseja buscar?");

    let contador = 0;
    for (let jogador of time) {
        if (jogador.posicao.toLowerCase() === posicaoDigitada.toLowerCase()) {
            contador++;
        }
    }
    console.log(`${contador} jogador(es) encontrado(s) na posição "${posicaoDigitada}".`);
}

function listarTime() {
    if (time.length == 0) {
        alert("Não há jogadores.")
        return
    } else {
        for (let jogador of time){
            console.log(`Nome: ${jogador.nome}. Idade: ${jogador.idade}. Posição: ${jogador.posicao}. Pontuação: ${jogador.pontuacao}\n`)
        }
    }
}

function calcularPontuacaoMedia() {
    if (time.length == 0) {
        console.log(`Não há jogadores. Portanto, média é 0.`)
        return
    } else {
        let contador = 0
        for (let jogador of time) {
            contador += jogador.pontuacao
            }
        return (contador / time.length)
        }  
    }

comandos = {
    "1": adicionarJogador,
    "2": buscarPorPosicao,
    "3": listarTime,
    "4": calcularPontuacaoMedia
}
while (true) {
    opcao = prompt("1 - Adicionar jogador\n2 - Buscar por posição\n3 - Listar time\n4 - Calcular pontuação média\n5 - Sair")

    if (opcao == 5) {
        alert("Finalizando...")
        break
    }

    funcao = comandos[opcao]
    if(funcao) {
        funcao()
    } else {
        alert("Opcao inválida. Tente novamente")
    }
}