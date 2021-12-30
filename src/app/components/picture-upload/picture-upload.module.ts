import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PictureUploadComponent} from "./picture-upload.component";


@NgModule({
  declarations: [PictureUploadComponent],
  exports: [
    PictureUploadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PictureUploadModule {
}
