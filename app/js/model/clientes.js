class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const cliente = this.clientes.find(cliente => cliente.cpf === cpf);
        if (cliente) {
            const clienteIndex = this.clientes.indexOf(cliente);
            this.clientes.splice(clienteIndex, 1);
        }
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
}
