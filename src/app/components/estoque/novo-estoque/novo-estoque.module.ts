import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {NovoEstoqueComponent} from "./novo-estoque.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    NovoEstoqueComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class NovoEstoqueModule {
}
