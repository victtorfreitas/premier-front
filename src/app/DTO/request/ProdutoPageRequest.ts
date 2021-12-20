export class ProdutoRowRequest {
  nome: string;
  preco: number;
  quantidade: number;
  imagem: string;

  constructor(nome: string, preco: number, quantidade: number, imagem: string) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.imagem = imagem;
  }
}

export class RowRequest {
  produtos: Array<ProdutoRowRequest>

  constructor(produtos: Array<ProdutoRowRequest>) {
    this.produtos = produtos;
  }
}

export default class ProdutoPageRequest {
  rows!: Array<RowRequest>
  loadMore: boolean;

  constructor(rows: Array<RowRequest>, loadMore: boolean) {
    this.rows = rows;
    this.loadMore = loadMore;
  }
}
