let amigo = {
  nome: "Thiago Nunes Batista",
  sexo: "M",
  peso: 72,
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  }
};

amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
