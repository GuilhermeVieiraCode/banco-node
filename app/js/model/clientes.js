class Clientes {
    constructor() {
        this.clientes = new Array();
        const cli1 = new Cliente('Jack', '000-000-000-00', new Conta('1', 1000));
        const cli2 = new Cliente('John', '111-111-111-11', new Conta('2', 2000));
        const cli3 = new Cliente('Jane', '222-222-222-22', new Conta('3', 3000));
        this.clientes.push(cli1, cli2, cli3);
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
