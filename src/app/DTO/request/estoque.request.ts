import {ProdutoEstoqueRequest} from "./produto.request";

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
  produtos!: Array<ProdutoEstoqueRequest>;

  static empty() {
    return new EstoqueRequest(BigInt(0), 0, '', '');
  }
}
