import {Component, ElementRef, Input, Renderer2} from '@angular/core';

@Component({
  selector: 'ngl-state-on,ngl-state-off,ngl-state-hover',
  templateUrl: './state.pug',
})
export class NglState {

  @Input() iconName: string;
  @Input() iconPosition: 'left' | 'right' = 'left';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    const variant = this.resolveVariant();
    this.renderer.addClass(this.element.nativeElement, `slds-text-${variant}`);
  }

  get svgClasses() {
    return `slds-button__icon_stateful slds-button__icon_${this.iconPosition}`;
  }

  private resolveVariant(): 'selected' | 'not-selected' | 'selected-focus' {
    const tagName = this.element.nativeElement.tagName;
    const _variant = tagName.toLowerCase().split('-').reverse()[0];
    switch (_variant) {
      case 'on':
        return 'selected';
      case 'off':
        return 'not-selected';
      case 'hover':
        return 'selected-focus';
    }
  }
}
