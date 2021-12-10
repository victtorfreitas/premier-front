import {Component, OnInit} from '@angular/core';
import TipoProdutoRequest from "../../../DTO/request/TipoProdutoRequest";
import {FormBuilder, FormGroup} from "@angular/forms";
import EstoqueResponse from "../../../DTO/response/EstoqueResponse";
import {Router} from "@angular/router";
import EndPoint from "../../constant/EndPoint";

@Component({
  selector: 'app-novo-estoque',
  templateUrl: './novo-estoque.component.html',
  styleUrls: ['./novo-estoque.component.css']
})
export class NovoEstoqueComponent implements OnInit {

  tipos: Array<TipoProdutoRequest>;
  readonly apiURL: string;
  indexInterno: number;
  formBuilder: FormBuilder;
  novoEstoqueForm!: FormGroup;
  private estoqueResponse!: EstoqueResponse;
  route: Router;


  constructor(formBuilder: FormBuilder, route: Router) {
    this.apiURL = 'http://localhost:8080';
    this.tipos = [];
    this.indexInterno = 0;
    this.formBuilder = formBuilder;
    this.preencheForm();
    this.route = route;
  }

  private preencheForm() {
    this.novoEstoqueForm = this.formBuilder.group({
      nome: '',
      descricao: ''
    });
  }

  async ngOnInit() {
    // let responseJson = await fetch(`${this.apiURL}/produto/tipo`);
    // this.tipos = await responseJson.json() as Array<TipoProdutoRequest>;
    fetch(`${EndPoint.TIPO_PRODUTO}`)
    .then(async data => {
      this.tipos = await data.json() as Array<TipoProdutoRequest>;
    })
    console.log(this.tipos)
  }

  adicionarRow(): string {
    if (this.indexInterno == 0) {
      this.indexInterno = this.indexInterno + 1;
      return 'row';
    }
    if (this.indexInterno == 1) {
      this.indexInterno = 0;
      return 'row';
    }
    this.indexInterno = this.indexInterno + 1
    return '';
  }

  onSubmit() {
    let data = this.novoEstoqueForm.value;
    console.log(data)
    this.preencheEstoqueResponse(data.nome, data.descricao);
    fetch(`${EndPoint.ESTOQUE}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.estoqueResponse)
      })
    this.novoEstoqueForm.reset();
    this.route.navigate(['index']);
  }

  private preencheEstoqueResponse(nome: string, descricao: string): void {
    this.estoqueResponse = new EstoqueResponse(nome, descricao);
  }
}
