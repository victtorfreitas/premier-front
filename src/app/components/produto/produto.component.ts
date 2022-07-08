import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import EstoqueService from "../../service/estoque.service";
import EstoqueRequest from "../../DTO/request/estoque.request";
import ProdutoPageRequest, {RowRequest} from "../../DTO/request/produto.page.request";
import {DomSanitizer} from "@angular/platform-browser";
import {ProdutoService} from "../../service/produto.service";
import CategoriaRequest from "../../DTO/request/categoria.request";
import {CategoriaService} from "../../service/categoria.service";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  private readonly idEstoque: number;
  estoque: EstoqueRequest;
  produtoPageRequest: ProdutoPageRequest;
  categorias: Array<CategoriaRequest>;
  numberPage: number;
  tags: string;
  categoriaId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private estoqueService: EstoqueService,
              private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private sanitizer: DomSanitizer,
              private router: Router) {
    this.idEstoque = this.buscaIdEstoque();
    this.estoque = EstoqueRequest.empty();
    this.categorias = new Array<CategoriaRequest>();
    this.produtoPageRequest = new ProdutoPageRequest(new Array<any>(), false, 0);
    this.numberPage = 0;
    this.categoriaId = 0;
    this.tags = '';
  }

  private buscaIdEstoque(): number {
    let id: number = 0;
    this.activatedRoute.params.subscribe(param => {
      id = param['id'];
    });
    return id;
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.buscaDadosBaseEstoque();
    this.buscaProdutos();
    this.buscaCategorias();
  }

  private buscaDadosBaseEstoque() {
    this.estoqueService.getDadosBaseBy(this.idEstoque)
    .then(response => {
      this.estoque = response;
    });
  }

  private buscaCategorias() {
    this.categoriaService.getAll()
    .then(response => {
      response.forEach(categoria => {
        this.categorias.push(categoria);
      })
    })
  }

  private buscaProdutos() {
    this.estoqueService.getProdutosById(this.idEstoque, this.numberPage, this.tags, this.categoriaId)
    .then(response => {
      console.log(response);
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
    this.estoqueService.getProdutosById(this.idEstoque, this.numberPage, this.tags, this.categoriaId)
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
    //TODO: Descomentar quando produtos estiverem sendo cadastrado
    return "../assets/img/pages/shirt.png";
  }

  linkParaProduto(id: number) {
    this.router.navigate(['estoque/' + this.idEstoque + '/produto/' + id]);
  }

  buscaPorTags(event: any) {
    let data = event.target.value;
    if (data.length > 3) {
      this.tags = data;
      this.numberPage = 0;
      this.buscaProdutos();
    } else {
      this.tags = '';
      this.numberPage = 0;
      this.buscaProdutos();
    }
  }

  buscaPorCategoria(target: any) {
    this.categoriaId = target.value;
    this.numberPage = 0;
    this.buscaProdutos();
  }
}
