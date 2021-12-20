import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import EstoqueService from "../../service/EstoqueService";
import EstoqueRequest from "../../DTO/request/EstoqueRequest";
import ProdutoPageRequest, {RowRequest} from "../../DTO/request/ProdutoPageRequest";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  private readonly idEstoque: number;
  estoque: EstoqueRequest;
  produtoPageRequest: ProdutoPageRequest;
  numberPage: number;

  constructor(private route: ActivatedRoute,
              private estoqueService: EstoqueService,
              private sanitizer: DomSanitizer) {
    this.idEstoque = this.buscaIdEstoque();
    this.estoque = EstoqueRequest.empty();
    this.produtoPageRequest = new ProdutoPageRequest(new Array<any>(), false);
    this.numberPage = 0;
  }

  private buscaIdEstoque(): number {
    let id: number = 0;
    this.route.params.subscribe(param => {
      id = param['id'];
    });
    return id;
  }

  ngOnInit(): void {
    this.buscaDadosBaseEstoque();
    this.buscaProdutos();
  }

  private buscaDadosBaseEstoque() {
    this.estoqueService.getDadosBaseBy(this.idEstoque)
    .then(response => {
      this.estoque = response;
    });
  }

  private buscaProdutos() {
    this.estoqueService.getProdutosById(this.idEstoque, this.numberPage)
    .then(response => {
      this.produtoPageRequest = response;
    });
  }

  formataNome(nome: string) {
    if (nome.length <= 14) {
      return nome;
    }
    return nome.substr(0, 13) + "..";
  }

  proximaPagina() {
    this.numberPage = this.numberPage + 1;
    this.estoqueService.getProdutosById(this.idEstoque, this.numberPage)
    .then(response => {
      let rows: Array<RowRequest> = response.rows;
      rows.forEach(row => {
        return this.produtoPageRequest.rows.push(row);
      })
      this.produtoPageRequest.loadMore = response.loadMore;
    });
  }

  getImagem(img: string) {
    if (img) {
      let objectURL = 'data:image/png;base64,' + img;
      return this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
    return "../assets/img/pages/hat.png";
  }
}
