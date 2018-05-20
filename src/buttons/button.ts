import {Component, ElementRef, Input, Renderer2} from '@angular/core';
import {replaceClass} from '../util/util';
import {ButtonVariantOptions} from '../util/types';

@Component({
  selector: '[ngl-button]',
  templateUrl: './button.pug',
})
export class NglButton {

  @Input() set variant(variant: ButtonVariantOptions) {
    replaceClass(this, `${this.prefix}${this._variant}`, variant ? `${this.prefix}${variant}` : '');
    this._variant = variant;
  }
  @Input() iconName: string;
  @Input() iconPosition: 'left' | 'right';

  get svgClasses() {
    return `slds-button__icon slds-button__icon_${this.iconPosition}`;
  }

  private _variant: ButtonVariantOptions;
  private prefix = `slds-button_`;
  constructor(public element: ElementRef, public renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, 'slds-button');
  }

};
