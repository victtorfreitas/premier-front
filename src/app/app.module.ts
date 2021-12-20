import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterTestingModule} from "@angular/router/testing";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {EstoqueComponent} from "./components/estoque/estoque.component";
import {NovoEstoqueModule} from "./components/estoque/novo-estoque/novo-estoque.module";
import {FooterComponent} from './components/footer/footer.component';
import {ProdutoModule} from "./components/produto/produto.module";

@NgModule({
  declarations: [
    AppComponent,
    EstoqueComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterTestingModule,
    HttpClientModule,
    NovoEstoqueModule,
    ProdutoModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
