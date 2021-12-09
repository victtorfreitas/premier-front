import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EstoqueComponent} from './estoque.component';
import {NovoEstoqueModule} from "./novo-estoque/novo-estoque.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    EstoqueComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NovoEstoqueModule
  ]
})
export class EstoqueModule {
}
