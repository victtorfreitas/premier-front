export class ProdutoEstoqueRequest {
  tipoProduto!: string;
  quantidade!: number;

  constructor(tipoProduto: string, quantidade: number) {
    this.tipoProduto = tipoProduto;
    this.quantidade = quantidade;
  }
}

export class ProdutoRequest {
  quantidade: number;
  descricao: string;
  foto: string;
  preco: number;
  tipo: number;
  tags: Array<string>;

  constructor(quantidade: number, descricao: string, foto: string, preco: number, tipo: number, tags: Array<string>) {
    this.quantidade = quantidade;
    this.descricao = descricao;
    this.foto = foto;
    this.preco = preco;
    this.tipo = tipo;
    this.tags = tags;
  }
}
