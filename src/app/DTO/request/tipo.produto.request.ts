export default class TipoProdutoRequest {
  nome!: string;
  nomePlural!: string;

  constructor(nome: string, nomePlural: string) {
    this.nome = nome;
    this.nomePlural = nomePlural;
  }
}
