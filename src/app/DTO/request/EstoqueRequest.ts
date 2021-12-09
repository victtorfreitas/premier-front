import ProdutoRequest from "./ProdutoRequest";

export default class EstoqueRequest {
  constructor(id: bigint, total: number, nome: string, descricao: string) {
    this.id = id;
    this.total = total;
    this.descricao = descricao;
    this.nome = nome;
    this.produtos = [];
  }

  id!: bigint;
  descricao!: string;
  nome!: string;
  total!: number;
  produtos!: Array<ProdutoRequest>;
}
