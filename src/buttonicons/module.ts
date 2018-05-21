import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglButtonIcon} from './button-icon';
import {NglIconsModule} from '../icons/module';

const NGL_BUTTON_ICON_DIRECTIVES = [
  NglButtonIcon,
];

@NgModule({
  declarations: NGL_BUTTON_ICON_DIRECTIVES,
  exports: NGL_BUTTON_ICON_DIRECTIVES,
  imports: [CommonModule, NglIconsModule],
})
export class NglButtonIconsModule {}
