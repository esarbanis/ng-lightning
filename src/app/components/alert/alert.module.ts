import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoAlertComponent } from './alert.component';

// Examples
import { DemoAlertBasic } from './examples/basic';
import { NglDemoSharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: DemoAlertComponent },
];

@NgModule({
  imports: [
    CommonModule,
    NglDemoSharedModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoAlertComponent,
    DemoAlertBasic,
  ],
})
export class NglDemoAlertModule {}
