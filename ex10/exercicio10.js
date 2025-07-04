let clientes = []

function adicionarClientes(){
    let clienteNovo = prompt("Digite o cliente: ")

    if (clienteNovo) {
        clientes.push(clienteNovo)
    }
}

function atenderCliente(){
    if (clientes.length === 0) {
        alert("Não há clientes. Tente novamente")
    } else {
        let clienteAtendido = clientes.shift()
        alert(`${clienteAtendido} está sendo atendido.`)
    }
}

function criarMenu(){
    let menu = "CENTRAL DE ATENDIMENTO\n\n"
    if (clientes.length === 0) {
        menu += "Não há clientes no momento.\n\n"
    } else {
        for (let i = 0; i < clientes.length; i++){
            menu += `${i + 1}º - ${clientes[i]}\n\n`
        }
    }

    menu += "1 - Adicionar cliente.\n2 - Atender cliente\n3 - Sair"

    return menu
}

function inicarCentralDeAtendimento(){
    let comandos = {
        "1": adicionarClientes,
        "2": atenderCliente
    }

    while (true){
        let menu = criarMenu()
        let opcao = prompt(menu)

        if (opcao == "3") {
            alert("Obrigado pelo uso! Finalizando...")
            break
        }

        let funcao = comandos[opcao]
        if (funcao) {
            funcao()
        } else {
            alert("Opção inválida. Recarregue tente novamente.")
        }
    }
}

inicarCentralDeAtendimento()