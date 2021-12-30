import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {NovoProdutoComponent} from "./novo-produto.component";
import {PictureUploadModule} from "../../picture-upload/picture-upload.module";
import {NgxMaskModule} from "ngx-mask";
import {CurrencyMaskModule} from "ng2-currency-mask";

@NgModule({
  declarations: [NovoProdutoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    PictureUploadModule,
    NgxMaskModule,
    CurrencyMaskModule
  ]
})
export class NovoProdutoModule {
}
