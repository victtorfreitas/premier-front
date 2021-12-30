import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProdutoService} from "../../../service/produto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoriaService} from "../../../service/categoria.service";
import CategoriaRequest from "../../../DTO/request/categoria.request";
import ProdutoResponse from "../../../DTO/response/produto.response";
import {ProdutoRequest} from "../../../DTO/request/produto.request";

@Component({
  selector: 'test-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {
  private id: number;
  private idEstoque: number;
  produtoForm!: FormGroup;
  file: any;
  tags: any[string];
  categorias: Array<CategoriaRequest>;
  imgBase64!: string;

  image!: string;
  imagePreviewUrl: any = {};
  @ViewChild("fileInput")
  fileInput!: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,
              private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private route: Router,
              private formBuilder: FormBuilder) {
    this.id = 0;
    this.idEstoque = 0;
    this.tags = [];
    this.categorias = new Array<CategoriaRequest>();
    this.preencheForm();
    this.preencheId();
    this.buscaProduto();
    this.handleImageChange = this.handleImageChange.bind(this);

  }

  ngOnInit() {
    this.buscaCategorias();
    this.file = null;
    this.imagePreviewUrl = "assets/img/image_placeholder.jpg";
  }

  onSubmit() {
    let produto: ProdutoResponse = this.getProdutoResponse();
    this.produtoService.salvar(this.id, produto);
    this.produtoForm.reset();
    this.route.navigate(['estoque/' + this.idEstoque + '/produto']);
  }

  preencheId() {
    this.id = this.getId();
    this.idEstoque = this.getIdEstoque();
  }

  getId(): number {
    let id: number = 0;
    this.activatedRoute.params.subscribe(param => {
      id = param['idProduto'];
    });
    return id;
  }

  getIdEstoque(): number {
    let id: number = 0;
    this.activatedRoute.params.subscribe(param => {
      id = param['id'];
    });
    return id;
  }

  private buscaProduto() {
    this.produtoService.getProdutoBy(this.id)
    .then(response => {
      let produto: ProdutoRequest = response;
      this.produtoForm.setValue({
        nome: produto.descricao,
        categoria: produto.tipo,
        quantidade: produto.quantidade,
        preco: produto.preco,
        tag: ''
      });
      this.tags = produto.tags;
      if (produto.foto) {
        this.imagePreviewUrl = "data:image/jpeg;base64," + produto.foto;
      }
    });
  }

  private preencheForm() {
    this.produtoForm = this.formBuilder.group({
      nome: '',
      categoria: '1',
      quantidade: '0',
      preco: '',
      tag: ''
    });
  }

  handleImageChange($event: any) {
    let reader = new FileReader();
    let file = $event.target.files[0];
    reader.onloadend = () => {
      this.file = file;
      this.imagePreviewUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  handleClick() {
    console.log(this.fileInput.nativeElement);
    this.fileInput.nativeElement.click();
  }

  handleRemove() {
    this.file = null;
    this.imagePreviewUrl =
      this.image !== undefined
        ? this.image
        : "assets/img/image_placeholder.jpg";
    // : "assets/img/image_placeholder.jpg";
    this.fileInput.nativeElement.value = null;
  }

  handleSubmit($event: any) {
    $event.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  }

  addTag() {
    let newTag = this.produtoForm.value?.tag;
    let contain = this.tags.filter((tag: string) => tag == newTag);
    if (contain.length == 0) {
      this.tags.push(newTag);
      this.produtoForm.controls['tag'].reset();
      return;
    }
  }

  plusQuantidade() {
    let quantidade = this.produtoForm.value?.quantidade;
    let sum: number = 1 + parseInt(quantidade);
    this.atualizaQuantidade(sum);
  }

  minusQuantidade() {
    let quantidade = this.produtoForm.value?.quantidade;
    if (quantidade > 0) {
      let sum: number = parseInt(quantidade) - 1;
      this.atualizaQuantidade(sum);
    }
  }

  private atualizaQuantidade(quantidade: number) {
    this.produtoForm.patchValue({
      quantidade: quantidade
    });
  }

  removeTagByIndex(tagSelected: string) {
    this.tags = this.tags.filter((tag: string) => tag !== tagSelected);
  }

  private buscaCategorias() {
    this.categoriaService.getAll()
    .then(response => {
      response.forEach(categoria => {
        this.categorias.push(categoria);
      })
    })
  }

  private getProdutoResponse(): ProdutoResponse {
    let data = this.produtoForm.value;
    return new ProdutoResponse(
      data.nome, data.preco,
      data.quantidade, this.tags, this.imagePreviewUrl.split(",")[1],
      parseInt(data.categoria), this.idEstoque,
    );
  }

  getImagem() {
    return this.imagePreviewUrl == null ?
      "assets/img/image_placeholder.jpg"
      : this.imagePreviewUrl;
  }
}
