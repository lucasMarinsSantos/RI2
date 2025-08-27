function Telefone(ddd, numero) {
  this.ddd = ddd;
  this.numero = numero;

  this.getDdd = () => this.ddd;
  this.setDdd = (novoDdd) => this.ddd = novoDdd;
  this.getNumero = () => this.numero;
  this.setNumero = (novoNumero) => this.numero = novoNumero;
}

function Endereco(estado, cidade, rua, numero) {
  this.estado = estado;
  this.cidade = cidade;
  this.rua = rua;
  this.numero = numero;

  this.getEstado = () => this.estado;
  this.setEstado = (novoEstado) => this.estado = novoEstado;
  this.getCidade = () => this.cidade;
  this.setCidade = (novaCidade) => this.cidade = novaCidade;
  this.getRua = () => this.rua;
  this.setRua = (novaRua) => this.rua = novaRua;
  this.getNumero = () => this.numero;
  this.setNumero = (novoNumero) => this.numero = novoNumero;

  this.getEstadoMaiusculo = () => this.estado.toUpperCase();
  this.getEstadoMinusculo = () => this.estado.toLowerCase();
  this.getCidadeMaiusculo = () => this.cidade.toUpperCase();
  this.getCidadeMinusculo = () => this.cidade.toLowerCase();
  this.getRuaMaiusculo = () => this.rua.toUpperCase();
  this.getRuaMinusculo = () => this.rua.toLowerCase();
}

function Cliente(nome, telefone, email, endereco) {
  this.nome = nome;
  this.telefone = telefone;
  this.email = email;
  this.endereco = endereco;

  this.getNome = () => this.nome;
  this.setNome = (novoNome) => this.nome = novoNome;
  this.getEmail = () => this.email;
  this.setEmail = (novoEmail) => this.email = novoEmail;

  this.getNomeMaiusculo = () => this.nome.toUpperCase();
  this.getNomeMinusculo = () => this.nome.toLowerCase();
  this.getEmailMaiusculo = () => this.email.toUpperCase();
  this.getEmailMinusculo = () => this.email.toLowerCase();

  Object.defineProperty(this, 'descricao', {
      get: function() {
          return `\nInformações do Cliente: \n${this.nome}\n\n--------------------\n--------------------\nTelefone:\n DDD: ${this.telefone.getDdd()}\n Número: ${this.telefone.getNumero()}\n--------------------\nEndereço:\n Rua: ${this.endereco.getRua()}\n Número: ${this.endereco.getNumero()}\n Cidade: ${this.endereco.getCidade()}\n Estado: ${this.endereco.getEstado()}\n--------------------\n--------------------\n`;
      }
  });
}

function ordenarClientes(clientes) {
  return [...clientes].sort((a, b) => a.getNome().localeCompare(b.getNome()));
}

let telefone1 = new Telefone('11', '999999999');
let endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente1 = new Cliente('Carlos Conrado Heinz', telefone1, 'carlos.conrado@app.com', endereco1);

let telefone2 = new Telefone('21', '987654321');
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Rua do Sol', '123');
let cliente2 = new Cliente('Ana Costa', telefone2, 'ana@email.com', endereco2);

let telefone3 = new Telefone('41', '935678901');
let endereco3 = new Endereco('PR', 'Curitiba', 'Av. Paraná', '120');
let cliente3 = new Cliente('Maria Oliveira', telefone3, 'maria@email.com', endereco3);

console.log(cliente1.descricao);

let clientes = [cliente1, cliente2, cliente3];
let clientesOrdenados = ordenarClientes(clientes);

console.log("\nClientes Ordenados:");
clientesOrdenados.forEach(c => console.log(c.getNome()));

console.log("\n\n--------------------\n--------------------\nFunções Upper & Lower\n--------------------")
console.log(cliente1.getNomeMaiusculo());
console.log(cliente1.getNomeMinusculo());
console.log("--------------------\n--------------------\n")
