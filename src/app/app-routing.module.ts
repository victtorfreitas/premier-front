import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EstoqueComponent} from "./components/estoque/estoque.component";
import {NovoEstoqueComponent} from "./components/estoque/novo-estoque/novo-estoque.component";
import {ProdutoComponent} from "./components/produto/produto.component";
import {NovoProdutoComponent} from "./components/produto/novo-produto/novo-produto.component";

const routes: Routes = [
  {path: "", redirectTo: "index", pathMatch: "full"},
  {path: "index", component: EstoqueComponent},
  {path: "estoque/novo", component: NovoEstoqueComponent},
  {path: "estoque/:id/produto", component: ProdutoComponent},
  {path: "estoque/:id/produto/:idProduto", component: NovoProdutoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
