class Cliente{
    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome: string, cpf: string, conta: Conta ){
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta
    }

    get nome(): string{
        return this._nome;
    }

    get cpf(): string{
        return this._cpf;
    }

    get conta(): Conta{
        return this._conta;
    }
    
    set setConta(novaConta: Conta){
        this._conta = novaConta;
    }
}