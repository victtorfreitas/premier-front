import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProdutoComponent} from './produto.component';
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class ProdutoModule { }
