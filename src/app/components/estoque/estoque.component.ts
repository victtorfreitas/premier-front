import {Component, OnInit} from '@angular/core';
import EstoqueRequest from "../../DTO/request/estoque.request";
import {Router} from "@angular/router";
import EstoqueService from "../../service/estoque.service";

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html'
})
export class EstoqueComponent implements OnInit {
  public estoques: Array<EstoqueRequest>;
  private route: Router;

  constructor(route: Router, private estoqueService: EstoqueService) {
    this.estoques = [];
    this.listarTodosEstoques();
    this.route = route;
  }

  ngOnInit(): void {
    this.listarTodosEstoques();
  }

  listarTodosEstoques() {
    this.estoqueService.getTodos()
    .then(value => this.estoques = value);
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
