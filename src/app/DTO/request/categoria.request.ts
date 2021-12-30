export default class CategoriaRequest {
  id: number;
  nome: string;
  nomePlural: string;

  constructor(id: number, nome: string, nomePlural: string) {
    this.id = id;
    this.nome = nome;
    this.nomePlural = nomePlural;
  }
}
