import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes as demoRoutes } from './routes';

import { NglModule } from 'ng-lightning';

import { ComponentsComponent } from './components';
import { NglDemoSharedModule } from './shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: demoRoutes,
  },
];

@NgModule({
  imports: [
    CommonModule,
    NglDemoSharedModule,
    RouterModule.forChild(routes),
    NglModule,
  ],
  declarations: [
    ComponentsComponent,
  ],
})
export class NglDemoComponentsModule {}
