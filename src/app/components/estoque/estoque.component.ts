import {Component, OnInit} from '@angular/core';
import EstoqueRequest from "../../DTO/request/EstoqueRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html'
})
export class EstoqueComponent implements OnInit {
  readonly apiURL: string;
  public estoques: Array<EstoqueRequest>;
  private route: Router;

  constructor(route: Router) {
    this.apiURL = 'http://localhost:8080';
    this.estoques = [];
    this.listarTodosEstoques();
    this.route = route;
  }

  ngOnInit(): void {
    this.listarTodosEstoques();
  }


  async listarTodosEstoques() {
    let response = await fetch(`${this.apiURL}/estoque`);
    this.estoques = await response.json() as Array<EstoqueRequest>;
  }

  formatQuantidade(quantidade: number): string {
    if (quantidade < 10) {
      return "0" + quantidade;
    }
    return quantidade.toString();
  }

  redirectToProdutos(id: bigint) {
    this.route.navigate(['/estoque/' + id + '/produto']);
  }
}
