type tipoPessoa = "PF" | "PJ";

class Cliente {
    id: number;
    nome: string;
    tipo: tipoPessoa;

    constructor(_id : number, _nome : string, _tipo : tipoPessoa) {
        this.id = _id;
        this.nome = _nome;
        this.tipo = _tipo;
    }
}

var pessoa = new Cliente(1, "Adonaldo", "PF");