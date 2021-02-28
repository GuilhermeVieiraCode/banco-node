class ClienteEspecial extends Cliente {

    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta ){
        super(nome, cpf, conta);
        this._dependentes = Array<Cliente>()
    }

    get dependentes(): Array<Cliente>{
        return this._dependentes;
    }
    
    inserir(dependente: Cliente): void{
        this._dependentes.push(dependente)
    } 

    remover(cpf: string): void{
        const dependente = this._dependentes.find(dependente => dependente.cpf === cpf);
        if(dependente){
            const dependenteIndex = this._dependentes.indexOf(dependente);
            this._dependentes.splice(dependenteIndex, 1);
        }
    }

    pesquisar(cpf: string): Cliente{
        return this._dependentes.find(
            dependente => dependente.cpf === cpf
        )
    }
}
