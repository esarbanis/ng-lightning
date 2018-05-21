import {NgModule, ModuleWithProviders} from '@angular/core';


import {NglAlertModule} from './alert/module';
import {NglBadgesModule} from './badges/module';
import {NglBreadcrumbsModule} from './breadcrumbs/module';
import {NglButtonsModule} from './buttons/module';
import {NglButtonIconsModule} from './buttonicons/module';
import {NglDatatablesModule} from './datatables/module';
import {NglDatepickersModule} from './datepickers/module';
import {NglDynamicIconsModule} from './dynamicicons/module';
import {NglFormsModule} from './forms/module';
import {NglIconsModule} from './icons/module';
import {NglImagesModule} from './images/module';
import {NglLookupsModule} from './lookups/module';
import {NglMenusModule} from './menus/module';
import {NglModalsModule} from './modals/module';
import {NglToastModule} from './toast/module';
import {NglPaginationsModule} from './paginations/module';
import {NglPickModule} from './pick/module';
import {NglPicklistModule} from './picklist/module';
import {NglPillsModule} from './pills/module';
import {NglPopoversModule} from './popovers/module';
import {NglProgressBarModule} from './progressbar/module';
import {NglRatingsModule} from './ratings/module';
import {NglSectionsModule} from './sections/module';
import {NglSpinnersModule} from './spinners/module';
import {NglTabsModule} from './tabs/module';
import {INglConfig} from './config/config.interface';
import {NglConfig, NGL_CONFIG} from './config/config';

export {INglDatatableSort, INglDatatableRowClick} from './datatables/module';
export {INglConfig} from './config/config.interface';
export {NglConfig} from './config/config';

const MODULES = [
  NglAlertModule,
  NglBadgesModule,
  NglBreadcrumbsModule,
  NglButtonsModule,
  NglButtonIconsModule,
  NglDatatablesModule,
  NglDatepickersModule,
  NglDynamicIconsModule,
  NglFormsModule,
  NglIconsModule,
  NglImagesModule,
  NglLookupsModule,
  NglMenusModule,
  NglModalsModule,
  NglToastModule,
  NglPaginationsModule,
  NglPickModule,
  NglPicklistModule,
  NglPillsModule,
  NglPopoversModule,
  NglProgressBarModule,
  NglRatingsModule,
  NglSectionsModule,
  NglSpinnersModule,
  NglTabsModule,
];

@NgModule({
  exports: MODULES,
})
export class NglModule {
  static forRoot(config: INglConfig = {}): ModuleWithProviders {
    return {
      ngModule: NglModule,
      providers: [
        { provide: NGL_CONFIG, useValue: config },
        NglConfig,
      ],
   };
 }
}
