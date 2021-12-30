export default class ProdutoResponse {
  nome: string;
  preco: number;
  quantidade: number;
  tags: Array<string>;
  foto: string;
  categoriaId: number;
  estoqueId: number;

  constructor(nome: string, preco: number, quantidade: number, tags: Array<string>, foto: string, categoriaId: number, estoqueId: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.tags = tags;
    this.foto = foto;
    this.categoriaId = categoriaId;
    this.estoqueId = estoqueId;
  }
}
