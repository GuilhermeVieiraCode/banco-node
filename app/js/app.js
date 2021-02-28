//contas
let contaController = new ContaController();
contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
//clientes
let clienteController = new ClienteController();
clienteController.listar();
/**
const cli1 = new Cliente('Jack', '000-000-000-00', new Conta('4', 1000));
const cli2 = new Cliente('John', '111-111-111-11', new Conta('5', 2000));
const cli3 = new Cliente('Jane', '222-222-222-22', new Conta('6', 3000));

const clientes = new Clientes();
clientes.inserir(cli1);
clientes.inserir(cli2);
clientes.inserir(cli3);
clientes.remover('111-111-111-11');
console.log(clientes.listar());
console.log(clientes.pesquisar("222-222-222-22"));
*/
