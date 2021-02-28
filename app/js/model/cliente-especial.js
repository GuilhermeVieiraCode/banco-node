class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = Array();
    }
    get dependentes() {
        return this._dependentes;
    }
    inserir(dependente) {
        this._dependentes.push(dependente);
    }
    remover(cpf) {
        const dependente = this._dependentes.find(dependente => dependente.cpf === cpf);
        if (dependente) {
            const dependenteIndex = this._dependentes.indexOf(dependente);
            this._dependentes.splice(dependenteIndex, 1);
        }
    }
    pesquisar(cpf) {
        return this._dependentes.find(dependente => dependente.cpf === cpf);
    }
}
