class Clientes{
    private clientes: Array<Cliente>;
    
    constructor(){
        this.clientes = new Array<Cliente>();
        const cli1 = new Cliente('Jack', '000-000-000-00', new Conta('1', 1000));
        const cli2 = new Cliente('John', '111-111-111-11', new Conta('2', 2000));
        const cli3 = new Cliente('Jane', '222-222-222-22', new Conta('3', 3000));
        this.clientes.push(cli1, cli2, cli3);
    }

    inserir(cliente: Cliente): void{
        this.clientes.push(cliente);
    }

    remover(cpf: string): void{
        const cliente = this.clientes.find(cliente => cliente.cpf === cpf);
        if(cliente){
            const clienteIndex = this.clientes.indexOf(cliente);
            this.clientes.splice(clienteIndex, 1);
        }
    }

    listar(): Array<Cliente>{
        return this.clientes;
    }

    pesquisar(cpf: string): Cliente{
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        )
    }
}