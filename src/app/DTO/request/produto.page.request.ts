export class ProdutoRowRequest {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  imagem: string;

  constructor(id: number, nome: string, preco: number, quantidade: number, imagem: string) {
    this.id = id;
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
  qtdProduto: number;

  constructor(rows: Array<RowRequest>, loadMore: boolean, qtdProduto: number) {
    this.rows = rows;
    this.loadMore = loadMore;
    this.qtdProduto = qtdProduto;
  }
}
