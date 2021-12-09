export default class ProdutoRequest {
  tipoProduto!: string;
  quantidade!: number;

  constructor(tipoProduto: string, quantidade: number) {
    this.tipoProduto = tipoProduto;
    this.quantidade = quantidade;
  }
}
