import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NglDemoApiDocsClass} from "./api-docs/api-docs-class.component";


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
  ],
  declarations: [
    NglDemoApiDocsClass,
  ],
  providers: [],
})
export class NglDemoSharedModule {
}
