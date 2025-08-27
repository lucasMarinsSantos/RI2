function Cliente(nome, telefone, endereco) {
  this.nome = nome;
  this.telefone = telefone;
  this.endereco = endereco;

  this.getNome = function () {
    return this.nome;
  };
  this.setNome = function (novoNome) {
    this.nome = novoNome;
  };

  this.getTelefone = function () {
    return this.telefone;
  };
  this.setTelefone = function (novoTelefone) {
    this.telefone = novoTelefone;
  };

  this.getEndereco = function () {
    return this.endereco;
  };
  this.setEndereco = function (novoEndereco) {
    this.endereco = novoEndereco;
  };

  this.getInfo = function () {
    return (
      "----------------------------\n" +
      "Dados do Cliente:\n" +
      this.nome +
      "\n" +
      "----------------------------\n" +
      "Telefone:\n" +
      "DDD: " +
      (this.telefone.ddd || "N/A") +
      "\n" +
      "Número: " +
      (this.telefone.numero || "N/A") +
      "\n" +
      "----------------------------\n" +
      "Endereço:\n" +
      "Rua: " +
      (this.endereco.rua || "N/A") +
      "\n" +
      "Número: " +
      (this.endereco.numero || "N/A") +
      "\n" +
      "Cidade: " +
      (this.endereco.cidade || "N/A") +
      "\n" +
      "Estado: " +
      (this.endereco.estado || "N/A") +
      "\n" +
      "----------------------------"
    );
  };
}

function ordenarClientes(clientes) {
  return clientes.sort((a, b) => a.getNome().localeCompare(b.getNome()));
}

let cliente1 = new Cliente(
  "Ana Costa",
  { ddd: 11, numero: "912345678" },
  { rua: "Rua das Flores", numero: "45", cidade: "São Paulo", estado: "SP" }
);
let cliente2 = new Cliente(
  "Carlos Silva",
  { ddd: 21, numero: "923456789" },
  { rua: "Rua do Sol", numero: "98", cidade: "Rio de Janeiro", estado: "RJ" }
);
let cliente3 = new Cliente(
  "Maria Oliveira",
  { ddd: 41, numero: "935678901" },
  { rua: "Av. Paraná", numero: "120", cidade: "Curitiba", estado: "PR" }
);

let clientes = [cliente1, cliente2, cliente3];
let clientesOrdenados = ordenarClientes(clientes);

clientesOrdenados.forEach((cliente) => console.log(cliente.getInfo()));
