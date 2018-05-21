import {Input, ElementRef, Renderer2, Component} from '@angular/core';
import {replaceClass} from '../util/util';
import {ButtonIconSizeOptions, ButtonIconVariantOptions} from '../util/types';

const DEFAULT_VARIANT: string = 'border';

@Component({
  selector: '[nglButtonIcon]',
  templateUrl: './button-icon.pug',
  host: {
    'class': 'slds-button',
  }
})
export class NglButtonIcon {

  private _variant: ButtonIconVariantOptions;

  @Input() set variant(variant: ButtonIconVariantOptions) {
    replaceClass(this, this.normalize(this._variant), this.normalize(variant));
    this._variant = variant;
  }
  @Input() iconName: string;
  @Input() set size(size: ButtonIconSizeOptions) {
    this.renderer.addClass(this.element.nativeElement, `slds-button_icon-${size}`);
  }



  constructor(public element: ElementRef, public renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, this.normalize());
  }

  private normalize(variant?: string): string {
    return `slds-button_icon${variant === `''` ? '' : `-${variant || DEFAULT_VARIANT}`}`;
  }
}
