class Clientes{
    private clientes: Array<Cliente>;
    
    constructor(){
        this.clientes = new Array<Cliente>();
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