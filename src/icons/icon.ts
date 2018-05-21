import {Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, Attribute, Optional, OnChanges} from '@angular/core';
import {toBoolean, replaceClass} from '../util/util';
import {NglButton} from '../buttons/button';
import {NglButtonIcon} from '../buttons/button-icon';

@Component({
  selector: 'ngl-icon, [ngl-icon]',
  templateUrl: './icon.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglIcon implements OnChanges {

  @Input() iconName: string;
  @Input() variant: 'default' | 'warning' | 'error';
  @Input() align: 'left' | 'right';
  @Input() size: 'x-small' | 'small' | 'large';
  @Input() alternativeText: string;
  @Input() svgClass: string | string[];

  private button: boolean;
  private _containerClass: string[];

  constructor(public element: ElementRef, public renderer: Renderer2,
              @Attribute('button') button: string,
              @Optional() nglButton: NglButton, @Optional() nglButtonIcon: NglButtonIcon) {

    this.button = button === null ? !!(nglButton || nglButtonIcon) : toBoolean(button);
    renderer.addClass(element.nativeElement, 'slds-icon_container');
  }

  ngOnChanges(changes?: any) {
    const { containerClass } = this;
    replaceClass(this, this._containerClass, containerClass);
    this._containerClass = containerClass;
  }

  svgClasses() {
    const classes = Array.isArray(this.svgClass) ? <string[]>this.svgClass : [this.svgClass || ''];

    const prefix = this.button ? 'slds-button__icon' : 'slds-icon';
    classes.push(prefix);

    if (this.size) {
      classes.push(`${prefix}_${this.size}`);
    }

    if (this.variant) {
      classes.push(`slds-icon-text-${this.variant}`);
    }

    if (this.align) {
      classes.push(`slds-button__icon_${this.align || 'left'}`);
    }

    return classes;
  }

  private get containerClass() {
    return [`slds-icon-${this.normalizedIconName.replace(/(:|_)/g, '-')}`];
  }

  private get normalizedIconName() {
    if (this.iconName.indexOf(':') < 0) {
      return `utility:${this.iconName}`;
    }
    return this.iconName;
  }

};
