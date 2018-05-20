import {Directive, Input, ElementRef, Renderer2} from '@angular/core';
import {replaceClass} from '../util/util';
import {ButtonIconVariantOptions} from '../util/types';

const DEFAULT_VARIANT: string = 'border';

@Directive({
  selector: '[nglButtonIcon]',
})
export class NglButtonIcon {

  private _variant: ButtonIconVariantOptions;

  @Input() set nglButtonIcon(variant: ButtonIconVariantOptions) {
    replaceClass(this, this.normalize(this._variant), this.normalize(variant));
    this._variant = variant;
  }

  constructor(public element: ElementRef, public renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, 'slds-button');
    this.renderer.addClass(this.element.nativeElement, 'slds-button_icon');
    this.renderer.addClass(this.element.nativeElement, this.normalize());
  }

  private normalize(variant?: string): string {
    return `slds-button_icon${variant === `''` ? '' : `-${variant || DEFAULT_VARIANT}`}`;
  }
}
